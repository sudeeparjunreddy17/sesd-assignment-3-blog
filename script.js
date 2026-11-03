
const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("subscribeMessage");

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    message.textContent =
        "Thank you for subscribing! Welcome to The Daily Journal.";

    message.style.color = "#83d9a7";

    subscribeForm.reset();

});

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("The Daily Journal website loaded successfully!");
