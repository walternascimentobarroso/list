import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MailIcon from '@material-ui/icons/Mail';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import * as Yup from 'yup';
import CopyrightComponent from '../../../components/screen/Copyright/Copyright';
import Loading from '../../../components/screen/Loading/Loading';
import { Styles } from './Styles';

const useStyles = Styles;

interface IFormData {
  email?: string;
}

export default function CreateAccountPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    email: '',
  };

  const formSchema = Yup.object().shape({
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

  return (
    <div className={classes.root}>
      <Paper className={classes.form} elevation={3}>
        <Box textAlign="center">
          <Typography component="h3" variant="h5">
            Esqueceu sua senha?
          </Typography>
        </Box>

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="Seu e-mail"
            name="email"
            autoComplete="email"
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

          <Button
            className={classes.submit}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Esqueci a minha senha
          </Button>
          {formik.isSubmitting && <Loading />}
        </form>

        <Divider className={classes.divider} variant="fullWidth" />

        <Box mt={1} textAlign="center">
          <NextLink href="/auth/login" passHref>
            <Button color="primary" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </NextLink>
        </Box>

        <CopyrightComponent />
      </Paper>
    </div>
  );
}
