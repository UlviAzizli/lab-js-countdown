const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  document.getElementById("start-btn").disabled = true;

  remainingTime = 10;

  const intervalId = setInterval(() => {
    remainingTime--;

    const remainTime = document.getElementById("time");
    remainTime.textContent = remainingTime;

    if(remainingTime === 0) {
      clearInterval(intervalId);

      showToast();
      document.getElementById("start-btn").disabled = false;

    }
  }, 1000);


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
