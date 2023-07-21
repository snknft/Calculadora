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

    case "presion":
      conversionContent.innerHTML = `
          <div class="form-group">
            <label for="pascalInput">Pascal:</label>
            <input type="number" class="form-control" id="pascalInput" oninput="convertPressure('pascal')">
          </div>
          <div class="form-group">
            <label for="barInput">Bar:</label>
            <input type="number" class="form-control" id="barInput" oninput="convertPressure('bar')">
          </div>`;
      break;

    case "masa":
      conversionContent.innerHTML = `
          <div class="form-group">
            <label for="kilogramInput">Kilogramo:</label>
            <input type="number" class="form-control" id="kilogramInput" oninput="convertMass('kilogram')">
          </div>
          <div class="form-group">
            <label for="gramInput">Gramo:</label>
            <input type="number" class="form-control" id="gramInput" oninput="convertMass('gram')">
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
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(1);
  } else if (from === "fahrenheit") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(1);
  }
}

function convertPressure(from) {
  const pascalInput = document.getElementById("pascalInput");
  const barInput = document.getElementById("barInput");

  const pascalToBar = 1e-5;

  if (from === "pascal") {
    const pascal = parseFloat(pascalInput.value);
    const bar = pascal * pascalToBar;
    barInput.value = isNaN(bar) ? "" : bar.toExponential(5);
  } else if (from === "bar") {
    const bar = parseFloat(barInput.value);
    const pascal = bar / pascalToBar;
    pascalInput.value = isNaN(pascal) ? "" : pascal.toExponential(1);
  }
}

function convertMass(from) {
  const kilogramInput = document.getElementById("kilogramInput");
  const gramInput = document.getElementById("gramInput");

  if (from === "kilogram") {
    const kilogram = parseFloat(kilogramInput.value);
    const gram = kilogram * 1000;
    gramInput.value = isNaN(gram) ? "" : gram.toFixed(1);
  } else if (from === "gram") {
    const gram = parseFloat(gramInput.value);
    const kilogram = gram / 1000;
    kilogramInput.value = isNaN(kilogram) ? "" : kilogram.toFixed(1);
  }
}

// llarmar a la funcion
updateConversion();
