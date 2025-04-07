// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form Validation
const form = document.getElementById('demoForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        document.getElementById('passwordError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Interactive Elements
const addItemButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');
let itemCount = 1;

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount++}`;
    
    // Add hover effects
    newItem.addEventListener('mouseover', () => {
        newItem.innerHTML += ' <button class="remove-btn">×</button>';
    });

    newItem.addEventListener('mouseout', () => {
        newItem.querySelector('.remove-btn').remove();
    });

    // Add remove functionality
    newItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            newItem.remove();
        }
    });

    itemList.appendChild(newItem);
});

// Input real-time validation
nameInput.addEventListener('input', () => {
    document.getElementById('nameError').style.display = 
        nameInput.value.trim() === '' ? 'inline' : 'none';
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('emailError').style.display = 
        emailRegex.test(emailInput.value) ? 'none' : 'inline';
});

passwordInput.addEventListener('input', () => {
    document.getElementById('passwordError').style.display = 
        passwordInput.value.length >= 6 ? 'none' : 'inline';
});