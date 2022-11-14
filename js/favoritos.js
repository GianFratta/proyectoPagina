
let favoritos = []

let recuperStorage = localStorage.getItem('pelisFavs')


if(recuperStorage !== null){
    favoritos = JSON.parse(recuperStorage)
}
 
let estrella = document.querySelector('.palabraRute');

/* #################################################### */

if(favoritos.includes(id)){
    estrella.innerText = <i class="fa-regular fa-star"></i>
}
 
estrella.addEventListener('click', function(){

    if(favoritos.includes(id)){
       let indiceDelPersonaje = favoritos.indexOf(id);
       favoritos.splice(indiceDelPersonaje, 1)
       estrella.innerText = 'Agregar a favoritos';
 
    } else {
          favoritos.push(id);
          estrella.innerText = <i class="fa-solid fa-star"></i>;
    }
 
    let favsToString = JSON.stringify(favoritos)
    localStorage.setItem('pelisFavs',favsToString)
    
    console.log(localStorage);
 
 })