import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1, 0),
    },
    loadingProgress: {
      marginRight: theme.spacing(1),
    },
  })
);
