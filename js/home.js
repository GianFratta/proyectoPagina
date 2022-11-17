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
            <a href="./detalles.html">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].title}</h3>
            <p>${data.results[i].release_date}</p>
            <p>${data.results[i].overview}</p>
            </article>`
        }

        pelis_populares.innerHTML = pelis_p

    })
    .catch(function(error){
        console.log('Los errores son' + error)
    })



/* SERIES POPULARES */
let url_SeriesPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1"

fetch(url_SeriesPopulares)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let urlImgAppend = "https://image.tmdb.org/t/p/original"
        let series_populares = document.querySelector('.seriesPopulares')
        let series_p = ``

        for (let i = 0; i < 5; i++){
            series_p += `<article class="item"> 
            <a href="./detalles.html">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].original_name}</h3>
            <p>${data.results[i].first_air_date}</p>
            <p>${data.results[i].overview}</p>
            </article>`
        }

        series_populares.innerHTML = series_p

    })  
    .catch(function(error){
        console.log(`Los errores son` + error)
    })



/* PELIS MEJOR VALORADAS */
let url_pelisValoradas = "https://api.themoviedb.org/3/movie/top_rated?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US&page=1"

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
            <a href="./detalles.html">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].title}</h3>
            <p>${data.results[i].release_date}</p>
            <p>${data.results[i].overview}</p>
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
            <a href="./detalles.html">
            <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
            </a>
            <h3 class="articulo">${data.results[i].original_name}</h3>
            <p>${data.results[i].first_air_date}</p>
            <p>${data.results[i].overview}</p>
            </article>`
        }

        series_valoradas.innerHTML = series_v

    })
    .catch(function(error){
        console.log('Los errores son' + error)
    })
