import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router"; // ✅ Correct import

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        { name: "Features", path: "/features" },
        { name: "About", path: "/about" },
        { name: "Pricing", path: "/pricing" },
        { name: "Login", path: "/login" },
        { name: "Contact", path: "/calendar" }
    ];

    return (
        <>
            {/* Desktop / Tablet Navbar */}
            <div className="hidden sm:flex fixed bg-gray-900 flex justify-between items-center gap-16
                py-3 px-10 left-1/2 -translate-x-1/2 top-[20px] rounded-full backdrop-blur-md
                bg-opacity-60 text-white shadow-lg z-10"
            >
                <ul className="flex gap-8 text-xl">
                    {items.map((item) => (
                        <li key={item.name} className="hover:text-blue-400 cursor-pointer">
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navbar with Hamburger */}
            <div className="sm:hidden fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md
                flex justify-between items-center px-6 py-4 z-20 shadow-lg">
                <div className="text-lg font-bold text-white">MyApp</div>
                <button
                    className="text-white text-2xl"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Slide-Out Menu */}
            <div
                className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out z-30 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-6 flex flex-col gap-6 text-lg">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="hover:text-blue-400 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay when menu is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
};

export default NavBar;
