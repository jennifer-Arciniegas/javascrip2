
    const tareaA = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TAREA A");
        }, 1000);
    });

    const tareaB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TAREA B");
        }, 2000);
    });

    const tareaC = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TAREA C");
        }, 5000);
    });

    const tareaD = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TAREA D");
        }, 7000);
    });

    const allPromise = [tareaA, tareaB, tareaC]
    console.log("inicio")
    Promise.all(allPromise)
    .then(res => {
        console.warn("no hubo error en la promesa");
    console.log(res)
    })

    .catch(res => {
        console.log("Error en la promesa");
        console.log(res);
    })

console.log("FIN");
