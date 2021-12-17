// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import { useState } from 'react';
import Page from '../components/Page';
import { KeyPairs, CodedText, LetterDistribution, EncodedText } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const encodedText =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n' +
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,';
  const [key, setKey] = useState(null);

  const changeKeyPair = (keyPair) => {
    setKey(keyPair);
  };
  return (
    <Page title="Verschlüsselungshelfer">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hallo Codecknackers</Typography>
          <Typography variant="h7">
            Hier habt ihr einige kleine Hilfestellungen um den Code zu knacken. Beachtet auch die
            Verteilung der Buchstaben, die könnten eventuell hilfreich sein{' '}
            <span role="img" aria-label="twinker smily">
              😉
            </span>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <CodedText codedText={encodedText} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <KeyPairs setKeyPairs={(keyPair) => changeKeyPair(keyPair)} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <EncodedText codedText={encodedText} schluessel={key} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <LetterDistribution text={encodedText} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
