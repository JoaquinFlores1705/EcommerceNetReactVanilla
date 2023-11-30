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
          <Route path='/cartshopproccess' element={<ProcessShop />} />
          <Route path='/purchaseOrder/:id' element={<PurchaseOrder />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
