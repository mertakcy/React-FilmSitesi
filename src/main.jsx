import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalProvider>
)
