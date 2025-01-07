document.addEventListener("DOMContentLoaded", function () {
    const signinButton = document.getElementById("signin-btn");

    // Check login state on page load
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Set the state based on localStorage
    if (isLoggedIn === "true") {
        setLoggedInState(signinButton);
    } else {
        setLoggedOutState(signinButton);
    }

    // Event listener for the sign-in/sign-out button
    signinButton.addEventListener("click", function () {
        if (signinButton.getAttribute("data-logged-in") === "true") {
            // Handle Logout
            alert("You have been logged out!");
            localStorage.setItem("isLoggedIn", "false");
            setLoggedOutState(signinButton);
        } else {
            // Open login modal
            openModal("login");
        }
    });

    // Add event listeners to forms to validate them on submit
    const signupForm = document.getElementById("signup");
    const loginForm = document.getElementById("login");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            if (!validateSignupForm()) {
                event.preventDefault();
            } else {
                // Simulate successful sign-up
                alert("Sign-up successful!");
                localStorage.setItem("isLoggedIn", "true");
                setLoggedInState(signinButton);
                closeModal();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            } else {
                // Simulate successful login
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                setLoggedInState(signinButton);
                closeModal();
            }
        });
    }
});

// Set the button state to logged in
function setLoggedInState(button) {
    button.textContent = "Logout";
    button.style.backgroundColor = "#ff4500"; // Change button color
    button.setAttribute("data-logged-in", "true");
}

// Set the button state to logged out
function setLoggedOutState(button) {
    button.textContent = "Sign In";
    button.style.backgroundColor = "#d8570d"; // Reset button color
    button.setAttribute("data-logged-in", "false");
}

// Open the specified modal (login or signup)
function openModal(formType) {
    closeModal(); // Close any open modals first
    if (formType === 'login') {
        document.getElementById('login-modal').style.display = 'flex';
    } else if (formType === 'signup') {
        document.getElementById('signup-modal').style.display = 'flex';
    }
}

// Close the modal
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'none';
}

// Validate the sign-up form
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var email = document.getElementById("email").value;

    var isValid = true;

    // Username validation
    if (username.length < 3 || username.length > 25) {
        document.getElementById("username-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("username-error").style.display = "none";
    }

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    // Password validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    if (!password.match(passwordRegex)) {
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("password-error").style.display = "none";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("confirm-password-error").style.display = "none";
    }

    if (isValid) {
        closeModal(); // Close the modal if valid
    }

    return isValid;
}

// Validate the login form
function validateLoginForm() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    var isValid = true;

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("login-email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("login-email-error").style.display = "none";
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("login-password-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("login-password-error").style.display = "none";
    }

    if (isValid) {
        closeModal(); // Close the modal if valid
    }

    return isValid;
}







//product pop up
 function openPopup(image, name, price, summary, discount) {
    var popup = document.getElementById('product-popup');

    // Set image and name
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-name').textContent = name;

    // Update text content after the labels using string concatenation
    document.getElementById('popup-price').innerHTML = '<span class="popup-label">Price:</span> ' + price;
    document.getElementById('popup-summary').innerHTML = '<span class="popup-label">Summary:</span> ' + summary;
    document.getElementById('popup-reviews').innerHTML = '<span class="popup-label">Discount:</span> ' + discount;

    // Display the popup
    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.getElementById('product-popup');
    popup.style.display = 'none';
}

document.getElementById('product-popup').addEventListener('click', function (event) {
    if (event.target === this) {
        closePopup();
    }
});

//cart












