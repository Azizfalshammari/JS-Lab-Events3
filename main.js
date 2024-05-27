{/* <div id="controlPanel">
<h1 id="stopButton" class="button">Stop</h1>
<h1 id="slowButton" class="button">Slow</h1>
<h1 id="goButton" class="button">Go</h1>
</div>
<div id="traffic-light">
<div id="stopLight" class="bulb"></div>
<div id="slowLight" class="bulb"></div>
<div id="goLight" class="bulb"></div>
</div> */}


colors = [
    'red', 'orange', 'green', 'black'
];
const buttonRed = document.querySelector("#stopButton");
const buttonOrange = document.querySelector("#slowButton");
const buttonGreen = document.querySelector("#goButton");
const redlight = document.querySelector("#stopLight");
const orangelight = document.querySelector("#slowLight");
const greenlight = document.querySelector("#goLight");



buttonRed.addEventListener('click', ()=>{ redlight.style.backgroundColor = colors[0];
    orangelight.style.backgroundColor = colors[3]
    greenlight.style.backgroundColor = colors[3]
    ;
console.log('red reached')} )

buttonOrange.addEventListener('click', ()=>{ orangelight.style.backgroundColor = colors[1];
    redlight.style.backgroundColor = colors[3]
    greenlight.style.backgroundColor = colors[3]
    ;
console.log('orange reached')} )


buttonGreen.addEventListener('click', ()=>{ greenlight.style.backgroundColor = colors[2];
    orangelight.style.backgroundColor = colors[3]
    redlight.style.backgroundColor = colors[3]
    ;
console.log('green reached')} )