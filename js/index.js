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


// scroll
// const body = document.querySelector('body');
// window.addEventListener('scroll', () => {
    // body.style.backgroundColor = 'black';
// });

// keydown

document.addEventListener('keydown', (e) => {
    if (e.key === 'g') {
        document.body.style = 'color: white; background-color: black;'

    } else if (e.key === '2') {
        document.body.style = 'color: tomatoe; background-color: green;'
    }
});

// wheel event
// const body = document.querySelector('body');
// body.addEventListener('wheel', (e) => {
    // e.preventDefault();
    // console.log('I used a wheel button');
// });

// blur

const signMeUp = document.querySelectorAll('.detination .btn');

signMeUp.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

signMeUp.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});


// event propagation

const body = document.querySelector ('body');
body.addEventListener('click' , (e) => {
    // console.log('last');
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

// preventDefault
// fix what you want it links to instead of .menu-item and rename 'const link'

// const link = document.querySelector('.menu-item');
// link.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Stopped the link from running');
// });
