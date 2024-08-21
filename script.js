document.addEventListener('DOMContentLoaded', function () {
    // Adding a blinking cursor effect
    const cursor = document.createElement('span');
    cursor.classList.add('blink');
    cursor.textContent = '_';
    document.body.appendChild(cursor);

    const footer = document.querySelector('footer');
    footer.insertBefore(cursor, footer.firstChild);
});
