var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

const homeLink = document.querySelector('.navbar a[href="#home"]');
const homeTexts = document.querySelectorAll(".home-content h3, .home-content h1");

homeLink.addEventListener("click", () => {
    homeTexts.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
            el.style.transition = "all 0.6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 300);
    });
});

// Animate Technical Skill Bars on page load
window.addEventListener("load", () => {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const fill = bar.querySelector('.progress-fill');
        fill.style.width = percent; // animate bar fill
    });

    // Animate Circular Skills on page load
    document.querySelectorAll('.circular-skill').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const progressCircle = circle.querySelector('.progress');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;

        setTimeout(() => {
            const offset = circumference - (circumference * percent / 100);
            progressCircle.style.strokeDashoffset = offset; // animate circle
        }, 200);
    });

    document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message Sent Successfully!");
});

});
