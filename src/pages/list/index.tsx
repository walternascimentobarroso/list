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
        <Paper elevation={3}>
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
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                    >
                      Remover
                    </Button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Paper>

        <Paper elevation={3} square>
          Total
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
