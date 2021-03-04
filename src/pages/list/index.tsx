import { makeStyles } from '@material-ui/core/styles';
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
  Fab,
  Grid,
  Tooltip,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import LayoutWithMenu from '../../components/layout/LayoutWithMenu/LayoutWithMenu';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
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
}));
export default function CheckboxListSecondary() {
  const classes = useStyles();

  return (
    <LayoutWithMenu>
      <Container>
        {[0, 1, 2, 3].map((value) => {
          return (
            <Accordion key={value}>
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
                <Typography className={classes.heading}>Sal</Typography>
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

      <Tooltip title="Adicionar" aria-label="add" arrow>
        <Fab color="secondary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
    </LayoutWithMenu>
  );
}
