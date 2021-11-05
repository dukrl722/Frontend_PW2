import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Events() {

    const [events, setEvents] = useState([]);
    const [visibleForm, setVisibleForm] = useState(true);

    async function handleAddEvent(event) {
        event.preventDefault();

        try {

        } catch(err) {

        }
    }

    useEffect(() => {
        const level = localStorage.getItem('level');

        if (parseInt(level) !== 1) {
            setVisibleForm(false);
        }
    }, [visibleForm]);

    useEffect(() => {
        api.get('/event').then(response => setEvents(response.data.events));
    }, []);

    return (
        <>
            <form onSubmit={handleAddEvent} style={visibleForm ? {} : { display: 'none' }}>
                <input placeholder="Título" />
                <input placeholder="Descrição" />
                <button type="submit">Cadastrar</button>
            </form>
            <div className="events">
                {
                    events.map(event => (
                        <Link className="eventItem" key={event._id} to={`/event/${event._id}`}>
                            <label>{event.name}</label>
                            <label>{event.description}</label>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}