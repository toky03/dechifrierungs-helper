import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Page from '../components/Page';
import ConwaySimulation from './ConwaySimulation';
import DrawCells from './DrawCells';

const WIDTH_HEIGTH = 8;

export default function Conway() {
  const [cells, setInitialCells] = useState(null);

  useEffect(() => {
    const initialCells = new Uint32Array(WIDTH_HEIGTH * WIDTH_HEIGTH);
    for (let i = 0; i < WIDTH_HEIGTH * WIDTH_HEIGTH; i += 1) {
      if (i % 2 === 0 || i % 7 === 0) {
        initialCells[i] = 1;
      } else {
        initialCells[i] = 0;
      }
    }
    setInitialCells(initialCells);
  }, []);

  function changeInitialCells(cells) {
    setInitialCells(cells);
  }

  return (
    <Page title="Spiel des Lebens Simulator">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Speil des Lebens Silvester Challenge Hilfestellung</Typography>
          <Typography variant="h7">
            Dies ist eine Hilfestellung um die verschiedenen Konstellationen ausprobieren zu können.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <DrawCells
              widthHeigth={WIDTH_HEIGTH}
              callbackFn={(cells) => changeInitialCells(cells)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <ConwaySimulation initialCells={cells} widthHeigth={WIDTH_HEIGTH} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
