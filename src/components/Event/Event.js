import React from 'react';

const Event = ({event}) => {   
    const deleteEvent = id =>{
        console.log(id)
        fetch(`https://thawing-plateau-61587.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then( res => res.json())
        .then( result => {
            console.log('delete success')
        })
    }
    return (
        <div className='col-md-3'>
            <img style={{height:'300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name} <button onClick={()=> deleteEvent(event._id)}>Delete</button> </h3>
        </div>
    );
};

export default Event;