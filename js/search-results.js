let buscador = document.querySelector(".buscador")
let rtabuscador = document.querySelector(".rta")
let mensaje = document.querySelector(".mensaje")
let titulo = document.querySelector(".titulo")

buscador.addEventListener('submit', function(hola){
    hola.preventDefault()

    if(rtabuscador.value == '') {
        mensaje.innerHTML = "No escribio nada"
    }
    else if(rtabuscador.value.length <= 3){
        mensaje.innerHTML = "Introduzca como minimo 3 caracteres"
    }

    else{
        this.submit()
        mensaje.innerHTML = ""
    }
})

let querystring = location.search
let queryStringObj = new URLSearchParams(querystring);
let busqueda = queryStringObj.get('busqueda');
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
            titulo.innerText = `No se a encontrado resultado de busqueda para ${busqueda}`
        }
        else{
            titulo.innerText = `Resultado de busqueda para: ${busqueda}`
        }

        for(let i=0; i<5; i++){
            section.innerHTML += `<article class="item">
                <a href="./detalles.html"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                </a>
                <h1 class="articulo">${data.results[i].title}</h1>
                <p>${data.results[i].release_date}</p>
                <p>${data.results[i].overview} </p>
            </article>`

        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })

/* HACER LO MISMO CON SERIES */
let querystring_S = location.search
let queryStringObj_S = new URLSearchParams(querystring);
let busqueda_S = queryStringObj.get('busqueda');
console.log(busqueda);
let url_searchSeries = `https://api.themoviedb.org/3/search/tv?query=${busqueda}$api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1&include_adult=false`

fetch(url_searchSeries)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
        let section_s = document.querySelector(".segundaLinea");

        if(data.results.length == 0){
            titulo.innerText = `No se a encontrado resultado de busqueda para ${busqueda}`
        }
        else{
            titulo.innerText = `Resultado de busqueda para: ${busqueda}`
        }

        for(let i=0; i<5; i++){
            section_s.innerHTML += `<article class="item">
                <a href="./detalles.html"><img class="taquilla" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                </a>
                <h1 class="articulo">${data.results[i].original_name}</h1>
                <p>${data.results[i].first_air_date}</p>
                <p>${data.results[i].overview} </p>
            </article>`

        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })

