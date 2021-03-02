import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap-reverse',
      minHeight: '100vh',
      gap: theme.spacing(5),
      padding: theme.spacing(2),
    },
    sloganTitle: {
      marginBottom: theme.spacing(2),
    },
    form: {
      padding: theme.spacing(4),
      maxWidth: '500px',
    },
    submit: {
      marginTop: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(4, 0),
    },
  })
);
