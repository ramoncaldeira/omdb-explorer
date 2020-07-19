import React, { useCallback } from 'react';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import { searchMovies } from '../../redux/actions/moviesActions';

const Home = () => {
  const dispatch = useDispatch();

  const selectMovies = createSelector(
    (state) => state.movies.data,
    (data) => (data ? Object.values(data) : []),
  );

  const movies = useSelector(selectMovies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const onSubmit = useCallback(
    (search, year) => {
      dispatch(searchMovies(search, year));
    },
    [dispatch],
  );

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <ResultsList loading={loading} error={error} movies={movies} />
    </>
  );
};

export default Home;
