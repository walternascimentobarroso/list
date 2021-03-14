import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: '2rem',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    divider: {
      border: `1px solid ${theme.palette.divider}`,
      margin: '0 1rem',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '66.66%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
    },
  })
);
