


window.onload = () => {
    // addMovies();
    fetchMovies();
}

// Add movies to the front end
function addMovies(movies) {

    // Add img element to original__movies element
    var moviesEl = document.querySelector('.original__movies');
    console.log(moviesEl);
    for (var movie of movies.results) {
        var image = `<img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/>`;
        console.log(image);
        moviesEl.innerHTML += image;
    }
}


function fetchMovies() {
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=ab11299a8d3d22b7413c9b6c0ea15527")
        .then((respone) => {
            return respone.json();
        }).then((data) => {
            addMovies(data);
        })

}