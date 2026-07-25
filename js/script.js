// =========================================
// Development.Help - Official Script
// =========================================

// Display a welcome message in the browser console.
console.log("Welcome to Development.Help");

// Show the current year in any element with id="year".
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Smooth scrolling for internal page links.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});