const pitchBtn = document.getElementById('pitchBtn');
const pitchNumber = document.getElementById('pitchNumber');
const scoreBtn = document.getElementById('scoreBtn');
const scoreNumber = document.getElementById('scoreNumber');
const openModal = document.querySelector('#openModal')
const yesBtn = document.querySelector('#yesBtn');

let pitch = 0;
function pitchIncrease(){
    pitchNumber.innerHTML = pitch++
}
pitchBtn.addEventListener('click',pitchIncrease);

scoreBtn.addEventListener('click',()=>{
    openModal.showModal()
})

yesBtn.addEventListener('click',pitchIncrease)

