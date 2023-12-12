// This function will handle both click and touchstart events
function toggleMenu(event) {
    event.preventDefault(); // Prevents the default action of the event
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Attach event listeners to both click and touchstart events
document.querySelector('.nav-burger').addEventListener('click', toggleMenu);
document.querySelector('.nav-burger').addEventListener('touchstart', toggleMenu);

document.querySelector('.nav-close').addEventListener('click', toggleMenu);
document.querySelector('.nav-close').addEventListener('touchstart', toggleMenu);
