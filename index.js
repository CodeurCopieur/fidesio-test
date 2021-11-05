 window.addEventListener('DOMContentLoaded', () => {
  this.move();
  this.disabledScroll(true);
  this.initAnimations();
});

function disabledScroll( disabled ){
  disabled ? this.document.querySelector('body').style.overflowY = "hidden" :
    this.document.querySelector('body').style.overflowY = "auto";
}

function initAnimations() {
  gsap.from( ".new-slider, #header", {
    delay: .4,
    duration: .8,
    y: -30,
    opacity: 0,
    stagger: .5
  });

  gsap.from( "#footerListLinks > *", {
    scrollTrigger: {
      trigger: "#footerListLinks",
      start: 'top bottom',
      end: 'top-=100'
    },
    duration: .5,
    y: -40,
    opacity: 0,
    stagger: .5
  })
}


const tl = gsap.timeline({
  paused: "true",
  onComplete:() => this.disabledScroll(false)
});

tl.to("#percent, #bar", {
  duration: 0.2,
  opacity: 0,
  zIndex: -1
});
tl.to("#preloader", {
  duration: 0.8,
  width: "0%"
});

var width = 1;
var bar = document.getElementById("barConfirm");
var id;

function move() {
  id = setInterval(frame, 10);
}

function frame() {
  if (width >= 100) {
    clearInterval(id);
    tl.play();
  } else {
    width++;
    bar.style.width = width + "%";
    document.getElementById("percent").innerHTML = width + "%";
  }
}


/*=============== FIRST SWIPER ===============*/

var swiper2 = new Swiper(".mySwiper1", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }
});


/*=============== SECOND SWIPER ===============*/

let newSwiper = new Swiper(".mySwiper2", {
  loop: 'true',
  //scenteredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }
});




