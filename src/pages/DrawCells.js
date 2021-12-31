import { useRef, useEffect, useState } from 'react';
import { Card, CardHeader, Box, CardActions, Button } from '@mui/material';
import { drawGrid, calculateCell, initCanvas, drawCellsFromArray } from '../utils/bootstrapConvay';

export default function DrawCells({ callbackFn, widthHeigth }) {
  const [cells, setCells] = useState(new Uint32Array(widthHeigth * widthHeigth));
  const [ctx, setCtx] = useState(null);

  const canvasRef = useRef();

  useEffect(() => {
    const cellsCopy = cells.map(() => 0);

    setCells(cellsCopy);
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');
    setCtx(ctx);
    initCanvas(canvas);
    drawGrid(ctx);
    drawCellsFromArray(ctx, cellsCopy);
  }, [canvasRef, callbackFn, widthHeigth]);

  function clickEvent(event) {
    const { x, y } = calculateCell(event.offsetX, event.offsetY);
    const cellIndex = x - 1 + (y - 1) * widthHeigth;
    const copyCells = cells.map((val, index) => {
      if (index === cellIndex) {
        return val === 1 ? 0 : 1;
      }
      return val;
    });

    setCells(copyCells);
    drawCellsFromArray(ctx, copyCells);
  }

  function startSimulation() {
    callbackFn(cells);
    drawCellsFromArray(ctx, cells);
  }

  function clear() {
    setCells(new Uint32Array(widthHeigth * widthHeigth).map(() => 0));
    drawCellsFromArray(ctx, cells);
  }

  return (
    <Card>
      <CardHeader
        title="Start Input"
        subheader="gib hier die Form ein, die du ausprobieren möchtest"
      />
      <Box sx={{ mx: 3 }} dir="ltr">
        <canvas ref={canvasRef} onMouseUp={(e) => clickEvent(e.nativeEvent)} />
      </Box>
      <CardActions>
        <Button onClick={() => startSimulation()}>Simulation starten</Button>
        <Button onClick={() => clear()}>Löschen</Button>
      </CardActions>
    </Card>
  );
}
