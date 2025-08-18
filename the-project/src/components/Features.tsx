import React from "react";
import NavBar from "./Header.tsx";

function Features(){
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-white to-purple-400 justify-center justify-items-start
                flex items-center flex-col gap-10 text-center">
                <h1 className="text-7xl">Full HR Management Suite</h1>
                <div>
                    <ul className="text-4xl">
                        <li>Manage staff roles and permissions</li>
                        <li>Select and manage volunteers</li>
                        <li>Build, monitor and alter staff schedules on the fly</li>
                        <li>Allow volunteers to view their schedules any time, anywhere.</li>
                        <li>Organizers can keep a master list of staff and volunteers to recruit, or blacklist</li>
                    </ul>
                </div>
            </div>

            <div className="min-h-screen bg-gray-400 justify-center justify-items-start
                flex items-center flex-col gap-10 text-center">
                <h1 className="text-7xl">Full Event Management</h1>
                <div>
                    <ul className="text-4xl">
                        <li>Schedule changes are updated on the public schedule immediately</li>
                        <li>Set ticket limits and prices for events</li>
                        <li>Notify attendees when the schedule is updated</li>
                    </ul>
                </div>
            </div>

            <div className="min-h-screen bg-green-300 justify-center justify-items-start
                flex items-center flex-col gap-10 text-center">
                <h1 className="text-7xl">Data At Your Fingertips</h1>
                <div>
                    <ul className="text-4xl">
                        <li>See how many people have registered, and what events they have registered for</li>
                        <li>Track registrations over time</li>
                        <li>Easily keep track of income and expenses</li>
                    </ul>
                </div>
            </div>

            <div className="min-h-screen bg-indigo-300 justify-center justify-items-start
                flex items-center flex-col gap-10 text-center">
                <h1 className="text-7xl">Project Management</h1>
                <div>
                    <ul className="text-4xl">
                        <li>Set deadlines</li>
                        <li>Create and assign tasks</li>
                        <li>Stay on target</li>
                    </ul>
                </div>
            </div>



        </>
    );
}

export default Features;