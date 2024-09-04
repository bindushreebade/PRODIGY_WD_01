// Function to change background color on scroll based on section in view
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for the fixed navbar
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
            const currentColor = document.querySelector(`.nav-link[href="#${current}"]`).getAttribute('data-color');
            document.body.style.backgroundColor = currentColor;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Function to change background color on hover
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', function () {
        const hoverColor = this.getAttribute('data-color');
        document.body.style.backgroundColor = hoverColor;
    });

    link.addEventListener('mouseout', function () {
        const activeLink = document.querySelector('.nav-link.active');
        const activeColor = activeLink ? activeLink.getAttribute('data-color') : '#fff';
        document.body.style.backgroundColor = activeColor;
    });
});
