// material
import {
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

// ----------------------------------------------------------------------

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function KeyPairs({ setKeyPairs }) {
  const [avLetters, setAvLetters] = useState(LETTERS);
  const [keyPair, setKeyPair] = useState(new Map());

  const handleChange = (keyletter, event) => {
    const letterChoosen = event.target.value;
    const pairClone = new Map(keyPair);
    pairClone.set(keyletter, letterChoosen);
    setKeyPair(pairClone);
    setKeyPairs(pairClone);
  };

  return (
    <Card>
      <CardHeader title="Buchstabenschlüssel" />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}
      >
        {LETTERS.map((letter) => (
          <FormControl key={letter} style={{ margin: '5px' }}>
            <InputLabel>{letter}</InputLabel>
            <Select
              value={keyPair.get(letter) ? keyPair.get(letter) : letter}
              label={letter}
              onChange={(event) => handleChange(letter, event)}
            >
              {avLetters.map((avLetter) => (
                <MenuItem key={avLetter} value={avLetter}>
                  <Typography style={{ fontFamily: 'monospace' }}>
                    {letter} <FiArrowRight /> {avLetter}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>
    </Card>
  );
}
