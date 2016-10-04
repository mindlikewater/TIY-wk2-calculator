var calcButton = document.getElementById("calculate-button");
var answerBox = document.getElementById("answer");

var runSum = function () {
  var num1 = document.getElementById("value-one").value;
  var num2 = document.getElementById("value-two").value;

  console.log(num1, num2);

  return num1 + num2;
};

console.log(runSum);

calcButton.addEventListener("click", runSum);

var displayAnswer = function () {
  answerBox.innerHTML = "";
  answerBox.innerHTML += "<p>" + runSum + "<p>";
};
