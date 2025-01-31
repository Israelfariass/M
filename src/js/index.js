document.addEventListener("DOMContentLoaded", function() {
    let heart = document.getElementById("heart");
    let message = document.getElementById("message");
    let hiddenImage = document.getElementById("hiddenImage");

    heart.addEventListener("click", function() {
        heart.style.opacity = "0"; // Some com o coração
        hiddenImage.style.display = "block"; // Mostra a imagem primeiro
        setTimeout(() => {
            message.style.opacity = "1"; // Depois, mostra o texto
        }, 1000);
    });
});
