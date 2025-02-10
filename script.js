document.addEventListener("DOMContentLoaded", function() {
    // Music Button
    const playMusicButton = document.getElementById("playMusic");
    const youtubeAudio = document.getElementById("youtubeAudio");

    if (playMusicButton && youtubeAudio) {
        let isPlaying = false;

        playMusicButton.addEventListener("click", function() {
            if (!isPlaying) {
                // Unmute and play the video
                youtubeAudio.src += "&mute=0";
                isPlaying = true;
                playMusicButton.textContent = "Pause Music ⏸️";
            } else {
                // Pause the video
                youtubeAudio.src = youtubeAudio.src.replace("&mute=0", "&mute=1");
                isPlaying = false;
                playMusicButton.textContent = "Play Music 🎶";
            }
        });
    }

    // Questionnaire Submission
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

            if (isNaN(age) || age <= 0) {
                alert("Please enter a valid age!");
                return;
            }

            document.getElementById("questionnaireResult").textContent = `Congratulations, ${name}! 🎉 You won a Valentine's surprise!`;
            document.getElementById("claimPrize").style.display = "inline-block";
        });
    }
});
