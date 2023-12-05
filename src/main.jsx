import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './context/store.jsx'
import { initialState } from './context/initialState.jsx'
import { mainReducer } from './context/reducers'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
    </StateProvider>
    
)
