function calculateGradeAverage(gradeOne, gradeTwo, gradeThree, gradeFour) {
  const average = (gradeOne + gradeTwo + gradeThree + gradeFour) / 4;
  return average;
}

document.getElementById("calculateAverage").addEventListener("submit", (e) => {
  e.preventDefault();
  const gradeOne = parseFloat(document.getElementById("gradeOne").value);
  const gradeTwo = parseFloat(document.getElementById("gradeTwo").value);
  const gradeThree = parseFloat(document.getElementById("gradeThree").value);
  const gradeFour = parseFloat(document.getElementById("gradeFour").value);

  const average = calculateGradeAverage(gradeOne, gradeTwo, gradeThree, gradeFour);

  document.getElementById("finalAverage").textContent = `The final average is: ${average.toFixed(2)}`;
});
