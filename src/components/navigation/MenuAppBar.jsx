import { useState } from 'react'
import './MenuAppBar.css'
import { AppBar, Button, Container, Icon, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";

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
                                    <ListItem button className='listItem' onClick={closeToggle}>
                                        <Link to="/login" color="inherit" underline='none' className='linkAppBarMobile'>
                                            <ListItemIcon className='listItemIcon'>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Login
                                            </ListItemText>
                                        </Link>
                                    </ListItem>
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
                            <Button color="inherit" className='buttonIcon'>
                                <Link to="/login" color="inherit" className='linkAppBarDesktop' underline='none'>
                                    <Icon className='mr'>person</Icon>
                                    Login
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default MenuAppBar