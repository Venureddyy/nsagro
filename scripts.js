document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Slideshow functionality
  let currentImageIndex = 0;
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  function changeSlide() {
    const slideshowImg = document.getElementById('slideshow-img');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImg.src = images[currentImageIndex];
  }

  setInterval(changeSlide, 3000); // Change slide every 3 seconds

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
});
