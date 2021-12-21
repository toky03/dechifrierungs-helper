// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import { useState } from 'react';
import Page from '../components/Page';
import { KeyPairs, CodedText, LetterDistribution, EncodedText } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const encodedText =
    'Poffh rgvobbes aosr pexrfdkpe Axougfoudhs rgb exlhfaxedkpes Esuvkpfgevvefs tdevev Khtev. Tolgex expofueu dpx vepx wdef Onnfogv 👏 gst tdeve zfedse Aevkpdkpue ofv Mefhpsgsa: „Tex Mxecdu dvu edse Zouovuxhnpe!“, uhmue tex Yedpsokpuvboss.\n' +
    '\n' +
    '„Yoxgb?“, lxoaue tov xhusovdae Xesudex Xgthfl.\n' +
    '„Mdvpex pouue dkp thkp dbbex vkphuudvkpes Vdsafe-Bofu-Ypdvzi ds bedseb Aomesvokz. Jeuru dvu tex Dbnhxu wdef rg zhbnfdrdexu gst uegex aeyhxtes. Topex bgvv dkp jeuru dxdvkpes vkpeszes. Dxfost dvu jo yeduexpds ds tex EG. Omex tex dvu sdkpu vh mezossu.“\n' +
    ' „Tex ydxt jo ogkp ostexv aevkpxdemes, bdu e“, voaue Xgthfl. Sokptxgekzfdkp lgeaue ex pdsrg: „Dxdvkpex Ypdvzei bdu e dvu omex sdkpu vkpfekpuex ofv vkphuudvkpex Ypdvzi hpse e. Vhffues tde Fegue sdkpu lxhp veds, tovv vde gemexpognu yov zxdeaes?“\n' +
    '\n' +
    'Tex Yedpsokpuvboss fokpue. „Jo, to povu tg xekpu. Toss vkpesze dkp emes Ypdvzei bdu e. Offextdsav phlle dkp, tovv tde Vkphuues moft gsompoesada yextes gst ofv vhgwexoesex Vuoou ds tde EG rgxgekzzepxes. Toss zfonnu ev ydetex mevvex bdu teb vkphuudvkpes Ypdvzi.“\n' +
    'Tov Xesudex vop vzenudvkp txeds. „Dkp afogme zogb, tovv Vkphuufost ds omvepmoxex Redu gsompoesada ydxt. Fhsths yoexe toaeaes, omex ogkp tde EG, yedf toss wdefe ostexe Xeadhses tovvefme lhxtexs ygextes: Lfostexs, Zouofhsdes, Moiexs –“ „Okp tg Vkpxekz“, esulgpx ev teb Yedpsokpuvboss, „toss mezoebe dkp Vuxevv med tex Mevkpollgsa whs moixdvkpeb Mdex. Ds lxgepexes Jopxrepsues yox ev edslokpex, ofv dkp sgx Vndefvokpes lgex Zdstex wexuedfes bgvvue. Jeuru yhffes ogkp tde Exyokpveses mevkpeszu yextes, gst ryox hlu bdu Ofzhphfdvkpeb.“\n' +
    '„Gb ogl tes dxdvkpes Ypdvzei rgxgekzrgzhbbes“, voaue Xgthfl, „tex dvu ydxzfdkp aesog vh agu yde tex vkphuudvkpe Ypdvzi. Tes zossvu tg mexgpdau vkpeszes. Wdeffedkpu yhffes tde Fegue moft aox zedses ostexes bepx pomes.“ „So, yess tg bedsvu…“ Tex Yedpsokpuvboss yhffue tov Upebo aexote ompozes, ofv dpb eds axogvfdkpex Wextokpu zob. Ex wexvgkpue dps rg wextxoesaes, yov dpb jethkp sdkpu aefosa.\n' +
    '„Xgthfl“, lxoaue ex vkpfdevvfdkp whffex mosaex Opsgsa, „yhpex yedvu tg vh wdef gemex ofzhphfdvkpe Aeuxoesze? Dkp tokpue dbbex, tedse xhue Sove ved osaemhxes… omex zeds ostexev Xesudex pou edse… ydxt beds Vkpfduues euyo esuaeaes offex dsuexaofozudvkpes Wexzepxvxeaefs whs edseb VOEGLEX aerhaes?!?“\n' +
    '\n' +
    'Qgeffe: puunv://yyy.zgxraevkpdkpues-vuhxdev.te/u_3354.ovnc';
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
