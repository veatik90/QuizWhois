import { FC } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GameCatalog: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ marginTop: 1 }}>
        Ближайшие запланированные игры
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'primary.contrastText' }}>
              <CardMedia component="img" image="https://source.unsplash.com/random" alt="random" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>This is a media card. You can use this section to describe the content.</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  Зарегистрироваться
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const GameCatalogPage = withTabs(GameCatalog);
