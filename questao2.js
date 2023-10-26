var x = 1
var y = 5
var z = 10


function maiorNumero(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
      return num1;
    }
  
    else if (num2 >= num1 && num2 >= num3) {
      return num2;
    }

    else {
      return num3;
    }
  }
  const numeroMaior = maiorNumero(x, y, z);
  console.log("O maior número é: " + numeroMaior);