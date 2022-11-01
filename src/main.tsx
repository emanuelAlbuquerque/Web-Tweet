import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { PageNotFound } from './Pages/PageNotFound'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)