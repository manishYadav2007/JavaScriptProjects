document.addEventListener("DOMContentLoaded", () => {

    const progress = document.getElementById("musicTimeline");
    const contronIconEl = document.getElementById("contronIcon");
    const playPauseControlEl = document.getElementById("playPauseControl");

    const audioPlayerEl = document.getElementById("audioPlayer");
    const songTitleEl = document.getElementById("songTitle");
    const artistNameEl = document.getElementById("artistName");
    const albumImageEl = document.getElementById("albumImage");


    const previousSongButtonEl = document.getElementById("previousSongButton");
    const nextSongButtonEl = document.getElementById("nextSongButton");

    let currentSongIndex = 0;




    let musicList = [
        {
            title: "Vaaste",
            artist: "Dhvani Bhanushali",
            songUrl: "https://res.cloudinary.com/dyjo8b263/video/upload/v1754663681/_Dhvani_Bhanushali__Tanishk_Bagchi__Nikhil_D__Bhushan_Kumar__Radhika_Rao__Vinay_Sapru_128k_j9w9g8.mp3",
            albumImage: "https://i.scdn.co/image/ab67616d0000b2738dce351c5e4a62c2ea2dd498"
        },
        {
            title: "Hypnotized",
            artist: "Ishaan Khan",
            songUrl: "https://res.cloudinary.com/dyjo8b263/video/upload/v1754663869/Hypnotize_1_aucsy5.mp3",
            albumImage: "https://i.scdn.co/image/ab67616d0000b2738c08ce7ef4f36d4f8e9d5960"
        },
        {
            title: "Baby Girl",
            artist: "Guru Randhawa",
            songUrl: "https://res.cloudinary.com/dyjo8b263/video/upload/v1754577463/Baby_Girl_-_Guru_Randhawa_c70mdf.mp3",
            albumImage: "https://i.scdn.co/image/ab67616d00001e0233f648898c89bc72e75eec43"
        }
    ]


    let songLoad = (currentSongIndex) => {
        const currentSong = musicList[currentSongIndex];
        songTitleEl.textContent = currentSong.title;
        artistNameEl.textContent = currentSong.artist;
        albumImageEl.src = currentSong.albumImage;
        audioPlayerEl.src = currentSong.songUrl;

    }

    songLoad(currentSongIndex);

    audioPlayerEl.onloadedmetadata = () => {
        progress.max = audioPlayerEl.duration;
        console.log(progress.max = audioPlayerEl.duration);

        progress.value = audioPlayerEl.currentTime;
        console.log(progress.value = audioPlayerEl.currentTime);

    }


    let playPause = () => {
        if (audioPlayerEl.paused) {
            audioPlayerEl.play();
            contronIconEl.classList.remove("fa-play");
            contronIconEl.classList.add("fa-pause");
        }
        else {
            audioPlayerEl.pause();
            contronIconEl.classList.remove("fa-pause");
            contronIconEl.classList.add("fa-play");
        }
    }

    playPauseControlEl.addEventListener("click", playPause);

    audioPlayerEl.addEventListener("timeupdate", () => {
        progress.value = audioPlayerEl.currentTime;
        console.log(progress.value = audioPlayerEl.currentTime);
    })


    progress.oninput = () => {
        audioPlayerEl.currentTime = progress.value;
        console.log();


        if (audioPlayerEl.paused) {
            audioPlayerEl.play();
            contronIconEl.classList.remove("fa-play");
            contronIconEl.classList.remove("fa-pause");
        }

    }


    document.addEventListener("keydown", (event) => {
        if (event.key === " ") {
            event.preventDefault();
            playPause();
        }
    })


    let nextSongPlay = () => {
        currentSongIndex++;
        if (currentSongIndex > musicList.length - 1) {
            currentSongIndex = 0;
        }
        songLoad(currentSongIndex);
        audioPlayerEl.play();
    }

    nextSongButtonEl.addEventListener("click", () => nextSongPlay());




    let playPreviousSong = () => {
        currentSongIndex--; 
        if (currentSongIndex < 0) {
            currentSongIndex = musicList.length - 1; 
        }
        songLoad(currentSongIndex); 
        audioPlayerEl.play(); 
    }


    previousSongButtonEl.addEventListener("click", () => playPreviousSong());




    document.addEventListener("keydown", (event) => {
            if (event.key  === "ArrowLeft"  ) {
                playPreviousSong(); 
            }
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            nextSongPlay(); 
        }
    })




})