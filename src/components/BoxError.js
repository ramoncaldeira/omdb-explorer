import React from 'react';
import PropTypes from 'prop-types';
import WarningIcon from '@material-ui/icons/Warning';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
  },
}));

const BoxError = ({ error }) => {
  const classes = useStyles();
  return (
    <Box display="flex" p={7} flexDirection="column" alignItems="center">
      <WarningIcon className={classes.icon} />
      <Typography align="center">{error}</Typography>
    </Box>
  );
};

BoxError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default BoxError;
