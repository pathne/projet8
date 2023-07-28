
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import NotFoundComponent from '../components/NotFound/NotFound'
import Footer from '../components/Footer/Footer'

export default function NotFound() {
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
