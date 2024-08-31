function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function showVideo(type) {
    var video = document.getElementById("video-player");
    switch(type) {
        case 'domande':
            video.src = "video/domande.mp4";
            break;
        case 'su_di_me':
            video.src = "video/su_di_me.mp4";
            break;
        case 'hobbies':
            video.src = "video/hobbies.mp4";
            break;
    }
    video.style.display = "block";
    video.play();
}

function changeLanguage() {
    var language = document.getElementById("language").value;
    // Logica per cambiare la lingua dei contenuti (da implementare)
}
