import { ThemeProvider } from '@mui/material';
import './App.css'
import Login from './components/security/Login'
import RegisterUser from './components/security/RegisterUser'
import theme from './theme/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RegisterUser></RegisterUser>
    </ThemeProvider>
  )
}

export default App
