const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');
const detailsContainer = document.getElementById('details-container');
const screen = document.getElementById('screen');

openCloseButton.addEventListener('click', (e) => {
    menuMobileItems.classList.toggle('menu-mobile-closed');
});

workItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));

        // Hide all items and show the current one
        const contentArr = document.querySelectorAll('#details-container .item');
        contentArr.forEach((item) => {
            item.classList.add('item-hide');
        });
        contentArr[currentIndex].classList.remove('item-hide');

        // Show the screen with a fade-in animation
        screen.style.animationName = 'fade-in';
        screen.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Show the details container after a delay
        setTimeout(() => {
            detailsContainer.style.display = 'block';
        }, 1000);

        // Remove the fade-in animation after a delay
        setTimeout(() => {
            screen.style.animationName = '';
        }, 2000);
    });
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    screen.style.animationName = 'fade-in';
    document.body.style.overflow = 'auto';

    setTimeout(() => {
        detailsContainer.style.display = 'none';
    }, 1000);

    setTimeout(() => {
        screen.style.animationName = '';
    }, 2000);
});

prevButton.addEventListener('click', (e) => {
    if (currentIndex - 1 < 0) {
        return;
    }
    currentIndex--;
    loadGalleryItem(currentIndex);
});

nextButton.addEventListener('click', (e) => {
    if (currentIndex + 1 >= workItemsCount) {
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
    const items = document.querySelectorAll('#details-container .item');
    items.forEach((item) => {
        item.classList.add('item-hide');
    });
    items[index].classList.remove('item-hide');
}