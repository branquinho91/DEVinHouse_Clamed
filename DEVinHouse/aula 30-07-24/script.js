const calculateTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3;

document.getElementById("form-triangle-perimeter").addEventListener("submit", (event) => {
  event.preventDefault();
  const side1 = parseFloat(document.getElementById("side1").value);
  const side2 = parseFloat(document.getElementById("side2").value);
  const side3 = parseFloat(document.getElementById("side3").value);
  const perimeter = calculateTrianglePerimeter(side1, side2, side3);
  document.getElementById("result-triangle-perimeter").innerText = `The perimeter of the triangle is ${perimeter.toFixed(2)}`;
});
