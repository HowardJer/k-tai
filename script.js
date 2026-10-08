const petName = document.getElementById("pet-name");
const registerButton = document.getElementById("register-button");

if (petName && registerButton) {
petName.addEventListener("input", function () {
    registerButton.classList.remove("bump");

    void registerButton.offsetWidth;

    registerButton.classList.add("bump");
});


registerButton.addEventListener("click", function () {
    const name = petName.value.trim();

    if (name === "") {
        alert("Please tell us what humans call you.");
        return;
    }

    const message = document.getElementById("registration-message");

message.innerHTML =
    "<strong>Thank you, " + name + "!</strong><br>" +
    "The entire dog and cat community welcomes you as a registered member of K-Tai.";

    launchConfetti();
});

function launchConfetti() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("span");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
}
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");
    });
}