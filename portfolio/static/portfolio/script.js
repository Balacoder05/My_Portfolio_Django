// ===== Dark Mode Toggle =====
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ===== Typing Animation =====
//const roles = [
//    "Backend Developer",
//    "Django Expert",
//    "Python Enthusiast",
//    "FastAPI Learner",
//];
//let roleIndex = 0;
//let charIndex = 0;
//const typingRole = document.getElementById("typing-role");
//
//function typeRole() {
//    if (charIndex < roles[roleIndex].length) {
//        typingRole.textContent += roles[roleIndex].charAt(charIndex);
//        charIndex++;
//        setTimeout(typeRole, 100);
//    } else {
//        setTimeout(eraseRole, 1500);
//    }
//}
//
//function eraseRole() {
//    if (charIndex > 0) {
//        typingRole.textContent = roles[roleIndex].substring(0, charIndex - 1);
//        charIndex--;
//        setTimeout(eraseRole, 50);
//    } else {
//        roleIndex = (roleIndex + 1) % roles.length;
//        setTimeout(typeRole, 300);
//    }
//}
//
//document.addEventListener("DOMContentLoaded", typeRole);

// ===== Scroll Animation =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {threshold: 0.1});

document.querySelectorAll('section, .project-card, .card').forEach(el => observer.observe(el));

// ===== Gradient Animation for Header =====
//let hue = 0;
//function animateHeaderGradient() {
//    const header = document.querySelector('header');
//    hue += 0.5;
//    header.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${(hue+60)%360}, 70%, 50%))`;
//    requestAnimationFrame(animateHeaderGradient);
//}
//animateHeaderGradient();

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.background = "#8b5cf6"; // Solid Violet color
    header.style.color = "#fff"; // Make text readable
});


// ===== Button Hover Glow =====
const buttons = document.querySelectorAll('button, a.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = "0 0 15px rgba(255, 106, 0, 0.6)";
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = "none";
    });
});



