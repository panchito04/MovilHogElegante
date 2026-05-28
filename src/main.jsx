import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Dynamic API fallback for Capacitor mobile emulators and physical devices
const envUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const isCapacitor = window.Capacitor || (window.location.hostname === 'localhost' && window.location.port === '')

if (isCapacitor && (envUrl.includes('localhost') || envUrl.includes('127.0.0.1'))) {
  const dynamicUrl = envUrl.replace('localhost', '10.0.2.2').replace('127.0.0.1', '10.0.2.2')
  console.log('📱 Capacitor native environment detected. Dynamic VITE_API_URL applied:', dynamicUrl)
  import.meta.env.VITE_API_URL = dynamicUrl
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)