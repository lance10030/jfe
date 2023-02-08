import React, { useState } from 'react';
import {
    Box,
} from '@mui/material';
import styles from './index.module.scss'
import { LinkUrls } from 'utils';


const LinkCard = () => {
    return (
        <Box className={styles.box}>
            <Box className={styles.card} sx={{ mr: { xs: '0', md: '40px' } }}>
                <span className={styles.cardTitle}>
                    Become a Maintainer
                </span>
                <Box className={styles.content} sx={{ mt: { md: '16px', xs: '12px' }, mb: { md: '24px', xs: '18px' } }}>
                    Join forces to secure the network by running a decentralized infrastructure. Learn about operating a maintainer node.
                </Box>
                <Box className={styles.btn} onClick={() => {
                    window.open(LinkUrls.guide)
                }}>
                    <a>Get started</a>
                </Box>
            </Box>
            {/* <Box className={styles.card} bgcolor='white'>
                <span className={styles.cardTitle}>
                    Token Ecosystem
                </span>
                <Box className={styles.content} sx={{ mt: { md: '16px', xs: '12px' }, mb: { md: '24px', xs: '32px' } }}>
                   Learn the JAZ network token ecosystem, participate in node mining, and get mining rewards.
                </Box>
                <Box className={styles.btn} style={{ background: '#FFFC04' }} >
                    <a href='http://telemetry.test.nftgaga.com:3000/' target='__blank'> Get started</a>
                </Box>
            </Box> */}
        </Box>
    )
}

export default LinkCard;