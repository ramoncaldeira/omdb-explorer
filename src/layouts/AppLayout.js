import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    padding: `0 ${theme.spacing(2)}px`,
    margin: `${theme.spacing(2)}px auto`,

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
