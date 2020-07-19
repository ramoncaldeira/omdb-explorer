import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getMoviesBySearch, getMovieById } from '../../services/api';
import { averageRate } from '../../utils/math';

import {
  FETCH_MOVIES_REQUEST,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../actions/moviesActions';

const movieWithAverageRating = (movie) => {
  const ratings = movie.Ratings.map((x) => x.Value).filter((x) => x.length > 0);
  return { ...movie, AverageRating: averageRate(ratings) };
};

function* fetchMovies({ search, year }) {
  if (!search) {
    yield put(fetchMoviesSuccess(null));
    return;
  }

  try {
    const response = yield call(getMoviesBySearch, search, year);
    if ('Error' in response) throw response.Error;

    const ids = response.Search.map((item) => item.imdbID);
    const responses = yield all(ids.map((id) => call(getMovieById, id)));

    const data = responses.reduce((acc, value) => {
      acc[value.imdbID] = movieWithAverageRating(value);
      return acc;
    }, {});

    yield put(fetchMoviesSuccess(data));
  } catch (e) {
    yield put(fetchMoviesFailure(e));
  }
}

function* fetchMovie({ id }) {
  try {
    const response = yield call(getMovieById, id);
    if ('Error' in response) throw response.Error;
    const data = { [response.imdbID]: movieWithAverageRating(response) };
    yield put(fetchMoviesSuccess(data));
  } catch (e) {
    yield put(fetchMoviesFailure(e));
  }
}

export default function* moviesSaga() {
  yield takeLatest(({ type, multi }) => type === FETCH_MOVIES_REQUEST && multi, fetchMovies);
  yield takeLatest(({ type, multi }) => type === FETCH_MOVIES_REQUEST && !multi, fetchMovie);
}
