import {
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getCustomerById } from '../../../../lib/api/customers';
import LayoutWithMenu from '../../layout/LayoutWithMenu/LayoutWithMenu';
import Loading from '../../screen/Loading/Loading';
import { Styles } from './Styles';

const useStyles = Styles;

interface IFormData {
  name?: string;
  email?: string;
}

export default function FormCustomer() {
  const classes = useStyles();
  const [title, setTitle] = useState('Novo Cliente');
  const router = useRouter();
  const { id } = router.query;

  const initialValues: IFormData = {
    name: '',
    email: '',
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Obrigatório')
      .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        formik.setSubmitting(false);
      }, 3000);
    },
  });

  useEffect(() => {
    if (id) {
      getCustomerById(Number(id)).then((row) => {
        setTitle(`Editando o cliente: ${row.name}`);
        formik.setValues({
          email: row.email,
          name: row.name,
        });
      });
    }
  }, [id]);

  return (
    <LayoutWithMenu>
      <Container>
        <div className={classes.toolbar}>
          <Link href="/customers" passHref>
            <IconButton aria-label="Voltar">
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
        </div>

        <Paper className={classes.form} elevation={3}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Button
              className={classes.submit}
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
            >
              Salvar
            </Button>
            {formik.isSubmitting && <Loading />}
          </form>
        </Paper>
      </Container>
    </LayoutWithMenu>
  );
}
