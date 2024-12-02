left = document.querySelector('.left');
right = document.querySelector('.right');
leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let Yeti = document.querySelector('.Yeti');
Yeti.style.display ="none";
let dead = document.querySelector('.dead');
dead.style.display ="none";
let Alien = document.querySelector('.Alien');
Alien.style.display ="none";
let FlyingSaucer = document.querySelector('.FlyingSaucer');

FlyingSaucer.style.display ="none";

left.addEventListener('click', function() -+{
    console.log("clicked left");
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    FlyingSaucer.style.display ="none";
    Yeti.style.display = "block";

text.innerHTML ="Double click to fight";

});

right.addEventListener('click', function(){
    console.log("right clicked")
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    Alien.style.display = "block";
    FlyingSaucer.style.display ="block";
    text.innerHTML ="You encounter an Alien";
    
});

Yeti.addEventListener('dblclick', function() {

    text.innerHTML ="That was easy";

});

Yeti.addEventListener('dblclick', function() {
    console.log("Yeti dbl clicked")
    Yeti.style.display = "none";
    dead.style.display = "block";
    text.innerHTML ="easy kill";
});

FlyingSaucer.addEventListener('mouseenter',function(){
    console.log("Flying Saucer hovered")
Alien.style.display ="block";
text.innerHTML="Welcome Human";
Yeti.style.display ="none";
});