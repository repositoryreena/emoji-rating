// script.js

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const face = document.querySelector('.face');
    
    // Define Font Awesome icon classes and colors for different ratings
    const emojis = [
        'fa-face-angry',   // 1 star
        'fa-face-frown',   // 2 stars
        'fa-face-meh',     // 3 stars
        'fa-face-smile',   // 4 stars
        'fa-face-laugh'    // 5 stars
    ];
    
    const colors = [
        'red',            // 1 star
        'orange',         // 2 stars
        'lightblue',      // 3 stars
        'lightgreen',     // 4 stars
        'darkgreen'       // 5 stars
    ];

    // Function to update the rating
    function updateRating(index) {
        stars.forEach((s, i) => {
            s.classList.toggle('yellow', i <= index);
        });
        face.className = `fa-regular ${emojis[index]} face`;
        face.style.color = colors[index];
    }

    // Set initial state
    updateRating(0); // Default to 1 star with angry face

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            updateRating(index);
        });
    });
});
