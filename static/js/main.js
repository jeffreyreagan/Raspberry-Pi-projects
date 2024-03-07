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
