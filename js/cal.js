const wrapperElements = document.querySelectorAll('.wrapper'); // Get all popup wrappers

function togglePopup(num) {
    const popupId = `popup-${num}`;
    const popupElement = document.getElementById(popupId);
    
    // Close other popups
    wrapperElements.forEach((wrapper) => {
        if (wrapper !== popupElement) {
            wrapper.classList.remove('active-popup');
        }
    });

    // Toggle the selected popup
    popupElement.classList.toggle('active-popup');
}
