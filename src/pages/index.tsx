import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import LayoutWithMenu from '../components/layout/LayoutWithMenu/LayoutWithMenu';

export default function Home() {
  return (
    <LayoutWithMenu>
      <Container>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Lista de Compras
            </Typography>
            <Typography variant="h5" component="h2">
              WLIST
            </Typography>
            <Typography variant="body2" component="p">
              Crie sua lista de compras, e nunca mais esqueça de comprar o
              necessario
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/list" passHref>
              <Button variant="outlined" size="small" color="primary">
                VER
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </LayoutWithMenu>
  );
}
