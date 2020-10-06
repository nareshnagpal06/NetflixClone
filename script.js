
window.onload = () => {
    // addMovies();
    getOriginals()
    getTrending()
    getTopRated();
}

function displayMovies(movies, elementSelector, path_type) {
    var moviesEl = document.querySelector(elementSelector);
    for (var movie of movies.results) {
        var image = `<img src="https://image.tmdb.org/t/p/original${movie[path_type]}"/>`;
        moviesEl.innerHTML += image;
    }
}

function fetchMovies(url, elementSelector, path_type) {
    fetch(url)
        .then((respone) => {
            return respone.json();
        }).then((data) => {
            displayMovies(data, elementSelector, path_type);
        })
}

function getOriginals() {
    var url = "https://api.themoviedb.org/3/discover/tv?api_key=ab11299a8d3d22b7413c9b6c0ea15527";
    fetchMovies(url, '.original__movies', 'poster_path');
}

function getTrending() {
    var url = "https://api.themoviedb.org/3/trending/all/day?api_key=ab11299a8d3d22b7413c9b6c0ea15527";
    fetchMovies(url, '.movies__trendingNow', 'backdrop_path');
}

function getTopRated() {
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=ab11299a8d3d22b7413c9b6c0ea15527&language=en-US&page=1";
    fetchMovies(url, '.movies__topRated', 'backdrop_path');
}
