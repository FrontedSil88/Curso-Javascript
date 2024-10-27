
const fetchPosts=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=['Post 1','Post 2', 'Post 3'];
            const error=true;

            if(error){
                reject('Hubo un error al intentar obtener los posts');

            }else{
                resolve(posts);
            }

        },2000);
    });
};


// console.log('Inicia operacion');
// fetchPosts()

// .then((posts)=>{
//     console.log(posts);
// }) 

// .catch((error)=>{
//     console.log(error);
// });
// console.log('Finaliza operacion');

const mostrarPosts=async()=>{ // codigo asincrono
    try{
        const posts=await fetchPosts();
        console.log(posts);
     }   catch(error){
        console.log(error);
        }
    };
mostrarPosts(); //mas sencillo que then y catch



