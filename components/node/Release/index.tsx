import { Box, Typography, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { numFormat } from 'utils';
import styles from './index.module.scss';

function createData(
  num: string,
  dailyRelease: number,
  periodicRelease: number,
  cumulativeRelease: number,
) {
  return { num, dailyRelease, periodicRelease, cumulativeRelease };
}

const rows = [
  createData('1', 500000, 90000000, 90000000),
  createData('2', 400000, 72000000, 162000000),
  createData('3', 320000, 57600000, 219600000),
  createData('4', 256000, 46080000, 265680000),
  createData('5', 204800, 36864000, 302544000),
  createData('6', 163840, 29491200, 332035200),
  createData('7', 131072, 23592960, 355628160),
  createData('8', 104858, 18874368, 374502528),
  createData('9', 84886, 15099494, 389602022),
  createData('10', 67109, 90000000, 401681618),
];

const TableHeadStyle = { fontSize: '16px', color: 'white', background: 'black', lineHeight: '20px', border: 'none', p: '4px' };
const TableRowStyle = { fontSize: '16px', color: 'black', lineHeight: '20px', p: '4px' };

function BasicTable() {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={TableHeadStyle} align="left">Cycle</TableCell>
          <TableCell sx={TableHeadStyle} align="left">Daily release</TableCell>
          <TableCell sx={TableHeadStyle} align="left">Periodic release</TableCell>
          <TableCell sx={TableHeadStyle} align="left">Cumulative release</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.num}
            sx={{ '& td, & th': { border: 0 } }}
          >
            <TableCell sx={TableRowStyle} align="left" scope="row">
              {row.num}
            </TableCell>
            <TableCell sx={TableRowStyle} align="left">{numFormat(row.dailyRelease)}</TableCell>
            <TableCell sx={TableRowStyle} align="left">{numFormat(row.periodicRelease)}</TableCell>
            <TableCell sx={TableRowStyle} align="left">{numFormat(row.cumulativeRelease)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


const Release = () => {
  return (
    <Box className={styles.outer}>
      <Typography className='subTitle' mb={'100px'}>Reward release mechanism</Typography>
      <Box className={styles.release}>
        <Box className={styles.wrapper} sx={{ mr: { xs: '0', sm: '120px' } }}>
          <ul>
            <li>The reward release decreases with time, which conforms to the exponential decreasing function</li>
            <li>The initial excavation is 500000 pieces per day, and the attenuation of each cycle (180 days) is 20%. It is estimated that the excavation can be completed in five years.</li>
            <li>Release in the x-th cycle = 500000 * 0.8 ^ x</li>
          </ul>
        </Box>
        <Box className={styles.wrapper}>
          <Box className={styles.tableCard}>
            <img src="/assets/table.png" alt="table" />
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default Release;