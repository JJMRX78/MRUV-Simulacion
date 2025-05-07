let startTime, animationFrame;
const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
const tInput = document.getElementById("t");

function startSimulation() {
  cancelAnimationFrame(animationFrame);
  car1.style.left = "0px";
  car2.style.left = "0px";
  startTime = null;
  animate();
}

function animate(timestamp) {
  if (!startTime) startTime = timestamp;
  let elapsed = (timestamp - startTime) / 1000;

  let v0_1 = parseFloat(document.getElementById("v0_1").value);
  let a_1 = parseFloat(document.getElementById("a_1").value);
  let x1 = v0_1 * elapsed + 0.5 * a_1 * elapsed * elapsed;

  let v0_2 = parseFloat(document.getElementById("v0_2").value);
  let a_2 = parseFloat(document.getElementById("a_2").value);
  let x2 = v0_2 * elapsed + 0.5 * a_2 * elapsed * elapsed;

  car1.style.left = `${x1 * 10}px`;
  car2.style.left = `${x2 * 10}px`;
  tInput.value = elapsed.toFixed(2);

  if (x1 <= 100 || x2 <= 100) {
    animationFrame = requestAnimationFrame(animate);
  }
}

function resetSimulation() {
  cancelAnimationFrame(animationFrame);
  car1.style.left = "0px";
  car2.style.left = "0px";
  tInput.value = "0";
}
