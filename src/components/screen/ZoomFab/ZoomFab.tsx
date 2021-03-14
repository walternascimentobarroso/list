import { Fab, Tooltip, useScrollTrigger, Zoom } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Styles } from './Styles';

const useStyles = Styles;

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();


  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={!trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function ZoomFab(props) {
  const classes = useStyles();

  return (
    <ScrollTop>
      <Tooltip title="Adicionar" aria-label="add" arrow>
        <Fab color="secondary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
    </ScrollTop>
  );
}
