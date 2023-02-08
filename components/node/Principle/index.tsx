import { Box, Typography, Grid } from '@mui/material';
import styles from './index.module.scss';


const FunctionConfig = [
  {
    img: '/assets/icon_predictable.svg',
    title: 'Predictable',
    text: 'There is a definite release curve, which can clearly know the release amount in any time period'
  }, {
    img: '/assets/icon_sustainable.svg',
    title: 'Sustainable',
    text: 'It can support ecological development for a long time'
  }, {
    img: '/assets/icon_distribution.svg',
    title: 'Fair distribution',
    text: 'The distribution rules are fair and cannot be exploited by attackers'
  }, {
    img: '/assets/icon_performance.svg',
    title: 'High performance',
    text: 'The amount of calculation on the chain is small, which basically has no impact on the performance of the chain'
  },
]

const Functions = () => {
  return (
    <Box className={styles.functions}>
      <Typography className='subTitle' style={{ color: 'white' }} mb={'50px'}>Mining reward principle</Typography>
      <Grid container spacing={2} justifyContent='space-between' rowSpacing={'60px'}>
        {
          FunctionConfig.map(item => (
            <Grid item sm={5.5} key={item.title} className={styles.item} xs={12}>
              <img src={item.img} alt="logo" />
              <Typography className={styles.title} variant='h3'>{item.title}</Typography>
              <Typography className={styles.tip} variant='body1'>{item.text}</Typography>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};

export default Functions;