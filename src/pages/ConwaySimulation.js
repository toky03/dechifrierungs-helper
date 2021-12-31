import { useRef, useEffect } from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import { init } from '../utils/bootstrapConvay';

export default function ConwaySimulation({ initialCells, widthHeigth }) {
  const canvasRef = useRef();

  useEffect(() => {
    async function start() {
      if (canvasRef && initialCells && widthHeigth) {
        await init(canvasRef.current, initialCells, widthHeigth);
      }
    }
    start();
  }, [canvasRef, initialCells, widthHeigth]);

  return (
    <Card>
      <CardHeader title="Simulation Spiel des Lebens" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <canvas ref={canvasRef} />
      </Box>
    </Card>
  );
}
