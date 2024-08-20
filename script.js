// script.js

// Adding a blinking cursor effect
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('span');
    cursor.classList.add('blink');
    cursor.textContent = '_';
    document.body.appendChild(cursor);

    const footer = document.querySelector('footer');
    footer.insertBefore(cursor, footer.firstChild);
});
