   
            const tare1 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea A ");
                }, 1000)});
    
            const tare2 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea B");
                }, 2000)});
    
            const tare3 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea C ");
                }, 5000)});
    
            const tare4= new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea D ");
                }, 3000)});
    
            const tare5= new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea E ");
                }, 5000)});
    
            const tare6 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea F ");
                }, 9000)});
    
            const tare7 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea G ");
                }, 7000)});
    
            const tare8 = new Promise ((resolve, reject) => {setTimeout(()=> {
                resolve("tarea H ");
                }, 11000)});
    
    console.log("inicio")
    Promise.all([tare1, tare2,tare3, tare4, tare5, tare6,tare7, tare8]).then((res)=>{console.log(res);})
            .then((res)=>{
                console.log(res)
            })
   /* ordenCajas()
        .then(res => {
            console.warn("no hubo error en la promesa");
          console.log(res)
        })
    
        .catch(res => {
            console.log("Error en la promesa");
            console.log(res);
        })
    */
        console.log("FIN");
    