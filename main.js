var calcButton = document.getElementById("calculate-button");

var runSum = function (event) {
  var num1 = Number(document.getElementById("value-one").value);
  var num2 = Number(document.getElementById("value-two").value);
  event.preventDefault();
  var answerBox = document.getElementById("answer");

  answerBox.innerHTML = num1 + num2;
};

calcButton.addEventListener("click", runSum);
