import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

export default function EventTasks() {

    const [eventTasks, setEventTasks] = useState([]);
    const [visibleForm, setVisibleForm] = useState(true);

    async function handleAddTaskEvent(event) {
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
        //api.get('/event/').then(response => setEventTasks(response.data.events));
    }, []);

    return (
        <>
            <form onSubmit={handleAddTaskEvent} style={!visibleForm ? {} : { display: 'none' }}>
                <input placeholder="Descrição" />
                <input placeholder="Arquivo" type="file" />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}