import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';
import { Pack } from './interfaces';
import { PACKS } from './constants';

export const GameCatalog: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [packs, setPacks] = useState<Pack[]>(PACKS);

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ marginTop: 1 }}>
        Ближайшие запланированные игры
      </Typography>
      <Grid container spacing={4}>
        {packs.map((pack) => (
          <Grid item key={pack.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'primary.contrastText' }}>
              <CardMedia component="img" image="https://source.unsplash.com/random" alt="random" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pack.name}
                </Typography>
                <Typography>{pack.description}</Typography>
              </CardContent>
              <CardActions>
                <Button component={NavLink} to={`/game/${pack.id}`} size="small" variant="outlined">
                  Начать игру
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
