document.addEventListener('DOMContentLoaded', (event) => {
    const car = document.getElementById('car');
    const person = document.querySelector('.person');
    let carTop = car.offsetTop;

    // Function to check for collisions
    function checkCollision() {
        if (isCollision(car, person)) {
            showCollisionDialog();
        }
        requestAnimationFrame(checkCollision);
    }

    // Start checking for collisions
    checkCollision();

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key === 'ArrowUp') {
            if (carTop > 1014) {
                carTop -= 100;
                car.style.top = `${carTop}px`;
            }
        } else if (key === 'ArrowDown') {
            if (carTop < 1314) {
                carTop += 100;
                car.style.top = `${carTop}px`;
            }
        }
    });
});

function isCollision(car, person) {
    const carRect = car.getBoundingClientRect();
    const personRect = person.getBoundingClientRect();

    return !(
        carRect.top > personRect.bottom ||
        carRect.bottom < personRect.top ||
        carRect.left > personRect.right ||
        carRect.right < personRect.left
    );
}

function showCollisionDialog() {
    const dialog = document.createElement('div');
    dialog.style.position = 'fixed';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.padding = '20px';
    dialog.style.backgroundColor = 'white';
    dialog.style.border = '2px solid black';
    dialog.style.zIndex = '1000';
    dialog.innerText = 'Collision detected!';

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = () => {
        document.body.removeChild(dialog);
    };

    dialog.appendChild(closeButton);
    document.body.appendChild(dialog);
}




let progress = 0;

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${progress}%`;
    progressBar.innerText = `${progress}%`;

    if (progress >= 100) {
        progressBar.style.backgroundColor = 'green';
    } else if (progress > 0) {
        progressBar.style.backgroundColor = 'cyan';
    } else {
        progressBar.style.backgroundColor = 'red';
    }
}

function increaseProgress() {
    if (progress < 100) {
        progress += 25;
        updateProgressBar();
    }
}

function decreaseProgress() {
    if (progress > 0) {
        progress -= 25;
        updateProgressBar();
    }
}

document.addEventListener('DOMContentLoaded', updateProgressBar);