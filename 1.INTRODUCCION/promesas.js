

//Estructuras que hay que definir, para decirle al navegar que espera 
//al obtener datos 



const promesa= new Promise((resolve,reject)=>{
    //Acción que se ejecutara.
    setTimeout(()=>{
        const exito=false; //true o false 

        if(exito){
            resolve('La operación tuvo exito');
        }else{
            reject('La operación no tuvo exito');
        }

    },4000);
});


promesa.then((mensaje)=>{ //promesa correcto 
    alert(mensaje);
});

promesa.catch((mensaje)=>{ // promesa con error
    alert(mensaje);
});

