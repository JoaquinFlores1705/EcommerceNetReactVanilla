import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import './MobileMenu.css'
import { Link } from "react-router-dom"

const MobileMenu = (props) =>{

    const [openClient, setOpenCliente] = useState(false)
    const [openAdmin, setOpenAdmin] = useState(false)

    const hadleClickClient = () => {
        setOpenCliente(prev => !prev)
    }

    const hadleClickAdmin = () => {
        setOpenAdmin(prev => !prev)
    }

    return (
        <>
            <ListItem button
            className="list_item"
            onClick={hadleClickClient}
            >
                <div className="linkAppBarDesktop">
                    <Avatar 
                    alt="mi imagen"
                    className="avatar_profile_app_bar"
                    src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                    />
                    <ListItemText>Paul Flores</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>
            <Collapse
            component="li"
            in={openClient}
            timeout="auto"
            unmountOnExit
            >
                <List disablePadding>
                    <ListItem button className="list_subitem" onClick={props.clickHandler} >
                        <Link className="linkAppBarMobile" to="/profile">
                            <ListItemIcon className="listItemIcon">
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className="list_subitem" onClick={props.clickHandler}>
                        <Link className="linkAppBarMobile" to="/">
                            <ListItemIcon className="listItemIcon">
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar Sesion</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* admin */}
            <ListItem button
            className="list_item"
            onClick={hadleClickAdmin}
            >
                <div className="linkAppBarDesktop">
                    <ListItemIcon className="listItemIcon">
                        <Icon>admin_panel_settings</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        Admin
                    </ListItemText>
                    <Icon>
                        keyboard_arrow_down
                    </Icon>
                </div>
            </ListItem>
            <Collapse
            component="li"
            in={openAdmin}
            timeout="auto"
            unmountOnExit
            >
                <List disablePadding>
                    <ListItem button className="list_subitem" onClick={props.clickHandler} >
                        <Link className="linkAppBarMobile" to="/">
                            <ListItemIcon className="listItemIcon">
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className="list_subitem" onClick={props.clickHandler}>
                        <Link className="linkAppBarMobile" to="/">
                            <ListItemIcon className="listItemIcon">
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className="list_subitem" onClick={props.clickHandler}>
                        <Link className="linkAppBarMobile" to="/">
                            <ListItemIcon className="listItemIcon">
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* fin admin */}
            <ListItem button className="listItem" onClick={props.clickHandler}>
                <Link className="linkAppBarMobile" to="/cartshop">
                    <ListItemIcon className="listItemIcon" >
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>Mis pedidos</ListItemText>
                </Link>
            </ListItem>
        </>
    )
}

export default MobileMenu