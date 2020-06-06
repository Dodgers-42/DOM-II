// Your code goes here

// mouseenter

const adventureImg = document.querySelector('.img-content img');
adventureImg.addEventListener('mouseenter',() => {
// console.log('Hello world');
});

// mouseenter w/ transfor and transition

const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseenter',() => {
// console.log('What up');

    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "transform 1s";
});

// mouseleave

busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
    busImg.style.transition = "transform 1s"
});

// click

document.querySelectorAll('.nav-link').forEach((a) => {
    a.addEventListener('click', (e) => {
        // console.log(e);
        a.style.color = 'dodgerblue';
    });
});

// dblclick event

const contentImg = document.querySelector('.content-destination img');
contentImg.addEventListener('dblclick', () => {
    contentImg.src = "img/fun-bus.jpg";
});

// resize 

const vanPic = document.querySelector('.img-content img');
window.addEventListener('resize', () => {
    vanPic.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/starry-night-by-vincent-van-gogh-vincent-van-gogh.jpg";
});










// event propagation

const body = document.querySelector ('body');
body.addEventListener('click' , (e) => {
    console.log('last');
    body.style.color = 'green';
});

const dest = document.querySelector ('.destination');
dest.addEventListener('click', (e) => {
    console.log('middle');
    dest.style.color = 'tomato';
    e.stopPropagation();
});

const button = document.querySelector ('.btn');
button.addEventListener('click', (e) => {
    console.log('first');
    button.style.color = 'yellow';
    e.stopPropagation();
});