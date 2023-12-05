import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useStateValue } from "../../../context/store";

const ClientMenu = () => {

    const [{sessionUser}, dispatch]= useStateValue();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.target)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button color="inherit" className="buttonIcon">
                <Link className="linkAppBarDesktop" to="/cartshop">
                    <Icon className="mr">shopping_cart</Icon>
                    Mis pedidos
                </Link>
            </Button>
            <div>
                <Button color="inherit" className="buttonIcon"
                onClick={handleClick}
                >
                    <div className="linkAppBarDesktop">
                        <Avatar alt="mi imagen" className="avatar_profile_app_bar"
                        src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                        />
                        {sessionUser 
                        ? (sessionUser.authenticated ? `${sessionUser.user.name} ${sessionUser.user.lastname}` : "No sesion")  
                        : "No Sesion"}
                        <Icon>keyboard_arrow_down</Icon>
                    </div>
                </Button>
                <Menu
                elevation={2}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem className="list_item"
                    onClick={handleClose}
                    >
                        <Link className="linkAppBarDesktop" to="/profile">
                            <ListItemIcon className="listItemIcon">
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className="list_item"
                    onClick={handleClose}
                    >
                        <Link className="linkAppBarDesktop" to="/">
                            <ListItemIcon className="listItemIcon">
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar Sesion</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default ClientMenu