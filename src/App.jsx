import { ThemeProvider } from '@mui/material';
import './App.css'
import Login from './components/security/Login'
import RegisterUser from './components/security/RegisterUser'
import MenuAppBar from './components/navigation/MenuAppBar'
import theme from './theme/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './components/pages/Product';
import DetailsProduct from './components/pages/DetailsProduct';
import CartShop from './components/pages/CartShop';
import ProcessShop from './components/pages/ProcessShop';
import PurchaseOrder from './components/pages/purchaseOrder';
import Profile from './components/security/Profile';
import Users from './components/pages/admin/Users';
import EditUser from './components/pages/admin/EditUser';
import ProductsList from './components/pages/admin/ProductsList';
import ProductAdd from './components/pages/admin/ProductAdd';
import ProductEdit from './components/pages/admin/ProductEdit';
import ProductsOrderList from './components/pages/admin/ProductsOrderList';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/' element={<Product />} />
          <Route path='/detailsProduct/:id' element={<DetailsProduct />} />
          <Route path='/cartshop' element={<CartShop />} />
          <Route path='/cartshopproccess' element={<ProcessShop />} />
          <Route path='/purchaseOrder/:id' element={<PurchaseOrder />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/user/:id' element={<EditUser />} />
          <Route path='/admin/productList' element={<ProductsList />} />
          <Route path='/admin/addProduct' element={<ProductAdd />} />
          <Route path='/admin/editProduct/:id' element={<ProductEdit />} />
          <Route path='/admin/orderList' element={<ProductsOrderList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
