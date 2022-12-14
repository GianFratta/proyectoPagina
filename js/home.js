/* PELIS POPULARES */
let url_PelisPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1"

fetch(url_PelisPopulares)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let urlImgAppend = "https://image.tmdb.org/t/p/original"
        let pelis_populares = document.querySelector('.populares')
        let pelis_p = ``

        for (let i = 0; i < 5; i++){
            pelis_p += `<article class="item"> 
            <a href="./detalles.html?id=${data.results[i].id}">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].title}</h3>
            <p>${data.results[i].release_date}</p>
            </article>`
        }

        pelis_populares.innerHTML = pelis_p

    })
    .catch(function(error){
        console.log('Los errores son' + error)
    })



/* SERIES POPULARES */
let url_SeriesPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1"

/* fetch es tatatata
nos permite comnicarnos con api
una api es bla bla bla
/* usamos un then y un catch porque fetch s asincronico */
/* asincronismo y promesa es bla bla  */

fetch(url_SeriesPopulares)
    .then(function(res){
        return res.json();
        /* el primer then toma una funcion anonima y el res es la infromacion que nos trae la api
        usamos el metood json para pasar la respuesta de json a javascript
        json tatatata

        el fetch te devulve una promesa
        las promesas usan .then para decir "cuando se resuelva esto, hace tal cosa, en este caso hace esta funcion"

        el res.json tambien devulve un promesa poreso el segundo .then

        explicar el  parametro data y el catch */
    })
    .then(function(data){
        console.log(data);

        let urlImgAppend = "https://image.tmdb.org/t/p/original"
        let series_populares = document.querySelector('.seriesPopulares')
        let series_p = ``

        for (let i = 0; i < 5; i++){
            series_p += `<article class="item"> 
            <a href="./detalles series.html?id=${data.results[i].id}">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].original_name}</h3>
            <p>${data.results[i].first_air_date}</p>
            </article>`
        }

        series_populares.innerHTML = series_p

    })  
    .catch(function(error){
        console.log(`Los errores son` + error)
    })



/* PELIS MEJOR VALORADAS */
let url_pelisValoradas = "https://api.themoviedb.org/3/movie/top_rated?api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US&page=1"

fetch(url_pelisValoradas)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let urlImgAppend = "https://image.tmdb.org/t/p/original"
        let pelis_valoradas = document.querySelector('.valoradas')
        let pelis_v = ``

        for (let i = 0; i < 5; i++){
            pelis_v += `<article class="item"> 
            <a href="./detalles.html?id=${data.results[i].id}">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].title}</h3>
            <p>${data.results[i].release_date}</p>
            </article>`
        }

        pelis_valoradas.innerHTML = pelis_v

    })
    .catch(function(error){
        console.log('Los errores son' + error)
    })



/* SERIES MEJOR VALORADAS */
let url_seriesValoradas = "https://api.themoviedb.org/3/tv/top_rated?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1"

fetch(url_seriesValoradas)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let urlImgAppend = "https://image.tmdb.org/t/p/original"
        let series_valoradas = document.querySelector('.seriesValoradas')
        let series_v = ``

        for (let i = 0; i < 5; i++){
            series_v += `<article class="item"> 
            <a href="./detalles series.html?id=${data.results[i].id}">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].original_name}</h3>
            <p>${data.results[i].first_air_date}</p>
            </article>`
        }

        series_valoradas.innerHTML = series_v

    })
    .catch(function(error){
        console.log('Los errores son' + error)
    })


/* BUSCADOR */

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
