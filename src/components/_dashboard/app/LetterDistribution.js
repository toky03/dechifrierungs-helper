import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { useEffect, useState } from 'react';
import { fPercent } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

const LETTER_REGEX = /[A-Z]/;

// ----------------------------------------------------------------------
export default function LetterDistribution({ text }) {
  const [categories, setCategories] = useState([]);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const m = new Map();
    text.split('').forEach(
      (letter) => {
        const l = letter.toUpperCase();
        if (l.match(LETTER_REGEX)) {
          const curVal = m.get(l) ? m.get(l) : 0;
          m.set(l, curVal + 1);
        }
      },
      [text]
    );
    const sortedMap = new Map([...m.entries()].sort((a, b) => b[1] - a[1]));
    const vals = Array.from(sortedMap.values());
    const sumVals = vals.reduce((a, b) => a + b, 0);
    const percentages = vals.map((val) => (100 / sumVals) * val);
    setCategories(Array.from(sortedMap.keys()));
    setKeys(percentages);
  }, [text]);
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fPercent(seriesName),
        title: {
          formatter: (seriesName, { dataPointIndex }) =>
            `Buchstabe: ${seriesName.split(',')[dataPointIndex]}, Anteil:`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '20%', borderRadius: 2 }
    },
    xaxis: {
      categories
    }
  });

  return (
    <Card>
      <CardHeader title="Buchstaben Verteilung" subheader="in % am gesamt Text" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={[{ data: keys, name: categories }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
