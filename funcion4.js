function potencia() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = "Por favor ingresa ambos números.";
      return;
    }
  
    const potenciaResultado = Math.pow(num1, num2);
    resultado.textContent = potenciaResultado;
  }
  