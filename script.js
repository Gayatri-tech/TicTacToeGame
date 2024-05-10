let btns = document.querySelectorAll(".btn");
let resetBtn = document.getElementById("resetBtn");
let turnO = true;
let moves = 0;
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

let winMesg = document.createElement("div");
winMesg.id = "winMesg";
let pElement = document.querySelector(".lastP");
pElement.insertAdjacentElement("afterend", winMesg);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerHTML = "O";
      turnO = false;
    } else {
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    moves++;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerHTML;
    let pos2 = btns[pattern[1]].innerHTML;
    let pos3 = btns[pattern[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        if (turnO === false) {
          winMesg.innerHTML = "Congratulations! The winner is 'O'";
        } else {
          winMesg.innerHTML = "Congratulations! The winner is 'X'";
        }
        winMesg.style.visibility = "visible";
        disableAllButtons();
        return;
      }
    }
  }
  if (moves === 9) {
    winMesg.innerHTML = "It's a tie!";
    winMesg.style.visibility = "visible";
    disableAllButtons();
  }
};

const disableAllButtons = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

const resetGame = () => {
  for (let btn of btns) {
    btn.innerHTML = "";
    btn.disabled = false;
  }
  winMesg.style.visibility = "hidden";
  turnO = true;
  moves = 0;
};
resetBtn.addEventListener("click", resetGame);
