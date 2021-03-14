import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LayoutWithMenu from '../../components/layout/LayoutWithMenu/LayoutWithMenu';
import ConfirmationDialog from '../../components/screen/ConfirmationDialog/ConfirmationDialog';
import SnackbarCustom from '../../components/screen/SnackbarCustom/SnackbarCustom';
import { getCustomers } from '../../../lib/api/customers';
import { Styles } from './Styles';

const useStyles = Styles;

export default function CustomerList() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const [deleteOptions, setDeleteOptions] = useState<{
    show: boolean;
    itemId?: number;
    itemDescription?: string;
  }>({ show: false });

  const [snackbarInfo, setSnackbarInfo] = useState({ show: false, message: '', type: 'success' });
  const handleCloseMessage = () => setSnackbarInfo({ show: false, message: '', type: 'success' });

  const handleDelete = (item: any) => {
    setDeleteOptions({
      show: true,
      itemId: item.id,
      itemDescription: item.name,
    });
  };


  const handleDeleteCallBack = (value: string) => {
    const { itemId } = deleteOptions;
    setDeleteOptions({ show: false, itemId: null, itemDescription: null });

    if (value === 'ok') {
      // deleta
      setSnackbarInfo({ show: true, message: 'Item excluído com sucesso', type: 'success' });
    }
  };

  useEffect(() => {
    getCustomers().then((rowsResult) => setRows(rowsResult));
  }, []);

  return (
    <LayoutWithMenu>
      <div className={classes.toolbar}>
        <div>
          <Typography component="h1" variant="h4">
            Clientes
          </Typography>
        </div>
        <div>
          <Link href="/customers/new" passHref>
            <Tooltip title="Adicionar" aria-label="add" arrow>
              <Button variant="contained" color="primary">
                Novo cliente
              </Button>
            </Tooltip>
          </Link>
        </div>
      </div>

      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="Clientes">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell width="140" align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Link href={`/customers/edit/${row.id}`} passHref>
                    <Tooltip title="Editar" aria-label="edit" arrow>
                      <IconButton aria-label="edit">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Tooltip title="Remover" aria-label="delete" arrow>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(row)}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
