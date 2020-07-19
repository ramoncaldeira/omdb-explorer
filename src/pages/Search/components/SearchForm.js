import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lastYears } from '../../../utils/dates';
import useDebounce from '../../../hooks/useDebounce';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.grey[400],
  },
  container: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  yearField: {
    marginTop: theme.spacing(1),
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      width: 200,
      marginLeft: theme.spacing(2),
    },
  },
}));

const DEBOUNCE_DELAY = 300;

const SearchForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState(null);

  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_DELAY);

  useEffect(() => {
    onSubmit(debouncedSearchQuery, yearFilter);
  }, [onSubmit, debouncedSearchQuery, yearFilter]);

  return (
    <Box display="flex" className={classes.container}>
      <TextField
        fullWidth
        autoFocus
        placeholder="Search OMDb"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          spellCheck: false,
          startAdornment: (
            <InputAdornment position="start">
              <Search className={classes.icon} />
            </InputAdornment>
          ),
        }}
      />
      <Box className={classes.yearField}>
        <Autocomplete
          disabled={!searchQuery}
          options={lastYears(200)}
          value={yearFilter}
          onChange={(_, newValue) => setYearFilter(newValue)}
          renderInput={(params) => <TextField {...params} placeholder="Year" variant="outlined" />}
        />
      </Box>
    </Box>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
