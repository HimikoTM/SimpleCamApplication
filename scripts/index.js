document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var video = document.getElementById("vid");

    var mediaDevices = navigator.mediaDevices;

    vid.muted = true;

    but.addEventListener("click", () => {
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });
});