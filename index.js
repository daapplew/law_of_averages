const pitchBtn = document.getElementById('pitchBtn');
const pitchNumber = document.getElementById('pitchNumber');
const scoreBtn = document.getElementById('scoreBtn');
const scoreNumber = document.getElementById('scoreNumber');
const bookedBtn = document.getElementById('bookedBtn');
const bookedNumber = document.getElementById('bookedNumber');
const modal = document.querySelector('#modal');
const modalBooked = document.querySelector('#modalBooked');
const yesBtn = document.querySelector('#yesBtn');
const yesBtn2 = document.querySelector('#yesBtn2');
const noBtn = document.querySelector('#noBtn');
const noBtn2 = document.querySelector('#noBtn2');

let pitch = 1;
function pitchIncrease(){
    pitchNumber.innerHTML = pitch++;
}
pitchBtn.addEventListener('click',pitchIncrease);

let score = 1
function scoreIncrease(){
    scoreNumber.innerHTML = score++;
}
scoreBtn.addEventListener('click',()=>{
    modal.showModal();
    
})
let booked = 1;
function bookedIncreased(){
    bookedNumber.innerHTML= booked++;
}
bookedBtn.addEventListener('click',()=>{
    modalBooked.showModal();
})



function scoredPlusPitched(){
    yesBtn.addEventListener('click',()=>{
        pitchIncrease();
        scoreIncrease();
        modal.close();
    })
    
}
scoredPlusPitched()

function scoredNoPitch(){
    noBtn.addEventListener('click', ()=>{
        pitchIncrease();
        modal.close();
    });
    
}
scoredNoPitch()

function bookedNoPitch(){
    noBtn2.addEventListener('click', ()=>{
        scoreIncrease();
        bookedIncreased();
        modalBooked.close();
    });
    
}
bookedNoPitch()

function bookedPlusPitched(){
    yesBtn2.addEventListener('click',()=>{
        pitchIncrease();
        scoreIncrease();
        bookedIncreased();
        modalBooked.close();
    })
    
}
bookedPlusPitched()

