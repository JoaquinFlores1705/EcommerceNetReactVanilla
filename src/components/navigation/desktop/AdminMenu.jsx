import { Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const AdminMenu = () =>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.target)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button color="inherit" className="buttonIcon"
            onClick={handleClick}
            >
                <div className="linkAppBarDesktop">
                    <Icon className="mr">admin_panel_settings</Icon>
                    Admin
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
                    <Link className="linkAppBarDesktop" to="/admin/users">
                        <ListItemIcon className="listItemIcon">
                            <Icon>group</Icon>
                        </ListItemIcon>
                        <ListItemText>Usuarios</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className="list_item"
                onClick={handleClose}
                >
                    <Link className="linkAppBarDesktop" to="/admin/productList">
                        <ListItemIcon className="listItemIcon">
                            <Icon>storefront</Icon>
                        </ListItemIcon>
                        <ListItemText>Productos</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className="list_item"
                onClick={handleClose}
                >
                    <Link className="linkAppBarDesktop" to="/admin/orderList">
                        <ListItemIcon className="listItemIcon">
                            <Icon>shopping_cart</Icon>
                        </ListItemIcon>
                        <ListItemText>Pedidos</ListItemText>
                    </Link>
                </MenuItem>
            </Menu>
        </>
    )
}

export default AdminMenu