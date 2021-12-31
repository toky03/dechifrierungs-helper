const CELL_SIZE = 30;
const GRID_COLOR = '#CCCCCC';
const DEAD_COLOR = '#FFFFFF';
const ALIVE_COLOR = '#000000';
const WIDTH_HEIGHT = 8;

export const drawGrid = (ctx, width, height) => {
  if (!width && !height) {
    width = WIDTH_HEIGHT;
    height = WIDTH_HEIGHT;
  }
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  for (let i = 0; i <= width; i += 1) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }

  for (let j = 0; j <= height; j += 1) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
  }

  ctx.stroke();
};

export function calculateCell(xPosition, yPosition) {
  return {
    x: Math.floor((xPosition / (WIDTH_HEIGHT * CELL_SIZE)) * WIDTH_HEIGHT) + 1,
    y: Math.floor((yPosition / (WIDTH_HEIGHT * CELL_SIZE)) * WIDTH_HEIGHT) + 1
  };
}

export function initCanvas(canvas) {
  canvas.width = (CELL_SIZE + 1) * WIDTH_HEIGHT + 1;
  canvas.height = (CELL_SIZE + 1) * WIDTH_HEIGHT + 1;
}

const getIndex = (row, column) => row * WIDTH_HEIGHT + column;

export async function init(canvas, initialCells) {
  const { Universe, Cell } = await import('wasm-game-of-life');
  const wasmPromise = await import('wasm-game-of-life/wasm_game_of_life_bg.wasm');
  const wasm = await wasmPromise;

  const universe = Universe.new(WIDTH_HEIGHT, WIDTH_HEIGHT, initialCells);
  const width = universe.width();
  const height = universe.height();

  initCanvas(canvas);

  const ctx = canvas.getContext('2d');

  const renderLoop = () => {
    universe.tick();
    drawGrid(ctx, width, height);
    drawCells();

    requestAnimationFrame(renderLoop);
  };

  const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(wasm.memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row += 1) {
      for (let col = 0; col < width; col += 1) {
        const idx = getIndex(row, col);

        ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

        ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE);
      }
    }
    ctx.stroke();
  };

  drawGrid(ctx, width, height);
  drawCells();
  requestAnimationFrame(renderLoop);
}

export function drawCellsFromArray(ctx, cells) {
  ctx.beginPath();

  for (let row = 0; row < WIDTH_HEIGHT; row += 1) {
    for (let col = 0; col < WIDTH_HEIGHT; col += 1) {
      const idx = getIndex(row, col);

      ctx.fillStyle = cells[idx] === 0 ? DEAD_COLOR : ALIVE_COLOR;

      ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE);
    }
  }
  ctx.stroke();
}
