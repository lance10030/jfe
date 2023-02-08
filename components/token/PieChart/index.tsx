import { Box, Typography, Grid } from '@mui/material';
import React, { Fragment, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './index.module.scss';
import { fontWeight } from '@mui/system';

const pieData = [
    { value: 400, name: 'Miner node' },
    { value: 250, name: 'Air drop to metamon game users' },
    { value: 50, name: 'Metamon game egg opening reward' },
    { value: 50, name: 'Team motivation' },
    { value: 120, name: 'Investors' },
    { value: 30, name: 'Ido / bootstrap Liquidity' },
    { value: 50, name: 'Global development plan' },
    { value: 50, name: 'Treasury reserve' }
]
const total = pieData.map(item => item.value).reduce((pre, item) => pre + item)
type Tooltip = {
    value: number,
    name: string,
    color: string
}
const Functions: React.FC = () => {
    const [data, setData] = useState<Tooltip | null>(null)
    const pcOptions = {
        // title: {
        //     text: 'Referer of a Website',
        //     subtext: 'Fake Data',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: '20%',
            formatter: (name: string) => {
                const value = pieData.find(item => item.name === name)!.value
                return `{a|${name}: }{b|${value * 100 / total}% (${value} million)}`
            },
            textStyle: {
                rich: {
                    a: {
                        color: 'black',
                        fontSize: 18
                    },
                    b: {
                        color: '#613FED',
                        fontSize: 18,
                        fontWeight: 700
                    }
                },
            }
        },
        series: [
            {
                name: 'Token distribution',
                type: 'pie',
                data: pieData,
                radius: ['50%', '80%'],
                label: {
                    show: false,
                    color: 'rgba(255,255,255,0.9)'
                },
                center: ['70%', '50%'],
                color: ['#613FED', '#2CA5FF', '#14D7AF', '#58E865', '#F0E934', '#FFAE54', '#F65959', '#C958E8'],
                // emphasis: {
                //     show: false,
                //     itemStyle: {
                //         shadowBlur: 0,
                //         shadowOffsetX: 0,
                //         shadowColor: 'red'
                //     }
                // }
            }
        ]
    };
    const mobileOptions = {
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        series: [
            {
                name: 'Token distribution',
                type: 'pie',
                data: pieData,
                color: ['#613FED', '#2CA5FF', '#14D7AF', '#58E865', '#F0E934', '#FFAE54', '#F65959', '#C958E8'],
                radius: ['40%', '70%'],
                label: {
                    show: false,
                    color: 'rgba(255,255,255,0.9)'
                },
                center: ['50%', '50%']
            }
        ]
    };
    const onclick = (params: any): void => {
        setData({
            color: params.color,
            name: params.data.name,
            value: params.data.value
        })

    }
    const onEvents = {
        'click': onclick,
    }
    return (
        <Fragment>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <ReactECharts option={pcOptions} />
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }} className={styles.tooltip}>
                <Box className={styles.top}>
                    {
                        data?.color && <Box sx={{ background: data.color }} className={styles.rect} />
                    }
                    <Typography className={styles.name} variant='body1'>{data?.name ? data.name + ':' : ''}</Typography>
                </Box>
                <Box className={styles.bottom}>
                    <Typography className={styles.value} variant='body1'>{data?.value ? `${data.value * 100 / total}% (${data.value} million)` : ''}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <ReactECharts onEvents={onEvents} option={mobileOptions} />
            </Box>
        </Fragment>

    );
};

export default Functions;