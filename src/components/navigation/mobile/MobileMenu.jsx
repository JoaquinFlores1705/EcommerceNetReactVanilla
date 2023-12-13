import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import './MobileMenu.css'
import { Link, useNavigate } from "react-router-dom"
import { useStateValue } from "../../../context/store"

const MobileMenu = (props) =>{

    const imageDefault = "https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg";
    const navigation = useNavigate()
    const [{sessionUser}, dispatch]= useStateValue();
    const [openClient, setOpenCliente] = useState(false)
    const [openAdmin, setOpenAdmin] = useState(false)

    const hadleClickClient = () => {
        setOpenCliente(prev => !prev)
    }

    const hadleClickAdmin = () => {
        setOpenAdmin(prev => !prev)
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "LOGOUT",
            newUser: null,
            authenticated: false
        });

        navigation("/login");
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
                    src={
                        sessionUser
                        ? (sessionUser.user.image ? sessionUser.user.image : imageDefault)
                        : imageDefault
                    }
                    />
                    <ListItemText>
                        {
                            sessionUser
                            ? (sessionUser.authenticated ? `${sessionUser.user.name} ${sessionUser.user.lastname}` : "" )
                            : "No sesion"
                        }
                    </ListItemText>
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
                            <ListItem button onClick={logout}>
                                <ListItemText>Cerrar Sesion</ListItemText>
                            </ListItem>
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
                        <Link className="linkAppBarMobile" to="/admin/users">
                            <ListItemIcon className="listItemIcon">
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className="list_subitem" onClick={props.clickHandler}>
                        <Link className="linkAppBarMobile" to="/admin/productList">
                            <ListItemIcon className="listItemIcon">
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className="list_subitem" onClick={props.clickHandler}>
                        <Link className="linkAppBarMobile" to="/admin/orderList">
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
                <Link className="linkAppBarMobile" to="/admin/orderList">
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