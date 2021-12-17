import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
import { useEffect, useState } from 'react';
//
// ----------------------------------------------------------------------
const findKey = (letter, key) => {
  const letterUpperCase = letter.toUpperCase();
  const isUpper = letter === letterUpperCase;
  const correspondingVal = key.get(letterUpperCase);
  if (correspondingVal) {
    return isUpper ? correspondingVal : correspondingVal.toLowerCase();
  }
  return letter;
};

const encodeText = (codedText, key) =>
  codedText
    .split('')
    .map((letter) => findKey(letter, key))
    .join('');
export default function CodedText({ codedText, schluessel }) {
  const [encoded, setEncoded] = useState('');

  useEffect(() => {
    if (schluessel) {
      const en = codedText
        .split('')
        .map((letter) => encodeText(letter, schluessel))
        .join('');
      setEncoded(en);
    } else {
      setEncoded(codedText);
    }
  }, [codedText, schluessel]);

  return (
    <Card>
      <CardHeader title="Entschlüsselter Text" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <div style={{ whiteSpace: 'pre-line' }}>{encoded}</div>
      </Box>
    </Card>
  );
}
