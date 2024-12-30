import React, { useState, useEffect } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import EventModal from '../components/EventModal';
import EventList from '../components/EventList';
import { useEventStore } from '../hooks/useEventStore';
import { formatDate } from '../components/utils/calendarHelpers';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const { events, addEvent, editEvent, deleteEvent } = useEventStore();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleEventSave = (eventData) => {
    addEvent(eventData);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-6">Event Calendar</h1>
      <CalendarGrid onDateClick={handleDateClick} selectedDate={selectedDate} events={events} />
      
      {showModal && (
        <EventModal
          selectedDate={selectedDate}
          onClose={() => setShowModal(false)}
          onSave={handleEventSave}
          events={events}
        />
      )}

      <EventList
        events={events}
        onEdit={editEvent}
        onDelete={deleteEvent}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default HomePage;
