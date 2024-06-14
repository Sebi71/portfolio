import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FontLoader from './components/FontLoader/index.jsx';
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontLoader />
    <App />
  </React.StrictMode>,
)
