document.addEventListener("DOMContentLoaded", () => {
    const carLeft = document.querySelector('.car-left');
    const person = document.querySelector('.person');

    // Legg til animasjonsklasser til bilene og personen
    carLeft.classList.add('drive-left');
    person.classList.add('walk-right');
});