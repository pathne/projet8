import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="fiche-logement" element={ <FicheLogement/> } />
                <Route path="about" element={ <About/> } />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </div>
    );
}
