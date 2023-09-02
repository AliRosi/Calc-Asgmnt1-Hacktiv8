function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearAll() {
  document.getElementById("display").value = "";
}

function clearEntry() {
  const currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
