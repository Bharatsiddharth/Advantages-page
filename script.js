const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight) {
    navbar.classList.add('bg-[#01022B]');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('bg-[#01022B]');
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

AOS.init();
// Function to animate the counter
function animateCounter(element, target, startValue = 0) {
  let current = startValue;
  const interval = setInterval(() => {
    current += 1;
    element.textContent = current + '+'; // Add '+' sign only for values greater than 10
    if (current >= target) {
      clearInterval(interval);
    }
  }, 120); // Adjust the speed of the animation by changing this value
}

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounter(document.getElementById('brochures-counter'), 50);
    animateCounter(document.getElementById('posters-counter'), 65);
    animateCounter(document.getElementById('videos-counter'), 10); // Start from 100
    animateCounter(document.getElementById('partnership-counter'), 4); // Start from 100
  }
}, { threshold: 1.0 });

// Observe the section element
const section = document.querySelector('div[data-aos="fade-up"]'); // Select the parent div with data-aos="fade-up"
observer.observe(section);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// const olympiadSyllabus = [
//     {

//       title: "Custom Web Services",
//       desc: "We specialise in creating high-quality, user-centric websites that drive engagement and achieve your business objectives. Our team of expert developers and designers works closely with you to deliver customised web solutions that stand out in a crowded digital landscape.",
//       lottie: "lottie/home1.json"
//     },

//     {

//       title: "Mobile App Developmen",
//       desc: "Our team of skilled developers harnesses the latest technologies and industry best practices to bring your app idea to life, delivering a seamless user experience across all platforms.",
//        lottie: "lottie/home1.json"
//     },

//     {

//       title: "Marketing Solutions",
//       desc: "Our comprehensive approach combines creativity with data-driven analysis to deliver targeted campaigns that resonate with your audience and drive measurable results.",
//        lottie: "lottie/Business.json"
//     },

//     {

//       title: "Industrial Training",
//       desc: "Discover a new way of learning that's easy and efficient. Our training will improve your skills and career opportunities.Designed to bridge the gap between learning and real-world application.",
//        lottie: "lottie/Professional.json"
//     },

//     {

//       title: " Data Interpretation",
//       desc: "Analyze and interpret data from graphs, charts, and tables. Questions will vary in difficulty, reflecting the student’s grade, from straightforward data reading to more intricate analysis.",
//        lottie: "lottie/Professional.json"
//     },

//     {

//       title: "Quality Assurance & Testing",
//       desc: "Our comprehensive quality assurance and testing solutions are designed to ensure that your digital products meet the highest standards of performance, security, and usability.",
//        lottie: "lottie/Professional.json"
//     },

//     {

//       title: "Hardware Design & Manufacturing ",
//       desc: "From initial concept and design to production and testing, we ensure every component meets stringent standards of performance and durability. Partner with us to bring your hardware innovations to life with excellence.",
//        lottie: "lottie/Professional.json"
//     },
//   ];

// let currentIndex = 0;

// function updateCard() {
//   const currentData = olympiadSyllabus[currentIndex];
//   document.getElementById('cardTitle').innerText = currentData.title;
//   document.getElementById('cardDesc').innerText = currentData.desc;
//   setTimeout(() => {
//       document.querySelector('lottie-player').load(currentData.lottie); // Load the new Lottie animation
//   }, 100); // Add a 100ms delay
// }

// document.getElementById('prevBtn').addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCard();
//     }
// });

// document.getElementById('nextBtn').addEventListener('click', () => {
//     if (currentIndex < olympiadSyllabus.length - 1) {
//         currentIndex++;
//         updateCard();
//     }
// });

// // Initialize the first card
// updateCard();