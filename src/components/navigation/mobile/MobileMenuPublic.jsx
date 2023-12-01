import { Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const MobileMenuPublic = (props) => {



    return (
        <>
            <ListItem button className='listItem' onClick={props.clickHandler}>
                <Link to="/login" className='linkAppBarMobile'>
                    <ListItemIcon className='listItemIcon'>
                        <Icon>person</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        Login
                    </ListItemText>
                </Link>
            </ListItem>
            <ListItem button className='listItem' onClick={props.clickHandler}>
                <Link to="/cartshop" className='linkAppBarMobile'>
                    <ListItemIcon className='listItemIcon'>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        Mis pedidos
                    </ListItemText>
                </Link>
            </ListItem>
        </>
    )
}

export default MobileMenuPublic