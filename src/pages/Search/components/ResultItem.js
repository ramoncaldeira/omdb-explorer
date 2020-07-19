import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow, Avatar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(12),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const ResultItem = ({ movie }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <>
      <TableRow>
        <TableCell size="small">
          <Avatar
            variant="square"
            className={classes.avatar}
            alt={movie.Title}
            src={movie.Poster}
          />
        </TableCell>
        <TableCell size="small">
          <Link to={`/movie/${movie.imdbID}`} className={classes.link}>
            {movie.Title}
            {' '}
            (
            {movie.Year}
            )
          </Link>
        </TableCell>
        <TableCell size="small">
          {movie.AverageRating === -1 ? (
            'N/A'
          ) : matches ? (
            <Rating value={movie.AverageRating} precision={0.5} readOnly />
          ) : (
            movie.AverageRating
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

ResultItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ResultItem;
