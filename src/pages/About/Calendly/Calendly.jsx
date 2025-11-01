import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendly = () => {
    const [date, setDate] = useState(new Date());
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        // Set the page title
        document.title = "Select a date & Time | Calendly";

        // Set the favicon
        const favicon = document.getElementById("favicon");
        if (favicon) {
            favicon.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyn8Ng8PXWBZX5eLh8orPs-6Ntz65mAJHhg&s"; // replace with your actual favicon URL
        } else {
            const link = document.createElement('link');
            link.id = 'favicon';
            link.rel = 'icon';
            link.href = 'https://i.ibb.co/xK8Zhtx/favicon.png'; // replace with your actual favicon URL
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div className="flex flex-col max-w-5xl p-8 mx-auto my-10 shadow-2xl md:flex-row bg-gradient-to-br from-blue-50 to-white rounded-3xl animate-fade-in">
            {/* Left Panel */}
            <div className="flex flex-col items-center p-6 border-r border-gray-200 md:w-1/2 text-start">
                <img 
                    src="https://i.ibb.co.com/xK8Zhtxb/Screenshot-2025-05-02-012602.png" 
                    alt="Alraayida Logo" 
                    className="w-32 h-32 mb-6 transition-transform duration-300 rounded-full shadow-md hover:scale-105"
                />
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">Alraayida/AIS Consultation</h2>
                <p className="font-medium text-blue-600">🕒 30 min</p>
                <p className="max-w-xs mt-2 text-sm text-gray-600">
                    📹 Web conferencing details will be provided upon confirmation.
                </p>
                <div className="pt-6 mt-auto text-xs text-gray-400">
                    <p className="cursor-pointer hover:underline">Cookie settings</p>
                    <p className="cursor-pointer hover:underline">Report abuse</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col justify-start p-6 md:w-1/2">
                <h3 className="mb-4 text-xl font-bold text-gray-700">Select a Date & Time</h3>
                <div className="p-4 bg-white shadow-inner rounded-xl">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        className="border border-gray-200 rounded"
                    />
                </div>
                <p className="mt-4 text-sm text-right text-gray-600">
                    Time zone: <strong>{timeZone}</strong> ({timeNow})
                </p>
            </div>
        </div>
    );
};

export default Calendly;
