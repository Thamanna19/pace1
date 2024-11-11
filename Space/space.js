function createStars() {
    const container = document.querySelector(".travel");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 2,
      effect: 'slide'
    });
});