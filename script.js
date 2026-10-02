"use strict";
const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");
toggleButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "🙈";
        toggleButton.setAttribute("aria-label", "Hide password");
    }
    else {
        passwordInput.type = "password";
        toggleButton.textContent = "👁";
        toggleButton.setAttribute("aria-label", "Show password");
    }
});
