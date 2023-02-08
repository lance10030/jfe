import { Box } from '@mui/material';
import styles from './Footer.module.scss';

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

const Bar = () => (
  <Box className={styles.links}>
    {
      LINKS.map(item => (
        <a href={item.href} key={item.href} target='__blank'>
          <img src={item.path} className={styles.linkImg} alt="href" />
        </a>
      ))
    }
  </Box>
)

export default Bar;