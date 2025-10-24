document.addEventListener("DOMContentLoaded", () => {
  const videoPreview = document.getElementById("video-preview");
  const shareCameraBtn = document.getElementById("share-camera-btn");
  const shareScreenBtn = document.getElementById("share-screen-btn");
  const startRecordBtn = document.getElementById("start-record-btn");
  const stopRecordBtn = document.getElementById("stop-record-btn");
  const downloadLinks = document.getElementById("download-links");

  let mediaStream = null;
  let mediaRecorder = null;
  let recordedChunks = [];

  const startCamera = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      console.log(mediaStream);
      
      videoPreview.srcObject = mediaStream;
      videoPreview.classList.remove("screen");
      updateUiForStream();
    } catch (error) {
      alert("Could not access the camera. Please grant permission.");
    }
  };

  const startRecording = () => {
    if (!mediaStream) return;

    recordedChunks = [];

    mediaRecorder = new MediaRecorder(mediaStream);
    console.log(mediaRecorder);
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      createDownloadLink();
    };

    mediaRecorder.start();
    updateUIForRecording();
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach((track) => track.stop());
      updateUiForStop();
    }
  };

  const createDownloadLink = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    console.log(blob);
    
    const url = URL.createObjectURL(blob);
    console.log(url);
    const listItems = document.createElement("li");
    const downloadLink = document.createElement("a");

    downloadLink.href = url;
    downloadLink.download = `recording-${new Date().toISOString()}.webm`;
    downloadLink.textContent = `Download Recording (${(
      blob.size /
      1024 /
      1024
    ).toFixed(2)} MB)`;
    listItems.appendChild(downloadLink);
    downloadLinks.appendChild(listItems);
  };

  const updateUiForStream = () => {
    startRecordBtn.disabled = false;
    shareCameraBtn.disabled = true;
  };

  const updateUIForRecording = () => {
    startRecordBtn.style.display = "none";
    stopRecordBtn.style.display = "inline-block";
  };

  const updateUiForStop = () => {
    startRecordBtn.style.display = "inline-block";
    startRecordBtn.disabled = true;
    stopRecordBtn.style.display = "none";
    shareCameraBtn.disabled = false;
    shareScreenBtn.disabled = false;
    videoPreview.srcObject = null;
  };

  shareCameraBtn.addEventListener("click", startCamera);
  startRecordBtn.addEventListener("click", startRecording);
  stopRecordBtn.addEventListener("click", stopRecording);
});
