// const numbers = [];

// const doTask = await new Promise((resolve, reject) => {
   
//     setTimeout( async() => {
//         for (let i = 0; i < 10; i++) {
//             const number = 1 + Math.floor(Math.random() * 6);
//             numbers.push(number);
//             if (number === 6) {
//             resolve( "error: true, iter: i+1, message: Se ha sacado un 6");
//             } else{
//                 reject("error: false, value: numbers")

//             }
//         }
           
//     }, 2000 );
// });

// doTask
//     .then ((mensaje) => {
//         console.log(mensaje);
//     })
//     .catch((error)=> {
//         console.log(error);
//     });




    const doTask = (iterations) => {
        const numbers = [];
        for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            setTimeout(async () => {
                iter: i+1,
                console.log("iter:", i+1)
            }, 3000);
       
        return {
        error: true,
        
          
        message: "Se ha sacado un 6"
        
        };
        }
        }
        return {
        error: false,
        value: numbers
        };
        }
        console.log( doTask(10) );