
document.addEventListener("DOMContentLoaded", function () {

    // Dark mode button
    const themeButton = document.getElementById("theme-toggle");

    // Remember the selected theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";
    }

    // Switch between light and dark mode
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    // Contact form interaction
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const response = document.getElementById("form-response");

            if (name === "" || email === "" || message === "") {
                response.textContent = "Please complete all fields.";
                return;
            }

            response.textContent =
                "Thank you, " + name + "! This is a demo form. Your message was not sent.";

            contactForm.reset();
        });
    }
});
