
// Función para actualizar las conversiones según la opción seleccionada
function updateConversion() {
  const selectedOption = document.getElementById("selectConversion").value;
  const conversionContent = document.getElementById("conversionContent");
  conversionContent.innerHTML = "";

  switch (selectedOption) {
    case "temperatura":
      conversionContent.innerHTML = `
        <div class="form-group">
          <label for="celsiusInput">Grados Celsius:</label>
          <input type="number" class="form-control" id="celsiusInput" oninput="convertTemperature('celsius')">
        </div>
        <div class="form-group">
          <label for="fahrenheitInput">Grados Fahrenheit:</label>
          <input type="number" class="form-control" id="fahrenheitInput" oninput="convertTemperature('fahrenheit')">
        </div>`;
      break;

    default:
      break;
  }
}

// Funciones de conversión
function convertTemperature(from) {
  const celsiusInput = document.getElementById("celsiusInput");
  const fahrenheitInput = document.getElementById("fahrenheitInput");

  if (from === "celsius") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(1);
  } else if (from === "fahrenheit") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(1);
  }
}



// llarmar a la funcion
updateConversion();