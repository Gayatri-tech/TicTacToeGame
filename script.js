let btns = document.querySelectorAll(".btn");
let resetBtn = document.getElementById("resetBtn");
let winMesg = document.getElementById("winMesg");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("btn clicked");
    if (turnO) {
      btn.innerHTML = "O";
      turnO = false;
    } else {
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerHTML;
    let pos2 = btns[pattern[1]].innerHTML;
    let pos3 = btns[pattern[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if ((pos1 === pos2) & (pos2 === pos3)) {
        if (turnO === false) {
          winMesg.innerHTML = "Congratulations! The winner is 'O'";
          winMesg.style.display = "block";
          for (let btn of btns) {
            btn.disabled = true;
          }
        } else {
          winMesg.innerHTML = "Congratulations! The winner is 'X'";
          winMesg.style.display = "block";
          for (let btn of btns) {
            btn.disabled = true;
          }
        }
      }
    }
  }
};
const resetGame = () => {
  for (let btn of btns) {
    btn.innerHTML = "";
    btn.disabled = false;
    winMesg.style.display = "none";
  }
};
resetBtn.addEventListener("click", resetGame);
