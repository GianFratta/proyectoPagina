


let recuperoStorage = localStorage.getItem('pelisFavs')
let peliculas = JSON.parse(recuperoStorage);
console.log(peliculas);

let favs = document.querySelector('.favs')
let favos = []

for (let i = 0; i < peliculas.length; i++){
   let url = `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=ef66ec72eea3905791e313820b40269c`
   fetch(url)
   .then(function (res){
      return res.json()
   })
   .then(function (data){
      console.log(data);
      favos += pelis_p += `<article class="item"> 
      <a href="./detalles.html">
      <img class= "taquilla" src="${urlImgAppend + data.results[i].poster_path}" alt="">
      </a>
      <h3 class="articulo">${data.results[i].title}</h3>
      </article>`
   })
   .catch(function (error){
      console.log(error);
   })

}