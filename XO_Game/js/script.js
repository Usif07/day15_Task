let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restart");
const message = document.getElementById("message");
let isGameOver = false;

const winningCombos = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
];

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      message.textContent = `${cells[a].textContent} wins`;
      isGameOver = true;
      return;
    }
  }

  const allFilled = [...cells].every(cell => cell.textContent !== "");
  if (allFilled && !isGameOver) {
    message.textContent = "It's a draw";
    isGameOver = true;
  }
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "" && !isGameOver) {
      cell.textContent = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

restartBtn.addEventListener("click", () => {
  cells.forEach(cell => {
    cell.textContent = "";
  });
  message.textContent = "";
  currentPlayer = "X";
  isGameOver = false;
});
