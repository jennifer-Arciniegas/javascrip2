//crear objt
const datos = [
    {
        id: 1,
        title: "iron Man",
        year: 2008
    },
    {
        id: 2,
        title: "Spiderman:  HomeComing",
        year: 2017
    },
    {
        id: 3,
        title: "Avanger: Endgame",
        year: 2019
    }
]
//sincrono
const getDatos = ( )=>{
    return datos;

}

/*console.log("INIIO");
console.log(getDatos());
console.log("FIN");
*/
//Asincron callbacks-------------------
/*
const getDatosACallback = (callback) => {
    setTimeout(function(){
        console.log(callback());
    }, 3000);
}
console.log("INIIO");
getDatosACallback(getDatos);
console.log("FIN");

*/

//promesas 
const getDatosPromesa = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (datos.length > 0 ){
                 resolve(datos);
             }else{
                reject("No existen datos")
             }    
        }, 3000);


    })
};
console.log("INIIO");
getDatosPromesa()
    .then(datos => console.table(datos))
    .catch(err => console.error(err))

console.log("FIN");