import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Drawer,
    Button,
    MenuItem,
    Menu
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Search, Menu as MenuIcon, Close } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import OuterLink from './OuterLink'
import styles from './Header.module.scss'
import useIsMobile from 'utils/hooks/useIsMobile';
import { LinkUrls } from 'utils';

const ListTitleStyle = {
    fontSize: '0.7rem',
    fontWeight: 500,
    color: '#777',
    borderBottom: '1px solid #e8e9e9',
};

const Header = () => {
    const isMobile = useIsMobile()
    const [menuOpen, setMenuOpen] = useState(false);
    const [openList, setOpenList] = useState(false)
    const [openResourceList, setOpenResourceList] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openNetwork = Boolean(anchorEl);
    const clickNetwork = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseNetwork = () => {
        setAnchorEl(null);
    };

    const [anchorResourceEl, setAnchorResourceEl] = useState<null | HTMLElement>(null);
    const openResource = Boolean(anchorResourceEl);
    const clickResource = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorResourceEl(event.currentTarget);
    };
    const handleCloseResource = () => {
        setAnchorResourceEl(null);
    };

    return (
        <>
            <AppBar
                sx={{
                    bgcolor: { xs: '#000', sm: '#fffc04' },
                    backgroundImage: "none",
                    px: 0,
                    boxShadow:
                        '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 4%)',
                }}>
                <Toolbar sx={{ display: 'flex', px: { xs: '16px', sm: '13.5vw' }, alignItems: 'center', height: { xs: '44px', sm: '74px' }, justifyContent: 'space-between' }}>
                    <Box
                        sx={{ cursor: 'pointer', ml: 0 }}
                        display='inline-flex'
                        alignItems='center'>
                        <Link href='/' passHref >
                            {
                                isMobile ? <img className={styles.logo} src='/assets/logo.svg' alt='logo' /> : <img className={styles.logo} src='/assets/logo_black.svg' alt='logo' />
                            }
                        </Link>
                    </Box>
                    <Box
                        px='8px'
                        display={{ xs: 'none', sm: 'inline-flex' }}
                        alignItems='center'>
                        <Button
                            id="basic-button"
                            aria-controls={openNetwork ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            sx={{ fontSize: '16px', fontWeight: 700, color: '#393e41', textTransform: 'none' }}
                            className={styles.btnNetwork}
                            aria-expanded={openNetwork ? 'true' : undefined}
                            endIcon={openNetwork ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onClick={clickNetwork}
                        >
                            Network
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openNetwork}
                            onClose={handleCloseNetwork}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseNetwork} className={styles.menuItem}>
                                <a href={LinkUrls.explorer} className={styles.menuItem} target='__blank'>Jaz Explorer</a>
                                <LaunchOutlinedIcon className={styles.icon} />
                            </MenuItem>
                            <MenuItem onClick={handleCloseNetwork} className={styles.menuItem}>
                                <a href={LinkUrls.telemetry} className={styles.menuItem} target='__blank'> Node Telemetry</a>
                                <LaunchOutlinedIcon className={styles.icon} />
                            </MenuItem>
                        </Menu>
                        <ActiveLink activeClassName='active-menu' href='/node'>
                            <a className='default-menu'>Node</a>
                        </ActiveLink>
                        <ActiveLink activeClassName='active-menu' href='/token'>
                            <a className='default-menu'>Token</a>
                        </ActiveLink>
                        <Button
                            id="basic-button-resource"
                            aria-controls={openResource ? 'basic-menu-resource' : undefined}
                            aria-haspopup="true"
                            sx={{ fontSize: '16px', fontWeight: 700, textTransform: 'none', color: '#393e41' }}
                            className={styles.btnNetwork}
                            aria-expanded={openResource ? 'true' : undefined}
                            endIcon={openResource ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onClick={clickResource}
                        >
                            Resources
                        </Button>
                        <Menu
                            id="basic-menu-resource"
                            anchorEl={anchorResourceEl}
                            open={openResource}
                            onClose={handleCloseResource}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button-resource',
                            }}
                        >
                            <MenuItem onClick={handleCloseResource} className={styles.menuItem}>
                                <a href={LinkUrls.doc} className={styles.menuItem} target='__blank'>Jaz Doc</a>
                                <LaunchOutlinedIcon className={styles.icon} />
                            </MenuItem>
                            {/* <MenuItem onClick={handleCloseResource} className={styles.menuItem}>
                                <a href='#' className={styles.menuItem} target='__blank'>White Paper</a>
                                <LaunchOutlinedIcon className={styles.icon} />
                            </MenuItem> */}
                        </Menu>
                        <Box sx={{ color: "#3a3e41", fontSize: '16px', textTransform: 'none' }} className={styles.btn} onClick={() => window.open(LinkUrls.dapp)}>Dapps</Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}><OuterLink /></Box>
                    <IconButton
                        sx={{ display: { sm: 'none' } }}
                        onClick={() => { console.log('show menu'); setMenuOpen(true) }}>
                        <MenuIcon sx={{ color: 'white', fontSize: '24px' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor='right' open={menuOpen} onClose={() => setMenuOpen(false)}>
                <List sx={{ width: '100vw', boxSizing: 'border-box' }} >
                    <ListItem sx={{ justifyContent: 'space-between' }} onClick={() => setMenuOpen(false)}>
                        <img src="/assets/logo.svg" style={{ width: '76px' }} alt="logo" />
                        <IconButton>
                            <Close sx={{ fontSize: '24px' }} />
                        </IconButton>
                    </ListItem>
                    <ListItemButton onClick={() => setOpenList(!openList)}>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                            primary="Network" />
                        {openList ? <ExpandLess className={styles.arrow} /> : <ExpandMore sx={{ fontSize: '16px' }} />}
                    </ListItemButton>
                    <Collapse in={openList} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText
                                    onClick={() => window.open(LinkUrls.explorer)}
                                    primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                                    primary="Jaz Explorer" />
                                <LaunchOutlinedIcon className={styles.arrow} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText
                                    onClick={() => window.open(LinkUrls.telemetry)}
                                    primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                                    primary="Node Telemetry " />
                                <LaunchOutlinedIcon className={styles.arrow} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Link href='/node' passHref >
                        <ListItemButton onClick={() => setMenuOpen(false)}>
                            <ListItemText
                                primary='Node'
                                primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                            />
                        </ListItemButton>
                    </Link>
                    <Link href='/token' passHref>
                        <ListItemButton onClick={() => setMenuOpen(false)}>
                            <ListItemText
                                primary='Token'
                                primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                            />
                        </ListItemButton>
                    </Link>
                    <ListItemButton onClick={() => setOpenResourceList(!openResourceList)}>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                            primary="Resources" />
                        {openResourceList ? <ExpandLess className={styles.arrow} /> : <ExpandMore sx={{ fontSize: '16px' }} />}
                    </ListItemButton>
                    <Collapse in={openResourceList} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText
                                    onClick={() => window.open(LinkUrls.doc)}
                                    primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                                    primary="Jaz Doc" />
                                <LaunchOutlinedIcon className={styles.arrow} />
                            </ListItemButton>
                            {/* <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText
                                    onClick={() => window.open('#')}
                                    primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                                    primary="White Paper" />
                                <LaunchOutlinedIcon className={styles.arrow} />
                            </ListItemButton> */}
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => window.open(LinkUrls.dapp)}>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
                            primary="Dapps" />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
};

export default Header;
