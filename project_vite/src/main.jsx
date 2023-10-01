import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Article from './components/article'
import Otzivi from './components/clients_otziv'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Header />
    <Article />
    <Otzivi />
    </div>
  </React.StrictMode>,
)
