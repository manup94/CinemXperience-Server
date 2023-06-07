const axios = require("axios");

const GetMovies = (req, res, next) => {

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err))
}

const GetBestMovies = (req, res, next) => {

    const { page } = req.query


    axios.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err))
}

const GetOneMovie = (req, res, next) => {

    const movieId = req.params.movie_id

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(err => next(err));
}

// const GetOneMovie = (req, res, next) => {

//     const movieId = req.params.movie_id


//     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`)
//         .then(response => {
//              comments
//              .find({movieId})
//                  .then((comments) => {
//                      const movie = response.data
//                      res.json({ movie,comments })
// })


//         })
//         .catch(err => next(err));
// }

const GetMoviesFromTickets = (req, res, next) => {

    const { tickets } = req.body

    const moviesDetailsPromises = tickets.map(elm => axios.get(`https://api.themoviedb.org/3/movie/${elm.movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`))
    return Promise.all(moviesDetailsPromises)
        .then(moviesDetails => {

            const formattedMovies = moviesDetails.map((elm, idx) => {
                return {
                    movieInfo: elm.data,
                    passInfo: tickets[idx]
                }
            })

            res.json(formattedMovies)
        })

}



const GetFilteredMovies = (req, res, next) => {

    const { genre_id } = req.params
    const { page } = req.query

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_TOKEN}&sort_by=vote_average.desc&vote_count.gte=200&page=${page}&with_genres=${genre_id}`)
        .then(response => res.json(response.data))
        .catch(err => next(err))


}

module.exports = {
    GetMovies,
    GetOneMovie,
    GetBestMovies,
    GetMoviesFromTickets,
    GetFilteredMovies
}

