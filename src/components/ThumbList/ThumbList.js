
import './ThumbList.scss'
import Thumb from '../Thumb/Thumb'
import data from '../../data/data'
import { useState, useEffect } from 'react';

export default function ThumbList(){

    const [rentings, setRentings] = useState([]);

    useEffect(()=>{
        data.rentings.get().then(rentings => setRentings(rentings))
    })

    const items = rentings.map(item => (
        <Thumb
            key={item.id}
            uid={item.id}
            title={item.title}
            cover={item.cover}
        />
    ))

    return (
        <section className="thumb-list">
            <div>
                {items}
            </div>
        </section>
    )
}
