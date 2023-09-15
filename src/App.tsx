import './App.css'
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/navbar';
import WelcomeSection from './components/welcome.tsx';
import CatPage from './components/catpage.tsx';
import InterestsPage from './components/interestspage.tsx';
import AboutPage from './components/aboutpage.tsx';
import CurvyPage from './components/curvypage.tsx';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<WelcomeSection />} />
            <Route path='/catpage' element={<CatPage/>}/>
            <Route path='/interestspage' element={<InterestsPage/>}/>
            <Route path='/curvypage' element={<CurvyPage />}/>
            <Route path='/aboutpage' element={<AboutPage/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
