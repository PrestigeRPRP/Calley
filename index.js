const audio = document.getElementById('background-music');
    audio.volume = 0.1; // Set volume to 10%

    const secretMessageDiv = document.querySelector('.secret_message');

    // Add click event listener to the secret message div
    secretMessageDiv.addEventListener('click', function() {
        // Display the secret message
        const message = this.getAttribute('data-text');
        this.innerHTML = message;

        // Play the audio
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    });

    // Optional: Start playing audio when the start image is clicked
    const startLink = document.querySelector('.start');
    startLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    });
