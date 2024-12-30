import React from 'react';
import { formatDate, getDaysInMonth, getStartOfMonth } from './utils/calendarHelpers';

const CalendarGrid = ({ onDateClick, selectedDate, events }) => {
  const startOfMonth = getStartOfMonth(selectedDate);
  const daysInMonth = getDaysInMonth(selectedDate);

  return (
    <div className="grid grid-cols-7 gap-4">
      {daysInMonth.map((date) => {
        const isToday = formatDate(date) === formatDate(new Date());
        const isSelected = formatDate(date) === formatDate(selectedDate);
        const dayEvents = events.filter((event) => formatDate(event.date) === formatDate(date));

        return (
          <div
            key={date}
            className={`p-4 text-center cursor-pointer ${
              isToday ? 'bg-blue-500 text-white' : isSelected ? 'bg-blue-300' : 'hover:bg-gray-200'
            }`}
            onClick={() => onDateClick(date)}
          >
            <span className="text-lg">{date.getDate()}</span>
            {dayEvents.length > 0 && <div className="mt-2 text-sm text-gray-600">Events: {dayEvents.length}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
