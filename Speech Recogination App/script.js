

document.addEventListener("DOMContentLoaded", () => {
    const micBtn = document.getElementById('mic-btn');
    const statusText = document.getElementById('status-text');
    const transcriptOutput = document.getElementById('transcript-output');



    const SpeechRecognition = document.SpeechRecognition || window.webkitSpeechRecognition;



    if (!SpeechRecognition) {
        statusText.innerHTML = "Sorry, your browser does not support Speech Recognition.";
        micBtn.disabled = true;
        return;
    }


    let recognition = new SpeechRecognition();

    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.lang = "en-US";


    let isListening = false;


    micBtn.addEventListener("click", () => {
        isListening ? recognition.stop() : recognition.start();
        isListening = !isListening;
    })


    recognition.onstart = () => {
        statusText.innerHTML = "Listening...";
        micBtn.classList.add("is-listening");
    }


    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';


        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                finalTranscript += transcript + `. `;
            }
            else {
                interimTranscript += transcript;
                console.log(interimTranscript);

            }
        }

        transcriptOutput.innerHTML = finalTranscript + `<i style="color: #94a3b8;">${interimTranscript}</i>`;


        recognition.onend = () => {
            statusText.innerHTML = "Click the mic to start listening";
            micBtn.classList.remove("is-listening");
            isListening = false;
        }


        recognition.onerror = (event) => {
            console.error("Speech recognition error: ", event.error);
            statusText.innerHTML = `Error: ${event.error}`;
            micBtn.classList.remove("is-listening");
            isListening = false;
        }

    }






})