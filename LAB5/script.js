(function () {
  const startButton = document.getElementById("start-btn");
  const timerDisplay = document.createElement("div");
  const scoreDisplay = document.createElement("div");
  const gameContainer = document.getElementById("game-container");
  const modeContainer = document.getElementById("mode-container");
  const infoContainer = document.getElementById("info-container");

  let countdown;
  let score = 0;
  let timerValue;
  let maxX, maxY;
  infoContainer.appendChild(timerDisplay);
  infoContainer.appendChild(scoreDisplay);

  startButton.addEventListener("click", function () {
    const difficulty = document.getElementById("difficulty").value;
    const color = document.getElementById("color").value;

    switch (difficulty) {
      case "lazy":
        maxX = 5;
        maxY = 5;
        timerValue = 3;
        break;
      case "normal":
        maxX = 10;
        maxY = 10;
        timerValue = 2;
        break;
      case "hard":
        maxX = 25;
        maxY = 25;
        timerValue = 1;
        break;
      default:
        maxX = 5;
        maxY = 5;
        timerValue = 3;
    }

    modeContainer.style.display = "none";
    console.log(window);
    startGame(timerValue, color, maxX, maxY);
  });

  function startGame(initialTimerValue, color, maxX, maxY) {
    clearInterval(countdown);

    let remainingTime = initialTimerValue;
    scoreDisplay.innerText = "Score: " + score;
    timerDisplay.style.display = "block";
    scoreDisplay.style.display = "block";

    timerDisplay.innerText = remainingTime;
    countdown = setInterval(function () {
      remainingTime--;
      if (remainingTime >= 0) {
        timerDisplay.innerText = remainingTime;
      } else {
        clearInterval(countdown);
        timerDisplay.innerText = "Time's up!";
        alert(
          "Time's up! Your final score is " +
            score +
            ". Refresh the page to play again."
        );
        window.location.reload();
      }
    }, 1000);

    generatePixel(color, maxX, maxY);
  }

  function generatePixel(color, maxX, maxY) {
    const pixel = document.createElement("div");
    pixel.id = "pixel";
    pixel.style.backgroundColor = color;

    const randomX =
      Math.floor(
        Math.random() * Math.min(gameContainer.clientWidth / 50, maxX + 1)
      ) * 50;
    const randomY =
      Math.floor(
        Math.random() * Math.min(gameContainer.clientHeight / 50, maxY + 1)
      ) * 50;

    pixel.style.left = randomX + "px";
    pixel.style.top = randomY + "px";

    pixel.addEventListener("click", function () {
      score++;
      scoreDisplay.innerText = "Score: " + score;
      gameContainer.removeChild(pixel);
      clearInterval(countdown);
      const difficulty = document.getElementById("difficulty").value;
      const color = document.getElementById("color").value;
      startGame(timerValue, color, maxX, maxY);
    });

    gameContainer.appendChild(pixel);
  }
})();
