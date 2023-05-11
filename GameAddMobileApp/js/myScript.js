const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbarLink')[0]





toggleButton.addEventListener('click', ()=>{
console.log("Clickedd")
    navbarLinks.classList.toggle('active');

});
navbarLinks.classList.remove('active');


navbarLinks.classList.remove('active');
const dropdownLinks = navbarLinks.getElementsByTagName('a');
for (let i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener('click', () => {

    });
}
// const toggleButton2 = document.getElementsByClassName('toggle')[0]
// toggleButton2.addEventListener('click', ()=>{
//
//     navbarLinks.classList.toggle('active');
//
//
//
// });
//Slider

//Access the images
let slideImages = document.getElementById("slides").querySelectorAll('img');

//Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

//Access the Indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;





//next button
next.addEventListener('click', slideNext);
function slideNext() {


    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';

    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicator();
}

//prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {


    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';

    if (counter == 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicator();
}


//Auto sliding
function autoSliding() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        indicator();
    }

}

autoSliding();

//Stop auto sliding when mouse is over t

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(deleteInterval);
})

//Resume sliding when mouse is out


container.addEventListener('mouseout', function () {
    autoSliding();
})


//Add and remove active class from the indicator

function indicator() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    dots[counter].className += ' active';
}

//Add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicator();
}

