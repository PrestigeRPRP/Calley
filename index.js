    const audio = document.getElementById('background-music');
    audio.volume = 0.1; // Set volume to 10%

    // Function to play audio
    function playAudio() {
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    }

    // Add click event listener to the secret message div
    const secretMessageDiv = document.querySelector('.secret_message');
    secretMessageDiv.addEventListener('click', function() {
        // Display the secret message
        const message = this.getAttribute('data-text');
        this.innerHTML = message;

        // Play the audio
        playAudio();
    });

    // Add click event listener to the start image
    const startLink = document.querySelector('.start');
    startLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        playAudio();
    });
