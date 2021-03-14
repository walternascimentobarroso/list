import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import CopyrightComponent from '../../../components/screen/Copyright/Copyright';
import Loading from '../../../components/screen/Loading/Loading';
import { Styles } from './Styles';

const useStyles = Styles;

interface IFormData {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    email: '',
    password: '',
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
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

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.sloganTitle} variant="h3" component="h1">
          Next Boilerplate
        </Typography>
        <Typography variant="h4" component="h2">
          Um slogan aqui
        </Typography>
      </div>
      <Paper className={classes.form} elevation={3}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="Seu e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="Sua senha"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            className={classes.submit}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Entrar
          </Button>
          {formik.isSubmitting && <Loading />}
        </form>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Link href="/auth/forgot-password" passHref>
              <Button variant="text" fullWidth={true}>
                Esqueceu a senha?
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="/auth/create-account" passHref>
              <Button variant="text" fullWidth={true}>
                Criar uma conta
              </Button>
            </Link>
          </Grid>
        </Grid>
        <CopyrightComponent />
      </Paper>
    </div>
  );
}
