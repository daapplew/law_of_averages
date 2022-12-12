const pitchBtn = document.getElementById('pitchBtn');
const pitchNumber = document.getElementById('pitchNumber');
const scoreBtn = document.getElementById('scoreBtn');
const scoreNumber = document.getElementById('scoreNumber');
const bookedBtn = document.getElementById('bookedBtn');
const bookedNumber = document.getElementById('bookedNumber');
const modal = document.querySelector('#modal');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

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

bookedBtn.addEventListener('click',()=>{
    modal.showModal();
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
