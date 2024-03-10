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

// Function to toggle the visibility of navbar-nav
// Function to toggle the visibility of navbar-nav


// Function to show navbar-nav on screens 1640px or wider
function showNavbarOnWideScreens() {
    var screenWidth = window.innerWidth;
    var navbarNav = document.querySelector('.navbar-nav');

    // If screen width is 1640px or wider, display navbar-nav
    if (screenWidth >= 1640) {
        navbarNav.classList.add('show');
        console.log('adding show class to navbar-nav');
        
    } else {
        navbarNav.classList.remove('show');
        console.log("removing show class from navbar-nav");
    }
}

function toggleNavbar() {
    var navbarNav1 = document.querySelector('.navbar-nav');
    
    console.log('toggle navbar called');
    if (navbarNav1.style.display === 'block') {
        // If navbar-nav is currently shown, hide it
        navbarNav1.style.display = 'none';
        console.log('should be hidden');
    } else {
        // If navbar-nav is currently hidden, show it
        navbarNav1.style.display = 'block';
        console.log('should be shown');
    } 
}
// Initial call to show navbar-nav on page load
showNavbarOnWideScreens();

// Event listener for window resize to adjust navbar-nav visibility
window.addEventListener('resize', function() {
    showNavbarOnWideScreens();
});

// Event listener for toggleNavbar button click


document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('generateButton');
    var image = document.getElementById('randomImage');
    var envelope1 = document.getElementById('envelope1');
    var envelope2 = document.getElementById('envelope2');
    var envelope3 = document.getElementById('envelope3');
    const popup = document.getElementById('popup');
const content = document.getElementById('content');
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
        
        fetch('/api/server_ip')
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        // Extract server IP address from JSON data
        const ip = data.server_ip;
        // Update the HTML content with the server IP address
        document.getElementById('serverip').innerText = "Raspberry Pi 4b Server IP Address: " + ip;
    })
    .catch(error => console.error('Error fetching server IP address:', error));
    var envelope = document.getElementById("envelope1");

    // Set the initial direction of the envelope movement
    var direction = 1; // 1 for moving right, -1 for moving left

    // Set the initial position of the envelope
    var currentPosition = 0;
    
    // Set the step size for each movement
    var step; // Step value to be defined based on the device type
    
    // Function to animate the envelope's movement
    function animateEnvelope() {
        // Calculate the width of the window
        var windowWidth = window.innerWidth;
    
        // Calculate the new position based on the direction and window width
        var newPosition = currentPosition + direction * step * (windowWidth / 700); // 700 is the total width including margins
    
        // Check if the envelope has reached the right edge of the computer
        if (newPosition >= windowWidth - 250 && direction === 1) {
            popup.style.display = 'none';
            direction = -1; // Change direction to move left
        }
    
        // Check if the envelope has reached the left edge of the raspi
        if (newPosition <= 0 && direction === -1) {
            direction = 1;
            popup.style.display = 'block'; // Change direction to move right
            generateContent(); // Update content when the envelope reaches the left edge
        }
    
        // Update the position of the envelope
        currentPosition = newPosition;
        envelope.style.marginLeft = currentPosition + "px";
    
        // Call animateEnvelope recursively to create continuous animation
        requestAnimationFrame(animateEnvelope);
    }
    
    let intervalId;
    function generateContent() {
        clearInterval(intervalId);
        // Generate random 0s and 1s in the popup content
        let contentHTML = '';
        for (let i = 0; i < 10; i++) {
            const randomBit = Math.round(Math.random()); // Generate random 0 or 1
            contentHTML += '<span id="num' + i + '">' + randomBit + '</span>';
        }
        content.innerHTML = contentHTML;
    
        // Update numbers every 300 milliseconds
        intervalId = setInterval(updateNumbers, 300);
    }
    function updateNumbers() {
        // Loop through the spans and update their content
        for (let i = 0; i < 10; i++) {
            const span = document.getElementById('num' + i);
            if (span.textContent === '0') {
                span.textContent = '1';
            } else {
                span.textContent = '0';
            }
        }
    }
    
    // Check if it's a mobile device or desktop and set the appropriate step value
    if (/Mobi/.test(navigator.userAgent)) {
        // Mobile device detected
        step = 5; // Adjust step value for mobile
    } else {
        // Desktop device detected
        step = 1; // Adjust step value for desktop
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
