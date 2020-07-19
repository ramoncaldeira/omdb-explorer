import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableSortLabel,
  TableBody,
  TableRow,
} from '@material-ui/core';
import orderBy from 'lodash/orderBy';
import ResultItem from './ResultItem';
import BoxSearching from '../../../components/BoxSearching';
import BoxError from '../../../components/BoxError';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
  },
  head: {
    backgroundColor: theme.palette.table.main,
  },
  ratingCell: {
    width: 100,
    [theme.breakpoints.up('sm')]: {
      width: 170,
    },
  },
  posterCell: {
    width: 110,
  },
}));

const ResultsList = ({ loading, error, movies }) => {
  const classes = useStyles();

  const [orderKey, setOrderKey] = useState('');
  const [orderDir, setOrderDir] = useState('asc');

  const handleSort = (property) => () => {
    const isAsc = orderKey === property && orderDir === 'asc';
    setOrderDir(isAsc ? 'desc' : 'asc');
    setOrderKey(property);
  };

  const sort = (data) => {
    if (!orderKey) {
      return data;
    }
    return orderBy(data, orderKey, orderDir);
  };

  if (error) {
    return <BoxError error={error} />;
  }

  if (loading) {
    return <BoxSearching />;
  }

  if (!loading && !movies.length) {
    return null;
  }

  return (
    <TableContainer className={classes.container}>
      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.posterCell} />
            <TableCell>
              <TableSortLabel
                active={orderKey === 'Title'}
                direction={orderKey === 'Title' ? orderDir : 'asc'}
                onClick={handleSort('Title')}
              >
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.ratingCell}>
              <TableSortLabel
                active={orderKey === 'AverageRating'}
                direction={orderKey === 'AverageRating' ? orderDir : 'asc'}
                onClick={handleSort('AverageRating')}
              >
                Rating
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sort(movies).map((movie) => (
            <ResultItem key={movie.imdbID} movie={movie} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ResultsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  movies: PropTypes.array,
};

export default ResultsList;
