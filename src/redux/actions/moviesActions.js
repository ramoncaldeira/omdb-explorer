export const FETCH_MOVIES_REQUEST = '@movies/FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = '@movies/FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = '@movies/FETCH_MOVIES_FAILURE';

export const searchMovies = (search, year) => ({
  type: FETCH_MOVIES_REQUEST,
  search,
  year,
  multi: true,
});
export const fetchMovie = (id) => ({ type: FETCH_MOVIES_REQUEST, id, multi: false });
export const fetchMoviesSuccess = (data) => ({ type: FETCH_MOVIES_SUCCESS, data });
export const fetchMoviesFailure = (error) => ({ type: FETCH_MOVIES_FAILURE, error });
