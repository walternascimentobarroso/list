import { Box, CircularProgress } from '@material-ui/core';
import { Styles } from './Styles';

const useStyles = Styles;

export default function FormLoadingComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.loading}>
      <CircularProgress
        className={classes.loadingProgress}
        disableShrink
        color="secondary"
        size={20}
      />{' '}
      Aguarde...
    </Box>
  );
}
