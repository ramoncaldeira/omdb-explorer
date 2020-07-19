import React from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchingText: {
    marginTop: theme.spacing(2),
  },
}));

const BoxSearching = () => {
  const classes = useStyles();
  return (
    <Box display="flex" p={7} flexDirection="column" alignItems="center">
      <CircularProgress />
      <Typography align="center" className={classes.searchingText}>
        Searching...
      </Typography>
    </Box>
  );
};

export default BoxSearching;
