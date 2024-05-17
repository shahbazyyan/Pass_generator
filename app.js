const btn = document.querySelector("button");
const input = document.querySelector("input");
const img = document.querySelector("img");
const copy = document.querySelector(".copy");
const span = document.querySelector("#spanIMG");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }
  
let arr = `12FGH34KLnoM890a*(zABCDE)_-bcdeQVWfmgRS+=lhp[]ijkuN56>/7vwx
yIJOPXYZ!@",qrst.<?`
let x = arr.split("").slice(8,20);

btn.addEventListener("click", (e) => {
shuffleArray(x);
input.value = x.join("")
});

span.addEventListener("click", function() {
    navigator.clipboard.writeText(input.value);
   if(input.value.length) {
    copy.style.display = "block";
    setTimeout(() => {
      copy.style.display = "none";
    }, 1000)
   }
    
});
