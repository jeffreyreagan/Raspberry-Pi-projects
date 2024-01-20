
// main.js
function changePage_2() {
    window.location.href='page_2.html'
    print(console.log)
}
function changePage_3() {
    window.location.href='page_3.html'
}
function changePage_home(){
    window.location.href='/'
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('generateButton');
    var image = document.getElementById('randomImage');

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
