let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * (100 / totalSlides);
    document.querySelector('.slides').style.animation = 'none';
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = page.id === targetId ? 'block' : 'none';
        });
    });
});

function validateField(field) {
    const fullName = document.getElementById('fullName');
    const emailAddress = document.getElementById('emailAddress');
    const program = document.getElementById('program');
    const events = document.querySelectorAll('input[name="event"]:checked');

    if (field.id === 'fullName' || field === fullName) {
        const nameValue = fullName.value.trim();
        if (nameValue.length < 5) {
            document.getElementById('fullNameError').textContent = 'El nombre debe tener al menos 5 caracteres';
            fullName.style.borderColor = '#ff4d4d';
        } else {
            document.getElementById('fullNameError').textContent = '';
            fullName.style.borderColor = '#ddd';
        }
    }

    if (field.id === 'emailAddress' || field === emailAddress) {
        const emailValue = emailAddress.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            document.getElementById('emailAddressError').textContent = 'Ingresa un correo válido';
            emailAddress.style.borderColor = '#ff4d4d';
        } else {
            document.getElementById('emailAddressError').textContent = '';
            emailAddress.style.borderColor = '#ddd';
        }
    }

    if (field.id === 'program' || field === program) {
        if (!program.value) {
            document.getElementById('programError').textContent = 'Selecciona un programa';
            program.style.borderColor = '#ff4d4d';
        } else {
            document.getElementById('programError').textContent = '';
            program.style.borderColor = '#ddd';
        }
    }

    if (field.name === 'event' || field === document.querySelector('input[name="event"]')) {
        if (events.length < 2) {
            document.getElementById('eventError').textContent = 'Selecciona al menos 2 conferencias';
        } else {
            document.getElementById('eventError').textContent = '';
        }
    }
}

function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName');
    const emailAddress = document.getElementById('emailAddress');
    const program = document.getElementById('program');
    const events = document.querySelectorAll('input[name="event"]:checked');

    validateField(fullName);
    validateField(emailAddress);
    validateField(program);
    validateField(document.querySelector('input[name="event"]'));

    const hasErrors = document.querySelectorAll('.error-message:not(:empty)').length > 0;
    if (!hasErrors && fullName.value && emailAddress.value && program.value && events.length >= 2) {
        alert('¡Inscripción exitosa! Te hemos enviado un correo de confirmación.');
        document.getElementById('signupForm').reset();
        document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
        document.querySelectorAll('input, select').forEach(field => field.style.borderColor = '#ddd');
    }
}