document.addEventListener('DOMContentLoaded', function () {
    // Adding a blinking cursor effect at the footer
    const cursor = document.createElement('span');
    cursor.classList.add('blink');
    cursor.textContent = '_';
    const footer = document.querySelector('footer');
    footer.appendChild(cursor);
});
