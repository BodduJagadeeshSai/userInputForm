document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const passwordValidation = document.getElementById('passwordValidation');

    function validatePassword(password) {
        const testing = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return testing.test(password);
    }

    function showPasswordValidation(isValid) {
        if (isValid) {
            passwordValidation.textContent = 'Password is valid';
            passwordValidation.style.color = 'green';
        } else {
            passwordValidation.textContent = 'Password must be at least 8 characters long, contain one uppercase letter, and one number';
            passwordValidation.style.color = 'red';
        }
    }

    signupBtn.addEventListener('click', function() {
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        if (validatePassword(password)) {
            showPasswordValidation(true);

            if (localStorage.getItem(username)) {
                alert('User already exists!');
            } else {
                localStorage.setItem(username, password);
                alert('User signed up successfully!');
            }
        } else {
            showPasswordValidation(false);
        }
    });

    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
        } else {
            alert('User does not exist or incorrect password!😒');
        }
    });
});
