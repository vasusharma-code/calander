import React from 'react';

const EventList = ({ events, onEdit, onDelete, selectedDate }) => {
  const dayEvents = events.filter((event) => event.date.toString() === selectedDate.toString());

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Events for {selectedDate.toLocaleDateString()}</h3>
      {dayEvents.length > 0 ? (
        <ul>
          {dayEvents.map((event, index) => (
            <li key={index} className="p-2 border-b border-gray-300">
              <strong>{event.name}</strong>
              <p>{event.startTime} - {event.endTime}</p>
              <p>{event.description}</p>
              <button onClick={() => onEdit(event)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(event)} className="text-red-500 ml-4">Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events for this day.</p>
      )}
    </div>
  );
};

export default EventList;
