// POP-UP

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (!event.target.closest('.popup-menu') && !event.target.closest('.button-menu')) {
            closePopup();
        }
    });
});

function fadeOutAnimation(popup) {
    popup.style.animation = 'fadeOutScale 0.5s forwards';

    setTimeout(function () {
        popup.style.display = 'none';
        popup.style.animation = 'fadeInScale 0.5s forwards';
    }, 500);
}

function popupMenu(popupMenu) {
    let currentPopup = document.getElementById(popupMenu);
    let popup = document.querySelectorAll('.popup-menu');
    let draw = document.querySelector('.wallpaper');

    popup.forEach(function (item) {
        if (item !== currentPopup) {
            item.style.display = 'none';
        }
    });

    if (currentPopup.style.display === 'flex') {
        fadeOutAnimation(currentPopup);
        draw.classList.remove('blur');
        draw.classList.add('unblur');
    } else {
        currentPopup.style.display = 'flex';
        draw.classList.remove('unblur');
        draw.classList.add('blur');
    }
}