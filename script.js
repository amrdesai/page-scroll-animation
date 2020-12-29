// Variables
const boxes = document.querySelectorAll('.box');

// Function
const checkBoxes = (params) => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
};

// Event Listener
window.addEventListener('scroll', checkBoxes);
