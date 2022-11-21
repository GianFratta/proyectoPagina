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
        mensaje.innerHTML = "Minimo 4 caracteres"
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
