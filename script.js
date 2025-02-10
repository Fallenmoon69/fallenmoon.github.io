document.addEventListener("DOMContentLoaded", function() {
    // Music play button
    const playMusicButton = document.getElementById("playMusic");
    const backgroundMusic = document.getElementById("backgroundMusic");

    if (playMusicButton && backgroundMusic) {
        playMusicButton.addEventListener("click", function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                playMusicButton.textContent = "Pause Music";
            } else {
                backgroundMusic.pause();
                playMusicButton.textContent = "Play Music";
            }
        });
    }

    // Questionnaire submission
    const submitQuestionnaire = document.getElementById("submitQuestionnaire");
    if (submitQuestionnaire) {
        submitQuestionnaire.addEventListener("click", function() {
            const name = document.getElementById("name").value.trim();
            const age = document.getElementById("age").value.trim();
            const chocolate = document.getElementById("chocolate").value.trim();
            const coffee = document.getElementById("coffee").value.trim();
            const valentine = document.getElementById("valentine").value.trim();
            
            if (!name || !age || !chocolate || !coffee || !valentine) {
                alert("Please fill in all fields before submitting!");
                return;
            }

            document.getElementById("questionnaireResult").textContent = `Congratulations, ${name}! 🎉 You won a Valentine's surprise!`;
            document.getElementById("claimPrize").style.display = "inline-block";
        });
    }
});
