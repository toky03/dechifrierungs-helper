import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
// ----------------------------------------------------------------------

export default function CodedText({ codedText }) {
  return (
    <Card>
      <CardHeader title="Verschlüsselter Text" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <div style={{ whiteSpace: 'pre-line' }}>{codedText}</div>
      </Box>
    </Card>
  );
}
