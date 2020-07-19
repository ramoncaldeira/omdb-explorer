import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import MovieDetails from './components/MovieDetails';
import { fetchMovie } from '../../redux/actions/moviesActions';

function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movies.data[id]);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovie(id));
    }
  }, [dispatch, movie, id]);

  return (
    <>
      <MovieDetails loading={loading} error={error} movie={movie} />
      {(movie || error) && (
        <Button startIcon={<BackIcon />} onClick={() => history.push('/')}>
          Go back to search page
        </Button>
      )}
    </>
  );
}

export default Detail;
