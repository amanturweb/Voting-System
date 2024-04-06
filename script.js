const voteBtn2 = document.querySelector("#vote2");
const voteBtn3 = document.querySelector("#vote3");
const voteBtn1 = document.querySelector("#vote1");
const clear = document.querySelector("#clear")

const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");

function counter(btn) {
    let currentCount = Number(btn);
    currentCount++;
    btn.innerHTML = currentCount;
}


voteBtn1.addEventListener('click', function () {
    let currentCount = Number(result1.innerHTML)
    currentCount++
    result1.innerHTML = currentCount
})
voteBtn2.addEventListener('click', function () {
    let currentCount = Number(result2.innerHTML)
    currentCount++
    result2.innerHTML = currentCount
})
voteBtn3.addEventListener('click', function () {
    let currentCount = Number(result3.innerHTML)
    currentCount++
    result3.innerHTML = currentCount
})

clear.addEventListener('click', () => {
    result1.innerText = 0;
    result2.innerText = 0;
    result3.innerText = 0;
})