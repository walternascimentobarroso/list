import { Fab, Tooltip, useScrollTrigger, Zoom } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Styles } from './Styles';

const useStyles = Styles;

function ScrollTop(props) {
  const { children, onClick } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <Zoom in={!trigger}>
      <div onClick={onClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function ZoomFab(props) {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <ScrollTop onClick={onClick}>
      <Tooltip title="Adicionar" aria-label="add" arrow>
        <Fab color="secondary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
    </ScrollTop>
  );
}
