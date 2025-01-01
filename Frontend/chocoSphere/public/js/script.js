let navbar = document.querySelector('.navbar-container');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#basket-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


// home js start

const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer img');
const back = document.querySelector('.back-layer img');
const side = document.querySelector('.side-layer img');

const sFront = 800;
const sBack = 3000;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;


    front.style.transform =
        `translate(
        ${x / sFront}%,
        ${y / sFront}%
        )`;

    side.style.transform =
        `translate(
        ${-(x / sFront)}%,
        ${-(y / sFront)}%
        )`;

    back.style.transform =
        `translate(
        ${x / sBack}%,
        ${y / sBack}%
        )`;
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.Aos');
hiddenElements.forEach((el) => observer.observe(el));










// swippers


var swiper = new Swiper(".reviews", {
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".gallerys", {
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

});



// home js end



//global
