import { Box, Typography, Grid } from '@mui/material';
import styles from './index.module.scss';


const FunctionConfig = [
  {
    img: '/assets/fee.svg',
    title: 'Transaction fees',
    text: 'Pay transaction fees for smart contract execution.'
  }, {
    img: '/assets/NFT.svg',
    title: 'Buy NFT',
    text: 'Buy NFTs on Jaz network'
  }, {
    img: '/assets/governance.svg',
    title: 'Governance',
    text: 'Participate in community event voting and democratic proposal voting.'
  }, {
    img: '/assets/node.svg',
    title: 'Node Incentivisation',
    text: 'Incentivizes network nodes to monitor and relay messages to Jaz network'
  },
]

const Functions = () => {
  return (
    <Box className={styles.functions}>
      <Typography className='subTitle' style={{ color: 'white' }} mb={'50px'}>Token function</Typography>
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