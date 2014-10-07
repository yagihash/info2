function iftest() {
  var numElement = document.getElementById('number');
  var num = parseInt(numElement.value);
  
  if(isNaN(num)) {
    numElement.style.backgroundColor = "gray";
    alert("数字以外のものが入力されました。");
  } else if (num % 2 == 0) {  
    numElement.style.backgroundColor = "blue";
  } else if (num % 3 == 0) {  
    numElement.style.backgroundColor = "red";
  } else {
    numElement.style.backgroundColor = "white";
  }
}
