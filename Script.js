document.addEventListener('DOMContentLoaded', (event) => {
    const car = document.getElementById('car');
    const person = document.querySelector('.person');
    let carTop = car.offsetTop;
    let canMove = true; // Flag to control movement

    // Function to check for collisions
    function checkCollision() {
        if (isCollision(car, person)) {
            showCollisionDialog();
            canMove = false; // Stop movement when a collision is detected
            car.classList.add('stop-animation'); // Stop car animation
            person.classList.add('stop-animation'); // Stop person animation
        }
        requestAnimationFrame(checkCollision);
    }

    // Start checking for collisions
    checkCollision();

    document.addEventListener('keydown', (event) => {
        if (!canMove) return; // Prevent movement if canMove is false

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

    const option1Button = document.createElement('button');
    option1Button.innerText = 'Option 1';
    option1Button.onclick = () => {
        alert('Option 1 selected');
        document.body.removeChild(dialog);
        canMove = true; // Allow movement after a dialog option is chosen
        car.classList.remove('stop-animation'); // Resume car animation
        person.classList.remove('stop-animation'); // Resume person animation
    };

    const option2Button = document.createElement('button');
    option2Button.innerText = 'Option 2';
    option2Button.onclick = () => {
        alert('Option 2 selected');
        document.body.removeChild(dialog);
        canMove = true; // Allow movement after a dialog option is chosen
        car.classList.remove('stop-animation'); // Resume car animation
        person.classList.remove('stop-animation'); // Resume person animation
    };

    const option3Button = document.createElement('button');
    option3Button.innerText = 'Option 3';
    option3Button.onclick = () => {
        alert('Option 3 selected');
        document.body.removeChild(dialog);
        canMove = true; // Allow movement after a dialog option is chosen
        car.classList.remove('stop-animation'); // Resume car animation
        person.classList.remove('stop-animation'); // Resume person animation
    };

    dialog.appendChild(option1Button);
    dialog.appendChild(option2Button);
    dialog.appendChild(option3Button);
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