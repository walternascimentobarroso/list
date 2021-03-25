import { useState, forwardRef } from 'react';
import {
  Button,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import ImageUpload from '../../screen/ImageUpload/ImageUpload';

import { Styles } from './Styles';

const useStyles = Styles;

const Transition = forwardRef<unknown, TransitionProps>((props, ref) => <Slide direction="up" ref={ref} {...props} />);


export default function FormList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const {
    info: { show, title },
    onClose,
  } = props;

  const [unit, setUnit] = useState('');

  const handleChange = (event) => setUnit(event.target.value);

  return (
    <div>
      <Dialog onClose={onClose} open={show} fullScreen={fullScreen} TransitionComponent={Transition}>
        <MuiDialogTitle>
          <Typography>{title}</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <TextField id="description" label="Descrição" variant="outlined" />
          </FormControl>

          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <ImageUpload />
          </FormControl>

          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel id="unit">Unidade de Medida</InputLabel>
            <Select
              label="Unidade de Medida"
              id="unit"
              value={unit}
              onChange={handleChange}
              renderValue={(value) => `⚠️  - ${value}`}
            >
              <MenuItem disabled>Unidade de Medida</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel htmlFor="value">Valor</InputLabel>
            <OutlinedInput
              id="value"
              type="number"
              startAdornment={
                <InputAdornment position="start"> R$ </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button autoFocus onClick={onClose} color="secondary">
            Salvar
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
