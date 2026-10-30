import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SettingsProvider } from './lib/settings'
import { CartProvider } from './lib/cart'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><BrowserRouter><SettingsProvider><CartProvider><App /></CartProvider></SettingsProvider></BrowserRouter></React.StrictMode>
)
