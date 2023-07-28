

import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import Carrousel from '../components/Carrousel/Carrousel'
import Presentation from '../components/Presentation/Presentation'
import Footer from '../components/Footer/Footer'
import NotFound from './NotFound'
import data from '../data/data'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function FicheLogement() {

    const [pending, setPending] = useState(true)
    const [renting, setRenting] = useState(null)

    const {id} = useParams()

    useEffect(()=>{
        data.renting.get(id).then(renting => {
            setPending(false);
            setRenting(renting)
        })
    })

    if (pending){
        return (
            <div>
                <Container>
                    <Header />
                </Container>
                <Footer />
            </div>
        );
    }

    let content;
    if (!renting){
        return (
            <NotFound />
        );
    }

    return (
        <div>
            <Container>
                <Header />
                <Carrousel pictures={renting.pictures} />
                <Presentation
                    title={renting.title}
                    location={renting.location}
                    host={renting.host}
                    rating={renting.rating}
                    tags={renting.tags}
                    description={renting.description}
                    equipments={renting.equipments}
                />
            </Container>
            <Footer />
        </div>
    );
}
