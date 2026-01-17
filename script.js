document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");

if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("nav--open");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            nav.classList.remove("nav--open");
        });
    });
}

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

if (form && successMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name")?.toString().trim();
        const contact = formData.get("contact")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        if (!name || !contact || !message) {
            successMessage.textContent = "пожалуйста, заполните все поля";
            successMessage.classList.add("form__success--visible");
            successMessage.style.color = "#F5F4EB";
            return;
        }

        successMessage.textContent = "отправка...";
        successMessage.classList.add("form__success--visible");
        successMessage.style.color = "#F5F4EB";

        const endpoint = form.dataset.endpoint;
        if (!endpoint) {
            successMessage.textContent = "отправка не настроена";
            return;
        }

        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, contact, message })
        })
            .then((res) => {
                if (!res.ok) throw new Error("send error");
                return res.json();
            })
            .then(() => {
                successMessage.textContent = "спасибо за сообщение! я свяжусь с вами в ближайшее время";
                form.reset();
                setTimeout(() => {
                    successMessage.classList.remove("form__success--visible");
                }, 4000);
            })
            .catch(() => {
                successMessage.textContent = "ошибка отправки. попробуйте позже";
            });
    });
}
