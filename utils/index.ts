export function numFormat(num: number | string | undefined) {
    if (!num) {
        return '0';
    }
    const arr = num.toString().split('.');
    arr[0] = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return arr.join('.');
}

const isDev = process.env.NODE_ENV === 'development';

const devConfig = {
    address: '0x0000000000000000000000000000000000000800',
    rpc: 'http://52.206.88.57:9933'
}
const prodConfig = {
    address: '0x0000000000000000000000000000000000000800',
    rpc: 'https://rpc0.jaz.network'
}
export const getConfig = () => {
    console.log(process.env.NODE_ENV, 'ppp')
    return isDev ? devConfig : prodConfig;
}

export const pxTovw = (px: number): string => {
    const base = 375;
    return px * 100 / base + 'vw'
}

export const LinkUrls = {
    guide: 'https://docs.jaz.network/guide/node-setup',
    doc: 'https://docs.jaz.network/',
    explorer: "https://explorer.artio.jaz.network/",
    dapp: 'https://apps.artio.jaz.network/',
    telemetry: 'https://telemetry.polkadot.io/#list/0x52ccdbe34bc8128464df206692fd6308aef97762961a7b9afe9f5697dccc969f'
}