document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar
    const toggleButton = document.querySelector(".toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("hidden");
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Dark Mode Toggle with localStorage
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });
    }

    // Read More Functionality
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const article = this.closest(".article");
            const moreText = article ? article.querySelector(".more-text") : null;

            if (moreText) {
                moreText.classList.toggle("hidden");
                this.textContent = moreText.classList.contains("hidden") ? "Read More" : "Read Less";
            }
        });
    });
});



