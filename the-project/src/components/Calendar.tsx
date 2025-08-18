import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from "./Header.tsx";

export default function Calendar() {

    const events = [
        {
            id: '1',
            title: 'Team Meeting',
            start: '2025-08-14T10:00:00',
            end: '2025-08-14T11:00:00',
            description: 'Discuss project updates, assign tasks, and review deadlines.',
            location: 'Conference Room A'
        },
        {
            id: '2',
            title: 'Yoga Class',
            start: '2025-08-14T14:00:00',
            end: '2025-08-14T15:00:00',
            description: 'Relaxing yoga session for all employees.',
            location: 'Gym'
        }
    ];

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event);
    };

    const handleClose = () => {
        setSelectedEvent(null);
    };

    return (
        <>
        <NavBar />
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
            />

            {selectedEvent && (
                <div className="fixed inset-0 bg- bg-opacity-50 border-gray-400 flex items-center justify-center z-50">
                    <div className="bg-gray-200 rounded-lg p-6 max-w-md w-full shadow-2xl">
                        <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                        <p className="mb-1">
                            <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
                        </p>
                        <p className="mb-1">
                            <strong>End:</strong> {selectedEvent.end?.toLocaleString()}
                        </p>
                        <p className="mb-1">
                            <strong>Location:</strong> {selectedEvent.extendedProps.location}
                        </p>
                        <p className="mb-4">{selectedEvent.extendedProps.description}</p>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}
