import { useState } from 'react'
import './MenuAppBar.css'
import { AppBar, Button, Container, Icon, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";
import ClientMenu from './desktop/ClientMenu';
import AdminMenu from './desktop/AdminMenu';
import MobileMenu from './mobile/MobileMenu';
import MobileMenuPublic from './mobile/MobileMenuPublic';
import PublicMenu from './desktop/PublicMenu';

const MenuAppBar = () =>{
    const [open, setOpen] = useState(false);

    const openToggle = () => {
        setOpen(true);
    }

    const closeToggle = () => {
        setOpen(false);
    }

    return (
        <div>
            <AppBar position="static" className='appBar'>
                <Container>
                    <Toolbar>
                        <div className='sectionMobile'>
                            <IconButton color='inherit' onClick={openToggle}>
                                <Icon fontSize='large'>menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer
                        open={open}
                        onClose={closeToggle}
                        >
                            <div className='list'>
                                <List>
                                    {/*<MobileMenuPublic clickHandler={closeToggle}/>*/}
                                    <MobileMenu clickHandler={closeToggle} />
                                </List>
                            </div>

                        </Drawer>
                        <div className='grow'>
                            <Link to="/" color="inherit" className='linkAppBarLogo' underline="none">
                                <Icon className='mr' fontSize="large">store</Icon>
                                <Typography variant="h5">Ecommerce Shop</Typography>
                            </Link>
                        </div>
                        <div className='sectionDesktop'>
                            {/*<PublicMenu />*/}
                            <ClientMenu />
                            <AdminMenu />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default MenuAppBar