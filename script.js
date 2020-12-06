const tRex = document.querySelector(".tRex");
let alreadyJumped = false;
let gravity = 0.9;

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 32 && !alreadyJumped) {
    alreadyJumped = true;
    jump();
  }
});

// fonction jump (faire sauter le T-rex)
function jump() {
  let elevation = 0;
  let intervalJump = setInterval(() => {
    if (elevation >= 150) {
      clearInterval(intervalJump);
      let intervalGoDown = setInterval(() => {
        if (elevation <= 0) {
          clearInterval(intervalGoDown);
          // elevation += 25;
          alreadyJumped = false;
        } else {
          elevation -= 25;
          //elevation *= gravity;
          tRex.style.bottom = elevation + "px";
        }
      }, 25);
    }
    elevation += 25;
    //elevation *= gravity;
    tRex.style.bottom = elevation + "px";
  }, 25);
}

//generer des obstacles
function blockadeGeneration() {
  const obstacle = document.createElement("div");
  const stage = document.querySelector("section");
  let obstaclePosition = 101;
  stage.appendChild(obstacle);
  //Style of obstacle
  obstacle.style.position = "absolute";
  obstacle.style.width = "50" + "px";
  obstacle.style.height = "50" + "px";
  obstacle.style.backgroundColor = "green";
  obstacle.style.bottom = "0" + "px";
  obstacle.style.left = obstaclePosition + "%";
  //move obstacle
  let intervalMoveObstacle = setInterval(() => {
    obstaclePosition -= 1;
    obstacle.style.left = obstaclePosition + "%";
    console.log("ok");
  }, 25);
}
blockadeGeneration();
