
import { Link } from "react-router-dom"

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import AboutSplash from '../components/AboutSplash/AboutSplash'
import AboutContent from '../components/AboutContent/AboutContent'
import Footer from '../components/Footer/Footer'

export default function About() {

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
