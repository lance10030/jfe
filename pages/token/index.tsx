import {
  Box,
  Typography
} from '@mui/material';
import styles from 'styles/token.module.scss'
import Layout from 'components/Layout';
import { ReactNode } from 'react';
import Functions from 'components/token/Functions';
import Pie from 'components/token/PieChart';

const Token = () => {
  return (
    <div className='container'>
      <Box className={styles.section1}>
        <Box className={styles.content}>
          <p>JAZ Token</p>
          <p className={styles.text}>$JAZ is the chain-native token of Jaz network.</p>
        </Box>
      </Box>
      <Box className={styles.section2}>
        <Functions />
        <Box className={styles.distribution}>
          <Typography className='subTitle' >
            Token distribution
          </Typography>
          <Typography variant='body1' sx={{ mt: { sm: '24px', xs: '8px' } }} className='normalText' >
            The initial total circulation of JAZ is 1 billion, and the token distribution will be completed after the main network of JAZ network is launched.
          </Typography>
          <Pie />
        </Box>

      </Box>
    </div>
  )
}
Token.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Token
