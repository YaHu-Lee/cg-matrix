import { mat3, vec2, glMatrix, vec3 } from "gl-matrix";
glMatrix.setMatrixArrayType(Array);
const mx3 = mat3.create([1, 2, 3]);
const ctx = document.querySelector("#canvas").getContext("2d");
ctx.fillStyle = "#000000";

const transformMx = [2, 0, 0, 0, 2, 0, 50, 50, 1]

function drawPoint(x, y) {
  ctx.fillRect(x, y, 1, 1);
}

const pointArray = [];

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    pointArray.push([i, j, 1]);
  }
}

pointArray.map(point => {
  console.log(point)
  drawPoint(point[0], point[1]);

  const result = mat3.create();
  vec3.transformMat3(result, point, transformMx);
  drawPoint(result[0], result[1]);

})