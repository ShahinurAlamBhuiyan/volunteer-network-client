import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';




const Home = () => {
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        fetch('https://thawing-plateau-61587.herokuapp.com/events')
        .then( res => res.json())
        .then( data => setEvents(data))
    }, [])

    console.log(events)

    return (
        <div className='row container'>
            {
                events.map( event => <Event event={event}></Event> )
            }
        </div>
    );
};

export default Home;