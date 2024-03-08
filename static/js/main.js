// main.js
function changePage_2() {
    window.location.href = 'page_2.html';
}

function changePage_3() {
    window.location.href = 'page_3.html';
}

function changePage_home() {
    window.location.href = '/';
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('generateButton');
    var image = document.getElementById('randomImage');
    var envelope1 = document.getElementById('envelope1');
    var envelope2 = document.getElementById('envelope2');
    var envelope3 = document.getElementById('envelope3');
    // Fetch data from the server to get current time and temperature
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            console.log('Received data:', data);
            // Update the HTML content with the received data
            document.getElementById('time').innerText = data.time;
            document.getElementById('temperature').innerText = data.temperature;
        })
        .catch(error => console.error('Error fetching data:', error));
    var envelope = document.getElementById("envelope1");

    // Set the initial direction of the envelope movement
    var direction = 1; // 1 for moving right, -1 for moving left

    // Set the initial position of the envelope
    var currentPosition = 0;

    // Set the step size for each movement
    var step = 1; // Adjust as needed

    // Function to animate the envelope's movement
    function animateEnvelope() {
        // Calculate the width of the window
        var windowWidth = window.innerWidth;
    
        // Calculate the new position based on the direction and window width
        var newPosition = currentPosition + direction * step * (windowWidth / 700); // 700 is the total width including margins
    
        // Check if the envelope has reached the right edge of the computer
        if (newPosition >= windowWidth - 650) { // 100 is the width of the envelope image
            direction = -1; // Change direction to move left
        }
    
        // Check if the envelope has reached the left edge of the raspi
        if (newPosition <= 0) {
            direction = 1; // Change direction to move right
        }
    
        // Update the position of the envelope
        currentPosition = newPosition;
        envelope.style.marginLeft = currentPosition + "px";
    
        // Call animateEnvelope recursively to create continuous animation
        requestAnimationFrame(animateEnvelope);
    }
    
    // Start the animation
    animateEnvelope();

    // Event listener for button click to fetch random image
    button.addEventListener('click', function () {
        fetch('/api/get_random_image')
            .then(response => response.blob())
            .then(blob => {
                var imageUrl = URL.createObjectURL(blob);
                image.src = imageUrl;
            })
            .catch(error => console.error('Error fetching random image:', error));
    });

});
