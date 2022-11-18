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