
import { Link } from "react-router-dom"

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import HomeSplash from '../components/HomeSplash/HomeSplash'

export default function Home() {
    return (
        <Container>
            <Header />
            <HomeSplash />
            <div>Home</div>
            <Link to="fiche-logement">fiche logement</Link>
            <Link to="about">A propos</Link>
        </Container>
    );
}
