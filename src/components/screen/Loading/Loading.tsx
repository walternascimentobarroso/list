import { Backdrop, Box, CircularProgress } from '@material-ui/core';
import { Styles } from './Styles';

const useStyles = Styles;

export default function Loading() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <Box className={classes.loading}>
        <CircularProgress
          className={classes.loadingProgress}
          disableShrink
          color="secondary"
          size={20}
        />{' '}
        Aguarde...
      </Box>
    </Backdrop>
  );
}
