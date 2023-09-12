import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import WelcomeSection from './components/welcome';
import TermsSection from './components/terms';
import CatPage from './components/catpage.tsx';
import InterestsPage from './components/interestspage.tsx';
import AboutPage from './components/aboutpage.tsx';

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
            <Route path='/catpage' element={<CatPage/>}/>
            <Route path='/interestspage' element={<InterestsPage/>}/>
            <Route path='/aboutpage' element={<AboutPage/>}/>
          </Routes>
        </body>
      </Router>
    </>
  )
}

export default App
