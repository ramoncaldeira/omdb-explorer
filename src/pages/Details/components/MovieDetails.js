import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import BoxError from '../../../components/BoxError';

const useStyles = makeStyles((theme) => ({
  plot: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  container: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    marginBottom: theme.spacing(2),
  },
}));

function MovieDetails({ loading, error, movie }) {
  const classes = useStyles();

  const info = movie
    ? [
        { title: 'Director', description: movie.Director },
        { title: 'Writer', description: movie.Writer },
        { title: 'Actors', description: movie.Actors },
        { title: 'Production', description: movie.Production },
        { title: 'Runtime', description: movie.Runtime },
        { title: 'Rated', description: movie.Rated },
      ]
    : [];

  if (error) {
    return <BoxError error={error} />;
  }

  if (!loading && !movie) {
    return null;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {loading ? <Skeleton /> : `${movie.Title} (${movie.Year})`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {loading ? <Skeleton /> : `${movie.Genre} | ${movie.Released} (${movie.Country})`}
      </Typography>
      <Typography className={classes.plot}>
        {loading ? <Skeleton variant="rect" height={50} /> : movie.Plot}
      </Typography>

      {loading ? (
        <Skeleton variant="rect" height={340} />
      ) : (
        <TableContainer className={classes.container}>
          <Table>
            <TableBody>
              {info.map(({ title, description }) => (
                <TableRow key={title}>
                  <TableCell>
                    <Typography variant="subtitle2">{title}</Typography>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

MovieDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  movie: PropTypes.object,
};

export default MovieDetails;
