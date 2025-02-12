let userName = ""; // Variable para almacenar el nombre del usuario

// Función para guardar el nombre y mostrar mensaje en la consola
function saveName() {
  userName = document.getElementById("name").value;
  console.log(userName ? `Bienvenido, ${userName}!` : "Bienvenido!");
  document.getElementById("greeting").textContent = userName
    ? `¡Hola, ${userName}!`
    : "¡Hola!";
}

// Función para lanzar los dados y determinar el resultado
function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1; 
  let dice2 = Math.floor(Math.random() * 6) + 1; 
  let sum = dice1 + dice2;

  console.log(`Dado 1: ${dice1}, Dado 2: ${dice2}, Suma: ${sum}`);

  let resultMessage;

  if (sum === 2) {
    resultMessage = "¡Doble uno! Mala suerte.";
  } else if (sum === 7 || sum === 11) {
    resultMessage = "¡Suerte! Has ganado esta ronda.";
  } else if (dice1 === dice2) {
    resultMessage = "¡Doble! Tienes un turno extra.";
  } else {
    resultMessage = "Nada especial, ¡intenta de nuevo!";
  }

  // Mostrar resultado en la página
  document.getElementById(
    "dice-results"
  ).textContent = `Dado 1: ${dice1}, Dado 2: ${dice2}, Suma: ${sum}`;
  document.getElementById("game-result").textContent = resultMessage;
}
