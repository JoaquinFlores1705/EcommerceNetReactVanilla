import { Button, Icon } from "@mui/material"
import { Link } from "react-router-dom"

const PublicMenu = () =>{
    return (
        <>
            <Button color="inherit" className='buttonIcon'>
                <Link to="/cartshop" className='linkAppBarDesktop'>
                    <Icon className='mr'>shopping_cart</Icon>
                    Mis pedidos
                </Link>
            </Button>
            <Button color="inherit" className='buttonIcon'>
                <Link to="/login" className='linkAppBarDesktop'>
                    <Icon className='mr'>person</Icon>
                    Login
                </Link>
            </Button>
        </>
    )
}

export default PublicMenu