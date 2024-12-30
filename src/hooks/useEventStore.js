import { useState, useEffect } from 'react';

export const useEventStore = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const saveEvents = (events) => {
    localStorage.setItem('events', JSON.stringify(events));
    setEvents(events);
  };

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    saveEvents(updatedEvents);
  };

  const editEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.name === updatedEvent.name ? updatedEvent : event
    );
    saveEvents(updatedEvents);
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    saveEvents(updatedEvents);
  };

  return {
    events,
    addEvent,
    editEvent,
    deleteEvent,
  };
};
