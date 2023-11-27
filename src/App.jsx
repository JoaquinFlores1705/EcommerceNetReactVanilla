import { ThemeProvider } from '@mui/material';
import './App.css'
import Login from './components/security/Login'
import RegisterUser from './components/security/RegisterUser'
import MenuAppBar from './components/navigation/MenuAppBar'
import theme from './theme/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterUser />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
