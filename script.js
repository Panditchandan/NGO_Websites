/********* toggle button  validation*********** */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


/******************** tsestimonial auto sliding***************/
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let currentIndex = 0;

    function showNextTestimonial() {
        // Hide current testimonial
        testimonials[currentIndex].classList.remove("active");

        // Move to the next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;

        // Show the next testimonial
        testimonials[currentIndex].classList.add("active");
    }

    // Automatically switch testimonials every 5 seconds
    setInterval(showNextTestimonial, 8000);
});


/******************** Happpy clints ********************************/
document.addEventListener("DOMContentLoaded", function () {
    const statNumbers = document.querySelectorAll(".stat-number");

    const animateNumbers = (entry) => {
        if (entry.isIntersecting) {
            statNumbers.forEach((numberElement) => {
                const targetNumber = parseInt(numberElement.dataset.number, 10);
                let currentNumber = 0;

                const increment = Math.ceil(targetNumber / 100);

                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        numberElement.textContent = targetNumber;
                        clearInterval(counter);
                    } else {
                        numberElement.textContent = currentNumber;
                    }
                }, 50);
            });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(animateNumbers);
    });

    statNumbers.forEach((element) => observer.observe(element));
});


/**********************Latest blog and News ***************** */
// let currentIndex = 0;

// const blogs = document.querySelectorAll(".blog-card");
// const totalBlogs = blogs.length;

// function autoSlide() {
//     blogs.forEach((blog, index) => {
//         blog.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
//     });

//     currentIndex = (currentIndex + 1) % totalBlogs;
// }

// setInterval(autoSlide, 5000);
