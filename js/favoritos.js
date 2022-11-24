
//FAVORITOS PELICULAS
let recuperoStoragePeliculas = localStorage.getItem('pelisFavs')
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
console.log(favoritosPeliculas);

let favsPelis = document.querySelector('.favsPelis')
let favosPeliculas = ''

for (let i = 0; i < favoritosPeliculas.length; i++){
   let urlPelis = `https://api.themoviedb.org/3/movie/${favoritosPeliculas[i]}?api_key=ef66ec72eea3905791e313820b40269c&language=en-US`
   let urlAppend = "https://image.tmdb.org/t/p/original"

   fetch(urlPelis)
        .then(function(res){
            return res.json()
        })
        .then(function (data){
            console.log(data);
            favosPeliculas += `<div class="favsPelis">
            <article class="item"> 
            <a href="./detalles.html?id=${data.id}">
            <img class= "taquilla" src="${urlAppend + data.poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.title}</h3>
            </article>`

            favsPelis.innerHTML = favosPeliculas
        })
        .catch(function (error){
            console.log(error);
        })

}

//FAVORITOS SERIES
let recuperoStorageSeries = localStorage.getItem('seriesFavs')
let favoritosSeries = JSON.parse(recuperoStorageSeries)
console.log(favoritosSeries);

let favsSeries = document.querySelector('.favsSeries')
let favosSeries = ''

for (let i = 0; i < favoritosSeries.length; i++){
   let url = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
   let urlAppend = "https://image.tmdb.org/t/p/original"

   fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function (data){
            console.log(data);
            favosSeries += `<div class="favsSeries">
            <article class="item"> 
            <a href="./detalles series.html?id=${data.id}">
            <img class= "taquilla" src="${urlAppend + data.poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.name}</h3>
            </article>`

            favsSeries.innerHTML = favosSeries
        })
        .catch(function (error){
            console.log(error);
        })

}


//buscador

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
                <a href="./detalles.html?id=${data.results[i].id}"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
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
                <a href="./detalles series.html?id=${data.results[i].id}"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                </a>
                <h1 class="articulo">${data.results[i].original_name}</h1>
                <p>${data.results[i].first_air_date}</p>
            </article>`

        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
