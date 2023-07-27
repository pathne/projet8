
import { Link } from "react-router-dom"

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import HomeSplash from '../components/HomeSplash/HomeSplash'
import ThumbList from '../components/ThumbList/ThumbList'
import Footer from '../components/Footer/Footer'

export default function Home() {

    return (
        <div>
            <Container>
                <Header />
                <HomeSplash />
                <ThumbList />
            </Container>
            <Footer />
        </div>
    );
}
