/* GENEROS PELIS */
let url_generosPelis = "https://api.themoviedb.org/3/genre/movie/list?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US"

fetch(url_generosPelis)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let generosPelis = document.querySelector(".containerG")
        let generos_p = ``

        for (let i = 0; i < 7; i++){
            generos_p += `<article class="generos">
            <p class="lista_generos">
            <a class= "list" href="./detalles generos.html">${data.genres[i].name}</a>
            </p>
            </article>`
        
            console.log(generos_p)
        }

        generosPelis.innerHTML = generos_p

    })
    .catch(function(error){
    console.log('Los errores son' + error)
    })



/* GENEROS SERIES */
let url_generosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=39761ff3840b501535e80bbc7bffb035&language=en-US"

fetch(url_generosSeries)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let generosSeries = document.querySelector(".containerF")
        let generos_s = ``

        for (let i = 0; i < 7; i++){
            generos_s += `<article class="generos">
            <p class="lista_generos">
            <a class= "list" href="./detalles generos.html">${data.genres[i].name}</a>
            </p>
            </article>`
        
            console.log(generos_s)
        }

        generosSeries.innerHTML = generos_s

    })
