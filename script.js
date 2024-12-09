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
left2 = document.querySelector('.left2');
right2 = document.querySelector('.right2');
left2.style.display = "none";
right2.style.display = "none";
FlyingSaucer.style.display ="none";
let Aliendead = document.querySelector('.Aliendead');
Aliendead.style.display ="none";
let Escape = document.querySelector('.Escape');
Escape.style.display ="none";


Alien.addEventListener('dblclick', function() {
    console.log("Adead dbl clicked");
    Yeti.style.display = "none";
   dead.style.display = "none";
     left2.style.display = "none";
     right2.style.display = "none";
     Alien.style.display ="none";
     Aliendead.style.display ="block";
 text.innerHTML ="light work";

});

left.addEventListener('click', function() {
    console.log("clicked left");
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    FlyingSaucer.style.display ="none";
    Yeti.style.display = "block";
    left2.style.display = "none";
    right2.style.display = "none";
    Aliendead.style.display ="none";
text.innerHTML ="Double click to fight";
});


right.addEventListener('click', function() {
    console.log("right clicked")
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    Alien.style.display = "block";
    FlyingSaucer.style.display ="block";
    text.innerHTML ="You encounter an Alien";
    left2.style.display = "none";
    right2.style.display = "none";
    Aliendead.style.display ="none";
});


Yeti.addEventListener('dblclick', function() {
    console.log("Yeti dbl clicked")
    Yeti.style.display = "none";
    dead.style.display = "block";
    text.innerHTML ="easy kill";
    left2.style.display = "none";
    right2.style.display = "none";
    Aliendead.style.display ="none";
});


FlyingSaucer.addEventListener('mouseenter',function() {
console.log("Flying Saucer hovered");
Alien.style.display ="block";
text.innerHTML="Welcome Human, Choose your fate";
Yeti.style.display ="none";
left2.style.display ="block";
right2.style.display ="block";
Aliendead.style.display ="none";
});


left2.addEventListener('click', function() {
    console.log("clicked left");
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    FlyingSaucer.style.display ="none";
    Yeti.style.display = "none";
    left2.style.display = "none";
    right2.style.display = "none";
    Alien.style.display ="block";
    Aliendead.style.display ="none";
    FlyingSaucer.style.display ="none";
text.innerHTML ="Double click to fight";
});


right2.addEventListener('click', function(){
    console.log("clicked right");
    Escape.style.display ="block";
    Alien.style.display ="none";
    left2.style.display = "none";
    right2.style.display = "none";
    FlyingSaucer.style.display ="none";
text.innerHTML = "you have escaped";
});




