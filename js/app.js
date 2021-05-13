// navbar toggle 
const navbarToggleBtn = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');
const navbarCloseBtn = document.querySelector('.fa-times');

navbarToggleBtn.addEventListener('click',function() {
    navbar.classList.toggle('active');
    // close navbar after clicking a link
    navbar.addEventListener('click',function() {
        navbar.classList.remove('active');
    });
});

//  tabs for .bestServices section
const services = document.querySelector('.servicesContainer');
const tabContent = document.querySelectorAll('.services');
const tabBtns = document.querySelectorAll('.tab')

services.addEventListener('click',function(event) {
    const id = event.target.dataset.id;
    console.log(id)
    if (id) {
        tabBtns.forEach(function(tab) {
            tab.classList.remove('active');
            event.target.classList.add('active');
        });
        tabContent.forEach(function(service) {
            service.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    };
});

//  back-to-top button
const backToTopBtn = document.querySelector('.backToTop');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        backToTopBtn.style.display = `block`;
    } else {
        backToTopBtn.style.display = `none`;
    }
});

// feedbacks
const prevClients = [
    {
        id: 1,
        clientMsg: `<q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatibus tempora at sed cupiditate similique, autem ex amet fuga hic.</q>`,
        clientImg: `imgs/person1.jpg`,
        clientName: `Jennifer Doe`,
        clientInfo: `1 Bedroom, 1 Bath Home-Owner`,
    },
    {
        id: 2,
        clientMsg: `<q>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</q>`,
        clientImg: `imgs/person2.jpg`,
        clientName: `John Smith`,
        clientInfo: `3 Bedroom, 2 Bath Home-Owner`,
    },
    {
        id: 3,
        clientMsg: `<q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatibus tempora at sed cupiditate similique.</q>`,
        clientImg: `imgs/person3.jpg`,
        clientName: `Jane Lim`,
        clientInfo: `20-Unit Apartment Owner`,
    },
];

// client details
const clientMsg = document.querySelector('.clientMsg');
const clientImg = document.querySelector('.clientImg');
const clientName = document.querySelector('.clientName');
const clientInfo = document.querySelector('.clientInfo');
// buttons
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// initial item
let itemCounter = 0;

// function: grab details of clients
function character(char) {
    const item = prevClients[char];
    clientMsg.innerHTML = item.clientMsg;
    clientImg.src = item.clientImg;
    clientName.textContent = item.clientName;
    clientInfo.textContent = item.clientInfo;
};

// load initial item
window.addEventListener('DOMContentLoaded',function() {
    character(itemCounter);
});

// next button
nextBtn.addEventListener('click',function() {
    itemCounter++;
    if (itemCounter > prevClients.length - 1) {
        itemCounter = 0;
    };
    character(itemCounter);
});
// previous button
prevBtn.addEventListener('click',function() {
    itemCounter--;
    if (itemCounter < 0) {
        itemCounter = prevClients.length - 1;
    };
    character(itemCounter);
});

// auto-update year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();