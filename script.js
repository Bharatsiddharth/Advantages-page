// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= window.innerHeight) {
//     navbar.classList.add('bg-[#01022B]');
//     navbar.classList.remove('transparent');
//   } else {
//     navbar.classList.add('transparent');
//     navbar.classList.remove('bg-[#01022B]');
//   }
// });


const olympiadSyllabus = [
    {

      title: "Custom Web Services",
      desc: "We specialise in creating high-quality, user-centric websites that drive engagement and achieve your business objectives. Our team of expert developers and designers works closely with you to deliver customised web solutions that stand out in a crowded digital landscape.",
    },

    {

      title: "Mobile App Developmen",
      desc: "Our team of skilled developers harnesses the latest technologies and industry best practices to bring your app idea to life, delivering a seamless user experience across all platforms.",
    },

    {

      title: "Marketing Solutions",
      desc: "Our comprehensive approach combines creativity with data-driven analysis to deliver targeted campaigns that resonate with your audience and drive measurable results.",
    },

    {

      title: "Industrial Training",
      desc: "Discover a new way of learning that's easy and efficient. Our training will improve your skills and career opportunities.Designed to bridge the gap between learning and real-world application.",
    },

    {

      title: " Data Interpretation",
      desc: "Analyze and interpret data from graphs, charts, and tables. Questions will vary in difficulty, reflecting the student’s grade, from straightforward data reading to more intricate analysis.",
    },

    {

      title: "Quality Assurance & Testing",
      desc: "Our comprehensive quality assurance and testing solutions are designed to ensure that your digital products meet the highest standards of performance, security, and usability.",
    },

    {

      title: "Hardware Design & Manufacturing ",
      desc: "From initial concept and design to production and testing, we ensure every component meets stringent standards of performance and durability. Partner with us to bring your hardware innovations to life with excellence.",
    },
  ];

let currentIndex = 0;

function updateCard() {
    const currentData = olympiadSyllabus[currentIndex];
    document.getElementById('cardTitle').innerText = currentData.title;
    document.getElementById('cardDesc').innerText = currentData.desc;
    // You can change the image as well if needed
    // document.getElementById('cardImage').src = currentData.imageUrl; // Use dynamic images if needed
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < olympiadSyllabus.length - 1) {
        currentIndex++;
        updateCard();
    }
});

// Initialize the first card
updateCard();