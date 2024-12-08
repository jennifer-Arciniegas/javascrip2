// Una función que devuelve una promesa que se resuelve después de un tiempo específico
function delayPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Una función para imprimir las promesas en diferentes segundos
async function printPromises() {
  console.log("Empieza la ejecución:");

  // Crear y manejar las promesas con diferentes tiempos
  await delayPromise("Promesa 1 - después de 1 segundo", 1000).then(
    console.log
  );
  await delayPromise("Promesa 2 - después de 2 segundos", 2000).then(
    console.log
  );
  await delayPromise("Promesa 3 - después de 3 segundos", 3000).then(
    console.log
  );

  console.log("Fin de la ejecución");
}

// Llamar a la función
printPromises();
