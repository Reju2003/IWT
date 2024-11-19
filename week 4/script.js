function validateForm(event) {
    event.preventDefault();

    // Validate Username
    var username = document.getElementById("username").value;
    if (!/^[A-Za-z]{6,}$/.test(username)) {
        alert("Username must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // Validate Password
    var password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Confirm Password
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Validate Email
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // Validate Phone Number
    var phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits long.");
        return false;
    }

    // Address validation can be added if needed

    // If all validations pass, submit the form
    document.querySelector("form").submit();
}
