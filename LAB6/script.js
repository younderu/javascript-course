(function () {
  let moves = 0;
  const moveElem = document.getElementById("moves");
  let fileName = "data1.json";

  async function loadData(jsonFile) {
    try {
      const response = await fetch(jsonFile);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Помилка при зчитуванні файлу:", error);
      return null;
    }
  }

  function checkWin(recommendedMoves, moves) {
    const cells = document.querySelectorAll(".cell");
    const allActive = Array.from(cells).every((cell) =>
      cell.classList.contains("active")
    );
    if (allActive) {
      if (recommendedMoves >= moves) {
        alert("Ви перемогли!");
      } else {
        alert("Ви перемогли, але є кращий шлях");
      }
      moves = 0;
      displayGrid(fileName);
    }
  }

  async function cellClick(row, col, recommendedMoves) {
    const cellElement = document.getElementById(`cell-${row}-${col}`);
    cellElement.classList.toggle("active");

    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    neighbors.forEach(([neighborRow, neighborCol]) => {
      const neighborCellElement = document.getElementById(
        `cell-${neighborRow}-${neighborCol}`
      );
      if (neighborCellElement) {
        neighborCellElement.classList.toggle("active");
      }
    });
    moves += 1;
    moveElem.innerText = `Moves: ${moves}`;
    checkWin(recommendedMoves, moves);
  }

  async function displayGrid(jsonFile) {
    const data = await loadData(jsonFile);
    moveElem.innerText = `Moves: ${moves}`;

    const targetMoves = document.getElementById("targetMoves");
    targetMoves.innerText = `Target: ${data.minSteps}`;

    if (!data) return;

    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

    data.grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement("div");
        cellElement.id = `cell-${rowIndex}-${colIndex}`;
        cellElement.className = `cell ${cell === 1 ? "active" : ""}`;
        cellElement.addEventListener("click", () => {
          cellClick(rowIndex, colIndex, data.minSteps);
        });
        gridContainer.appendChild(cellElement);
      });
    });
  }

  document.getElementById("restartButton").addEventListener("click", () => {
    moves = 0;
    displayGrid(fileName);
  });

  document
    .getElementById("newGameButton")
    .addEventListener("click", async () => {
      moves = 0;
      if (fileName === "data1.json") {
        fileName = "data2.json";
      } else if (fileName === "data2.json") {
        fileName = "data3.json";
      } else {
        fileName = "data1.json";
      }
      displayGrid(fileName);
    });

  displayGrid(fileName);
})();
