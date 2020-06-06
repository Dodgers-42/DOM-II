// Your code goes here
const adventureImg = document.querySelector('.img-content img');
adventureImg.addEventListener('mouseenter',() => {
// console.log('Hello world');
});

const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseenter',() => {
console.log('What up');

    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "transform 1s";
});


busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
    busImg.style.transition = "transform 1s"
});

