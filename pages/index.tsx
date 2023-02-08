import {
  Box,
  Typography
} from '@mui/material';
import styles from '../styles/Home.module.scss'
import Layout from 'components/Layout';
import Statistic from 'components/Home/Statistic';
import LinkCard from 'components/Home/LinkCard';
import { ReactNode } from 'react';
import { pxTovw } from 'utils';
import useIsMobile from 'utils/hooks/useIsMobile';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <div className='container'>
      <Box className={styles.section1}>
        <Box className={styles.content}>
          <p>Hello,I&lsquo;m JAZ</p>
          <p>The web3 infrastructure of USM</p>
        </Box>
      </Box>
      <Statistic />
      <Box className={styles.section2}>
        <Box className={styles.block} pt={{ xs: pxTovw(37), md: '8.33vw' }} pb={{ xs: pxTovw(23), md: '6.33vw' }}>
          <Box className={styles.text}>
            <Typography className={styles.title}>
              NFT Protocol
            </Typography>
            <Typography className={styles.intro}>
              JAZ is compatible with primary NFT protocols, such as ERC721, ERC1155 etc., as well as RMRK very soon.
            </Typography>
          </Box>
          <img className={styles.imgLogo} src='/assets/protocol.png' alt="protocol" />
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(44), sm: '12.29vw' }} pb={{ xs: pxTovw(20), sm: '12.8vw' }}>
          {
            isMobile ? <img src="/assets/mobile/black_mobile_bg.png" className={styles.bg} alt="bg" /> : <img src="/assets/black_bg.png" className={styles.bg} alt="bg" />
          }
          {
            !isMobile && <img className={styles.imgLogo} src='/assets/interoperate.png' style={{ borderColor: 'white' }} alt="protocol" />
          }
          <Box className={styles.text}>
            <Typography className={styles.title} style={{ color: 'white' }}>
              NFT Interoperability
            </Typography>
            <Typography className={styles.intro} style={{ color: 'white' }}>
              JAZ is a CONVENIENT protocol for all. We support cross-chain transactions of multiple protocol tokens.
            </Typography>
          </Box>
          {
            isMobile && <img className={styles.imgLogo} src='/assets/interoperate.png' style={{ borderColor: 'white' }} alt="protocol" />
          }
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(30), sm: '11.14vw' }} pb={{ xs: pxTovw(32), sm: '6.77vw' }}>
          <Box className={styles.text}>
            <Typography className={styles.title}>
              NFT Hybrid Exchange
            </Typography>
            <Typography className={styles.intro}>
              JAZ supports on-chain and off-chain transactions. We have a user-friendly hybrid exchange architecture for all, including OpenPFP and USM.
            </Typography>
          </Box>
          <img className={styles.imgLogo} src='/assets/hybrid.png' alt="protocol" />
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(61), sm: '15.16vw' }} pb={{ xs: pxTovw(35), sm: '9.9vw' }}>
          {
            isMobile ? <img src="/assets/mobile/yellow_mobile_bg.png" className={styles.bg} alt="bg" /> : <img src="/assets/yellow_bg.png" className={styles.bg} alt="bg" />
          }
          {
            !isMobile && <img className={styles.imgLogo} src='/assets/ether.png' alt="protocol" />
          }
          <Box className={styles.text}>
            <Typography className={styles.title} style={{ color: 'black' }}>
              Ethereum Compatibility
            </Typography>
            <Typography className={styles.intro} style={{ color: 'black' }}>
              JAZ is NOW fully compatible with Ethereum smart contracts and implements - ETH Web3 RPC, accounts, keys, subscriptions, logs, and more.
            </Typography>
          </Box>
          {
            isMobile && <img className={styles.imgLogo} src='/assets/ether.png' alt="protocol" />
          }
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(38), sm: '6.25vw' }} pb={{ xs: pxTovw(38), sm: '9.1vw' }}>
          <Box className={styles.text}>
            <Typography className={styles.title}>
              Network Security
            </Typography>
            <Typography className={styles.intro}>
              JAZ is SAFE. We have 10,00 nodes for network consensus, plus 225,00 nodes to maintain ledger data for user data security.
            </Typography>
          </Box>
          <img className={styles.imgLogo} src='/assets/secure.png' alt="protocol" />
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(50), sm: '11.72vw' }} pb={{ xs: pxTovw(23), sm: '11.72vw' }}>
          {
            isMobile ? <img src="/assets/mobile/black_mobile_bg.png" className={styles.bg} alt="bg" /> : <img src="/assets/black_bg.png" className={styles.bg} alt="bg" />
          }
          {
            !isMobile && <img className={styles.imgLogo} style={{ borderColor: 'white' }} src='/assets/dao.png' alt="protocol" />
          }
          <Box className={styles.text}>
            <Typography className={styles.title} style={{ color: 'white' }}>
              DAO Governance
            </Typography>
            <Typography className={styles.intro} style={{ color: 'white' }}>
              JAZ has a well-established governance system allowing token holders the right to participate in governance.
            </Typography>
          </Box>
          {
            isMobile && <img className={styles.imgLogo} style={{ borderColor: 'white' }} src='/assets/dao.png' alt="protocol" />
          }
        </Box>
        <Box className={styles.block} pt={{ xs: pxTovw(67), sm: '15.6vw' }} pb={{ xs: pxTovw(67), sm: '14vw' }}>
          <Box className={styles.text} style={{ margin: 'auto' }}>
            <Typography className={styles.title} textAlign='center'>
              The hub of multi-chain NFTs
            </Typography>
            <Typography className={styles.intro} textAlign='center'>
              NFTs can now be safely extended into metaverses for greater value and functionality with JAZ! We are the bridge for EVM-compatible chains, and we allow NFT to trade between different chains, and through the USM CEX.
            </Typography>
          </Box>
        </Box>
        <LinkCard></LinkCard>
      </Box>
    </div >
  )
}
Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Home
