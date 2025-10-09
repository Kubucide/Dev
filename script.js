// DOM ELEMENT VARIABLES

//submit button element
const submitBtn = document.getElementById("submit-btn");

//Rating Component
const ratingComponent = document.getElementById("rating-component")

//Thankyou Component Element
const thankYouComponent = document.getElementById("thankyou-component")


//Rating Buttons
const ratingBtns =document.querySelectorAll(".btn-num")

//Dynamic Number
let ratingscore = document.querySelector(".dynamic-number");

//Default score
let defaultScore = 0;

//EVENT LISTENERS

//Submit button event listener
submitBtn.addEventListener("click",submitScore);

//Rating Btn Event Listener
ratingBtns.forEach((btn) =>{
btn.addEventListener("click", ratingBtnClicked)
})





// Functions
function submitScore (e) {
  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block"

  ratingscore.textContent = defaultScore;
}


function ratingBtnClicked (e) {

if(e.target.classList.contains("btn-num")) {
  e.target.classList.toggle("active")
}

defaultScore = e.target.textContent;

}
