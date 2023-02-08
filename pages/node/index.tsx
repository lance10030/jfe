import {
  Box,
  Typography
} from '@mui/material';
import styles from 'styles/node.module.scss'
import Layout from 'components/Layout';
import { ReactNode } from 'react';
import Principle from 'components/node/Principle';
import Ecosystem from 'components/node/Ecosystem';
import Release from 'components/node/Release';

const Token = () => {
  return (
    <div className='container'>
      <Box className={styles.section1}>
        <Box className={styles.content}>
          <p>Node NFT</p>
          <p className={styles.text}>Node NFT is a ticket to participate in Jaz chain mining. Users need to run the Jaz node and bind the node NFT to the node that normally produces blocks to obtain mining rewards.</p>
        </Box>
      </Box>
      <Box className={styles.section2}>
        <Box className={styles.ecosystem}>
          <Typography sx={{ mb: { xs: '20px', sm: '24px' } }} style={{ fontSize: '75px' }} className='subTitle' >
            Node Ecosystem
          </Typography>
          <Typography variant='h2' sx={{ mb: '60px' }} className={styles.text30} width='61.9vw'>
            There are four types of nodes in the Jaz Network, and nodes need to update the version regularly and ensure that they are synchronized to the latest block.
          </Typography>
          <Ecosystem />
        </Box>
        <Box className={styles.guide}>
          <Typography className='subTitle'>How to use node NFT</Typography>
          <Typography className={styles.text}>The chain governance function of Jaz network follows the chain governance mode of some Polkadot.</Typography>
          <Box className={styles.seeMore}>
            See More
          </Box>
        </Box>
        <Box className={styles.mining}>
          <Typography className='subTitle'>Node Mining</Typography>
          <Typography variant='body1' className={styles.text30} style={{ width: '72.8vw', marginTop: '40px' }} >
            40% (400 million) of the initial token allocation of JAZ will be mined and released by miner nodes. The number of miner nodes on the Jaz network is expected to exceed 10,000. The large and stable miner nodes are of great significance to the long-term development of the Jaz netwrok ecosystem.
          </Typography>
        </Box>
        <Principle />
        <Box className={styles.mining}>
          <Typography className='subTitle'>Reward Point</Typography>
          <Typography variant='body1' className={styles.text30} style={{ width: '72.8vw', marginTop: '40px' }} >
            Reward points are the yardstick for calculating node mining rewards. Any node bound to node NFT willget reward points per era, genesis node NFT will get 1200 points per era, member node NFT will get 600 points per era, and the number of points a node will get is determined by the number of bound NFTs. Each era will conduct a mining reward settlement, and the rewards obtained by each node will divide the rewards of the current era according to the proportion of the total reward points of the entire network.
          </Typography>
        </Box>
        {/* <Release /> */}
      </Box>
    </div >
  )
}
Token.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Token
