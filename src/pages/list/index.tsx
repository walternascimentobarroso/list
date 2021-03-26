import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  ListItemAvatar,
  Avatar,
  Paper,
  Container,
  Grid,
  Tooltip,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import LayoutWithMenu from '../../components/layout/LayoutWithMenu/LayoutWithMenu';
import ZoomFab from '../../components/screen/ZoomFab/ZoomFab';
import FormList from '../../components/pages/FormList/FormList';
import SnackbarCustom from '../../components/screen/SnackbarCustom/SnackbarCustom';
import ConfirmationDialog from '../../components/screen/ConfirmationDialog/ConfirmationDialog';

import { Styles } from './Styles';

const useStyles = Styles;

export default function CheckboxListSecondary() {
  const classes = useStyles();

  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: '',
  });
  const [snackbarInfo, setSnackbarInfo] = useState({
    show: false,
    message: '',
    type: 'success',
  });
  const [deleteOptions, setDeleteOptions] = useState<{
    show: boolean;
    itemId?: number;
    itemDescription?: string;
  }>({ show: false });

  const handleCloseMessage = () =>
    setSnackbarInfo({ ...snackbarInfo, show: false });

  const handleCreateList = () =>
    setModalInfo({ show: true, title: 'Novo Item' });

  const handleDelete = (item: any) => {
    setDeleteOptions({
      show: true,
      itemId: item.id,
      itemDescription: item.name,
    });
  };

  const handleDeleteCallBack = (value: string) => {
    setDeleteOptions({ show: false, itemId: null, itemDescription: null });

    if (value === 'ok') {
      // deleta
      setSnackbarInfo({
        show: true,
        message: 'Item excluído com sucesso',
        type: 'success',
      });
    }
  };
  const closeCreateList = () => setModalInfo({ ...modalInfo, show: false });
  const handleEditList = () =>
    setModalInfo({ show: true, title: 'Editar Item' });
  return (
    <LayoutWithMenu>
      <Container>
        {[0, 1, 2, 3].map((value) => {
          return (
            <Accordion key={value} className={classes.checkedBackground}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls={`additional-${value}-content`}
                id={`additional-${value}-header`}
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label=""
                />
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <Typography className={`${classes.heading} ${classes.checked}`}>Sal</Typography>
                <Typography className={classes.secondaryHeading}>
                  3 UN
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Typography className={classes.secondaryHeading}>
                  R$ 5,99
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  <Tooltip title="Editar" aria-label="edit" arrow>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EditIcon />}
                      className={classes.button}
                      onClick={handleEditList}
                    >
                      Editar
                    </Button>
                  </Tooltip>
                  <Tooltip title="Remover" aria-label="delete" arrow>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      className={classes.button}
                      onClick={() => handleDelete({ id: '1', name: 'lol' })}
                    >
                      Remover
                    </Button>
                  </Tooltip>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}

        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography className={classes.secondaryHeading}>
                Total
              </Typography>
              <Typography className={classes.heading}>R$ 5,99</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.secondaryHeading}>
                Marcados
              </Typography>
              <Typography className={classes.heading}>R$ 5,99</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ZoomFab onClick={handleCreateList} />
      <FormList info={modalInfo} onClose={closeCreateList} />
      <ConfirmationDialog
        id={`delete-${deleteOptions.itemId}`}
        title="Excluir"
        confirmButtonText="Excluir"
        keepMounted
        open={deleteOptions.show}
        onClose={handleDeleteCallBack}
      >
        Confirma a exclusão do item{' '}
        <strong>{deleteOptions.itemDescription}</strong>
      </ConfirmationDialog>
      <SnackbarCustom info={snackbarInfo} onClose={handleCloseMessage} />
    </LayoutWithMenu>
  );
}
