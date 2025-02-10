document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

document.getElementById("spinButton")?.addEventListener("click", function() {
    document.getElementById("result").textContent = "Congratulations! You won a Valentine's surprise!";
    document.getElementById("claimPrize").style.display = "block";
});
