(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var productImages = document.querySelectorAll(".product img"),
            productBoxes = document.querySelectorAll(".product"),
            navLinks = document.querySelectorAll("nav ul li a"),
            backToTopButton = document.getElementById("back-to-top"),
            textarea = document.querySelector('textarea[name="message"]'),
            contactButton = document.querySelector('.hero .button'),
            hamburger = document.querySelector('.hamburger'),
            navMenu = document.querySelector('nav ul');

        // Hero image transition functionality
        var heroSection = document.querySelector('.hero');
        var images = ['hero-image.jpg', 'home-hero.jpg'];  // Add your image URLs here
        var currentIndex = 0;

        setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;  // Loop through images
            heroSection.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        }, 5000);  // Change image every 5 seconds

        // Floating effect for product images
        productImages.forEach(function (img) {
            img.addEventListener("mouseenter", function () {
                img.classList.add("float");
            });
            img.addEventListener("mouseleave", function () {
                img.classList.remove("float");
            });
        });

        // Floating effect for product boxes
        productBoxes.forEach(function (box) {
            box.addEventListener("mouseenter", function () {
                box.classList.add("float");
            });
            box.addEventListener("mouseleave", function () {
                box.classList.remove("float");
            });
        });

        // Floating effect for nav links
        navLinks.forEach(function (link) {
            link.addEventListener("mouseenter", function () {
                link.classList.add("float");
            });
            link.addEventListener("mouseleave", function () {
                link.classList.remove("float");
            });
        });

        // Show back-to-top button on scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        // Scroll to top when back-to-top button is clicked
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });

        contactButton.addEventListener('click', function (event) {
            event.preventDefault();
            var target = document.querySelector('#contact'),
                offset = 60, // Offset for fixed header height
                bodyRect = document.body.getBoundingClientRect().top,
                elementRect = target.getBoundingClientRect().top,
                elementPosition = elementRect - bodyRect,
                offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });

        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    });
})();
