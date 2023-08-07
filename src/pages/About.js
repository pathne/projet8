
import { Link } from "react-router-dom"
import { useEffect } from 'react';

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import AboutSplash from '../components/AboutSplash/AboutSplash'
import AboutContent from '../components/AboutContent/AboutContent'
import Footer from '../components/Footer/Footer'

export default function About() {

    useEffect(()=>{
        document.title = 'Kasa - A propos'
    })

    return (
        <div>
            <Container>
                <Header />
                <AboutSplash />
                <AboutContent />
            </Container>
            <Footer />
        </div>
    );
}
