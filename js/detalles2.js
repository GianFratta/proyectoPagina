//CAMBIAR ESTOS DATOS POR LOS DE SERIES.(creo que ya esta)
//Detalle de serie.
//Obtengo la qs
let queryString2 = location.search;

//Construyo un objeto literal
let queryStringObj3 = new URLSearchParams (queryString2);

//obtengo el id de la propiedad del objeto literal
let id = queryStringObj3.get('id');

//endpoint con el id de la qs
let url1 = `https://api.themoviedb.org/3/tv/${id}?api_key=ef66ec72eea3905791e313820b40269c&language=en-US`

//fetch
fetch(url1)
   .then(function(res){
     return res.json();
   })
   .then(function(data){
     console.log(data);
    //capturar cada elemento del html que queremos completar
     let urlappend = "https://image.tmdb.org/t/p/original"
     let nombre = document.querySelector('h2');
     let sinopsis = document.querySelector('.sinopsis');
     let estreno = document.querySelector('.estreno');
     let img = document.querySelector('.peli-taquilla');
     let rating = document.querySelector('.rating');
  

    // Agregar la información de la api y mostrarlo en el html
     nombre.innerText = data.name;
     sinopsis.innerText += data.overview;
     estreno.innerText += data.first_air_date;
     img.innerHTML = `<img class="peli-taquilla" src="${urlappend + data.poster_path}" alt="">`
     rating.innerText += data.vote_average;
     



   })
   .catch(function(e){
      console.log(e);
   })



//FAVORITOS
let favoritosSeries = []

let recuperoStorageSeries = localStorage.getItem('seriesFavs')


if(recuperoStorageSeries !== null){
    favori = JSON.parse(recuperoStorageSeries)
}
 
let estrella = document.querySelector('button');


if(favoritosSeries.includes(id)){
    estrella.innerText = 'Quitar de favoritos'
}
 
estrella.addEventListener('click', function(){

    if(favoritosSeries.includes(id)){
       let indiceDePelicula = favoritosSeries.indexOf(id);
       favoritosSeries.splice(indiceDePelicula, 1)
       estrella.innerText = 'Agregar a Favoritos';
 
    } else {
          favoritosSeries.push(id);
          estrella.innerText = 'Quitar de Favoritos';
    }
 
    let favsToString = JSON.stringify(favoritosSeries)
    localStorage.setItem('seriesFavs',favsToString)
    
    console.log(localStorage);
 
})



//BUSCADOR

let url = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US'



fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(e){
        console.log(e);
    })

    let barraDeBusqueda = document.querySelector(".barraDeBusqueda")
    let respuesta = document.querySelector(".respuesta")
    let mensaje = document.querySelector(".mensaje")
    let titulo = document.querySelector(".titulo")
    barraDeBusqueda.addEventListener('submit', function(e){
        e.preventDefault()
    
        if(respuesta.value == '') {
            mensaje.innerHTML = "No escribio nada"
            
        }
        else if(respuesta.value.length < 3){
            mensaje.innerHTML = "Minimo 3 caracteres"
        }
    
        else{
            this.submit()
            mensaje.innerHTML = ""
        }
    })
    
    let querystringBuscador = location.search
    let queryStringObj2 = new URLSearchParams(querystringBuscador);
    let busqueda = queryStringObj2.get('busqueda');
    console.log(busqueda);
    let url_searchPelis = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1&include_adult=false`
    
    fetch(url_searchPelis)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
            
            let section = document.querySelector(".primeraLinea");
    
            if(data.results.length == 0){
                titulo.innerText = `No se ha encontrado resultado de busqueda para ${busqueda}`
            }
            else{
                titulo.innerText = `Resultado de busqueda para: ${busqueda}`
            }
    
            for(let i=0; i<2; i++){
                section.innerHTML += `<article class="item">
                    <a href="./detalles.html"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    </a>
                    <h1 class="articulo">${data.results[i].title}</h1>
                    <p>${data.results[i].release_date}</p>
                </article>`
    
            }
        })
    
        .catch(function(error){
            console.log("Error: " + error);
        })
    
    /* HACER LO MISMO CON SERIES */
    
    let url_searchSeries = `https://api.themoviedb.org/3/search/tv?query=${busqueda}&api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US&page=1&include_adult=false`
    
    fetch(url_searchSeries)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
            
            let section = document.querySelector(".primeraLinea");
    
            for(let i=0; i<3; i++){
                section.innerHTML += `<article class="item">
                    <a href="./detalles series.html"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    </a>
                    <h1 class="articulo">${data.results[i].original_name}</h1>
                    <p>${data.results[i].first_air_date}</p>
                </article>`
    
            }
        })
    
        .catch(function(error){
            console.log("Error: " + error);
        })
    