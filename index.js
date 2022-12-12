const pitchBtn = document.getElementById('pitchBtn');
const pitchNumber = document.getElementById('pitchNumber');
const scoreBtn = document.getElementById('scoreBtn');
const scoreNumber = document.getElementById('scoreNumber');

let pitch = 0;
function pitchIncrease(){
    pitchNumber.innerHTML = pitch++
}
pitchBtn.addEventListener('click',pitchIncrease);

scoreBtn.addEventListener('click',()=>{

})



