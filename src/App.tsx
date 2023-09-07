import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimplePage from './components/simplePage';
import Navbar from './components/navbar';
import WelcomeSection from './components/welcome';
import TermsSection from './components/terms';

function App() {


  return (
    <>
      <Router>
        <body>
          <Navbar />
          <Routes>
            <Route path='/' element={
              <main>
                <WelcomeSection />
                <TermsSection />
              </main>
            } />
            <Route path='/simplepage' element={<SimplePage/>}/>
          </Routes>
        </body>
      </Router>
    </>
  )
}

export default App
