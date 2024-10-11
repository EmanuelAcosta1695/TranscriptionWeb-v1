import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TranscriptionApp } from './pages/TranscriptionApp'
import { Navbar } from './components/Navbar/Navbar'
import { AboutPage } from './pages/AboutPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <div className="app-container">
        <div className="left-band"></div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TranscriptionApp />
              </>
            }
          />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className="right-band"></div>
      </div>
    </React.StrictMode>
  </BrowserRouter>
)
