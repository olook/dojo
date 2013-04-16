/**
  * Exemplo de Fatorial
  * 
  */
factorial = function(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num -1);
  }
}
