import { Box, Typography, Grid } from '@mui/material';
import styles from './index.module.scss';


const FunctionConfig = [
  {
    title: 'Founder Node',
    text: 'The total supply of the founder nodes is 10,000, and the founder nodes have a higher $JAZ token output than the member nodes. The founder nodes will assume the responsibility of network governance and vote to determine the functional updates and development routes on the network.'
  }, {
    title: 'Member Node',
    text: 'The total supply of member nodes is 90,000, and member nodes can be rewarded with $JAZ tokens for running them.'
  }, {
    title: 'Lease Node',
    text: 'The founder node NFT and the member node NFT can be rented to other users in the form of leasing. The renter needs to pay a certain rent to the lessor, and the renter can obtain the $JAZ tokens produced by the node.'
  }, {
    title: 'Free Node',
    text: 'Can be run by anyone who wants to support ecological security, but there is no $JAZ token reward.'
  },
]

const Functions = () => {
  return (
    <Grid container spacing={2} justifyContent="space-between" className={styles.functions}>
      {
        FunctionConfig.map((item, index) => (
          <Grid item sm={5.5} key={item.title} mb='74px' className={styles.item} xs={12}>
            <Box className={styles.num}>{index + 1}</Box>
            <Typography className={styles.title} variant='h3'>{item.title}</Typography>
            <Typography className={styles.text} variant='body1'>{item.text}</Typography>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Functions;