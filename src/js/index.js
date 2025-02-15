// Controle de música
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicControl");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "🎵 Pausar Música";
    } else {
        music.pause();
        musicButton.textContent = "🎵 Tocar Música";
    }
}

// Revelação da Mensagem
function revealMessage() {
    const heart = document.querySelector(".heart");
    const card = document.querySelector(".card-container");

    heart.style.opacity = "0";
    setTimeout(() => {
        heart.style.display = "none";
        card.style.display = "block";
    }, 500);
}
