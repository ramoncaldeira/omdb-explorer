import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiSkeleton: {
      animation: 'wave',
    },
  },
  palette: {
    background: {
      default: '#f2f2f2',
    },
    table: {
      main: '#e8e8e8',
    },
  },
});

export default theme;
