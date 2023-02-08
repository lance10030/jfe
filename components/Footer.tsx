import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import { Fragment } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import { pxTovw } from 'utils';

const LINKS = [
  // {
  //   path: '/assets/icon_medium.svg',
  //   href: 'https://radiocaca.medium.com/'
  // },
  {
    path: '/assets/icon_twitter.svg',
    href: 'https://twitter.com/JazChain'
  },
  // {
  //   path: '/assets/icon_tg.svg',
  //   href: 'https://t.me/RadioCaca'
  // }, {
  //   path: '/assets/icon_discord.svg',
  //   href: 'https://discord.com/invite/34qREVgv3h'
  // }
]

const Bar = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {
        !isMobile && <Box className={styles.footer}>
          <img src="/assets/logo.svg" alt="logo" className={styles.img} />
          <Box sx={{ display: 'block' }}>
            JAZ 2022, All Rights Reserved
          </Box>
          <Box className={styles.links}>
            {
              LINKS.map(item => (
                <a href={item.href} key={item.href} target='__blank'>
                  <img src={item.path} className={styles.linkImg} alt="href" />
                </a>
              ))
            }
          </Box>
        </Box>
      }
      {
        isMobile && <Box className={styles.footer}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={pxTovw(33)}>
            <img src="/assets/logo.svg" alt="logo" className={styles.img} />
            <Box className={styles.links}>
              {
                LINKS.map(item => (
                  <a href={item.href} key={item.href} target='__blank'>
                    <img src={item.path} className={styles.linkImg} alt="href" />
                  </a>
                ))
              }
            </Box>
          </Box>
          <Box>
            JAZ 2022, All Rights Reserved
          </Box>
        </Box>
      }
    </>

  )
}

const Footer = () => {
  return (
    <Fragment>
      <Bar />
    </Fragment>

  );
};

export default Footer;