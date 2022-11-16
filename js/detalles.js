
//Detalle de pelicula
//Obtengo la qs
let queryS = location.search

//Construyo un objeto literal
let QSobject = new URLSearchParams (location.search)

//obtengo el id de la propiedad del objeto literal
let id = QSobject.get('id')

//endpoint con el id de la qs
let url = `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=ef66ec72eea3905791e313820b40269c&language=en-US&sort_by=created_at.asc&page=1`

//fetch
fetch(url)
 .then(function(res){
    return res.json();
 })
 .then(function(data){
    console.log(data);
    
    //capturar cada elemento del html que queremos completar
    let nombre = document.querySelector('h2');
    let sinopsis = document.querySelector('.sinopsis');
    let estreno = document.querySelector('.estreno')
    let img = document.querySelector('img');

    // Agregar la información de la api y mostrarlo en el html
    nombre.innerText = data.title;
    sinopsis.innerText += data.overview;
    estreno.innerText += data.release_date;
    img.src = data.poster_path;
    

 })
 .catch(function(e){
    console.log(e);
 })



//FAVORITOS
let favoritos = []

let recuperStorage = localStorage.getItem('pelisFavs')


if(recuperStorage !== null){
    favoritos = JSON.parse(recuperStorage)
}
 
let estrella = document.querySelector('button');


if(favoritos.includes(id)){
    estrella.innerText = 'Quitar de favoritos'
}
 
estrella.addEventListener('click', function(){

    if(favoritos.includes(id)){
       let indiceDePelicula = favoritos.indexOf(id);
       favoritos.splice(indiceDePelicula, 1)
       estrella.innerText = 'Agregar a Favoritos';
 
    } else {
          favoritos.push(id);
          estrella.innerText = 'Quitar de Favoritos';
    }
 
    let favsToString = JSON.stringify(favoritos)
    localStorage.setItem('pelisFavs',favsToString)
    
    console.log(localStorage);
 
 })