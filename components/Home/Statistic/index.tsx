import React, { Fragment, useEffect, useState } from 'react';
import {
    Box,
    Divider
} from '@mui/material';
import { ethers, utils } from 'ethers';
import styles from './index.module.scss'
import { getConfig, numFormat } from 'utils'
import Abi from 'assets/abi/INodeRegistry.json'

const keys = [
    { name: 'Online Nodes', key: 'onlineNodes', img: '/assets/icon_statistic_1.svg' },
    { name: 'Node NFTs', key: 'nodeNfts', img: '/assets/icon_statistic_2.svg' },
    { name: 'Last Era Points', key: 'lastEraPoints', img: '/assets/icon_statistic_3.svg' },
    { name: 'Reward Pool', key: 'rewardPool', unit: 'JAZ', img: '/assets/icon_statistic_4.svg' },
    { name: 'Claimed Rewards', key: 'claimedReward', unit: 'JAZ', img: '/assets/icon_statistic_5.svg' },
    { name: 'Reward Per Point', key: 'rewardPerPoint', unit: 'JAZ', img: '/assets/icon_statistic_6.svg' }
];
const len = keys.length;

type StatisticData = {
    [key: string]: number | string
    onlineNodes: number
    nodeNfts: number
    lastEraPoints: number
    rewardPool: number
    claimedReward: number
    rewardPerPoint: string
}

const Statistic = () => {
    const [data, setData] = useState<StatisticData | null>(null)

    useEffect(() => {
        const { rpc, address } = getConfig();
        const provider = new ethers.providers.JsonRpcProvider(rpc)
        const abi: any = Abi.abi;
        let contract = new ethers.Contract(address, abi, provider);
        contract.functions.network_details().then(r => {
            console.log(r, 'res')
            setData({
                onlineNodes: r[0].toString(),
                nodeNfts: r[1].toString(),
                lastEraPoints: r[2].toString(),
                rewardPool: Number(utils.formatUnits(r[3].toString(), 18)),
                claimedReward: Number(utils.formatUnits(r[4].toString(), 18)),
                rewardPerPoint: Number(utils.formatUnits(r[5].toString(), 18)).toFixed(2)
            })
        })
    }, [])

    return (
        <Box width={'100vw'} sx={{ overflowX: 'auto' }}>
            <Box className={styles.statistic}>
                {
                    keys.map((item, index) => {
                        return (
                            <Fragment key={item.key}>
                                <Box className={styles.item} sx={{ justifyContent: index > 4 ? 'flex-end' : index > 1 ? 'center' : 'flex-start' }}>
                                    <img className={styles.img} src={item.img} alt="icon" />
                                    <Box>
                                        <div className={styles.value}>
                                            {numFormat(data?.[item.key])}
                                            {item.unit ? item.unit : ''}
                                        </div>
                                        <div className={styles.title}>{item.name}</div>
                                    </Box>
                                </Box>
                            </Fragment>
                        )
                    })
                }
            </Box>
        </Box>

    )
}

export default Statistic;