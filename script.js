// Loader

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Back To Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Gallery Lightbox

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        lightbox.style.display = "block";
        lightboxImage.src = item.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Testimonial Slider

const testimonials =
document.querySelectorAll(".testimonial-card");

const dots =
document.querySelectorAll(".dot");

let current = 0;

function showTestimonial(index){

    testimonials.forEach(card =>
        card.classList.remove("active"));

    dots.forEach(dot =>
        dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}

document.getElementById("nextTestimonial")
.addEventListener("click", () => {

    current++;

    if(current >= testimonials.length){
        current = 0;
    }

    showTestimonial(current);

});

document.getElementById("prevTestimonial")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = testimonials.length - 1;
    }

    showTestimonial(current);

});

setInterval(() => {

    current++;

    if(current >= testimonials.length){
        current = 0;
    }

    showTestimonial(current);

}, 5000);

// Reservation Form

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "🎉 Table Reserved Successfully!"
    );

    reservationForm.reset();

});

// Contact Form

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "✅ Message Sent Successfully!"
    );

    contactForm.reset();

});

// Scroll Reveal

const revealElements =
document.querySelectorAll(
    "section, .menu-card, .offer-card, .feature-box"
);

function reveal(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("✅ Item Added To Cart!");

    });

});