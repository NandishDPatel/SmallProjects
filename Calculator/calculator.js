let numbers = document.querySelectorAll(".num");
let disPanel = document.querySelector("#inp");
let clear = document.querySelector(".allClear");
let operators = document.querySelectorAll(".hlt");
let equalsTo = document.querySelector(".equal");
let resultDisplayed = false;

// console.log(typeof disPanel.value);

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    // console.log("Num clicked");
    // console.log(numbers[i].value);
    disPanel.value += numbers[i].value;
    // console.log(disPanel.value);
  });
}
for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", () => {
    // console.log(operators[j].innerHTML);
    disPanel.value += operators[j].innerHTML;
  });
}

//user click equals to (=) button
equalsTo.addEventListener('click',()=>{
    let ans = eval(disPanel.value);
    // console.log(ans);
    disPanel.value = ans;
})

// clearing the input on press of clear
clear.addEventListener("click", function () {
  disPanel.value = 0;
});
