
import { useEffect } from 'react';

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import NotFoundComponent from '../components/NotFound/NotFound'
import Footer from '../components/Footer/Footer'

export default function NotFound() {

    useEffect(()=>{
        document.title = "Kasa - 404 - Cette page n'existe pas"
    })

    return (
        <div>
            <Container>
                <Header />
                <NotFoundComponent />
            </Container>
            <Footer />
        </div>
    );
}
