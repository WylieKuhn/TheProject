import React, { useState, useEffect } from 'react';
import { User, QrCode } from 'lucide-react';

function ConventionIDCard() {
    const [userData, setUserData] = useState({
        name: 'Alex Johnson',
        uuid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        profileImage: null
    });

    // Generate QR code as SVG
    const generateQRCode = (text) => {
        // Simple QR code representation using dots
        const size = 17; // 17x17 grid for demo
        const cellSize = 8;
        const padding = 16;
        const totalSize = (size * cellSize) + (padding * 2);

        // Create a simple pattern based on the UUID (not a real QR code algorithm)
        const pattern = [];
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = ((hash << 5) - hash) + text.charCodeAt(i);
            hash = hash & hash;
        }

        for (let y = 0; y < size; y++) {
            pattern[y] = [];
            for (let x = 0; x < size; x++) {
                const seed = (x + y * size + Math.abs(hash)) * 1234567;
                pattern[y][x] = (seed % 100) < 45; // ~45% fill rate
            }
        }

        // Add finder patterns (corners)
        const addFinderPattern = (startX, startY) => {
            for (let y = 0; y < 7; y++) {
                for (let x = 0; x < 7; x++) {
                    if ((x === 0 || x === 6 || y === 0 || y === 6) ||
                        (x >= 2 && x <= 4 && y >= 2 && y <= 4)) {
                        if (startY + y < size && startX + x < size) {
                            pattern[startY + y][startX + x] = true;
                        }
                    } else {
                        if (startY + y < size && startX + x < size) {
                            pattern[startY + y][startX + x] = false;
                        }
                    }
                }
            }
        };

        addFinderPattern(0, 0); // Top-left
        addFinderPattern(size - 7, 0); // Top-right
        addFinderPattern(0, size - 7); // Bottom-left

        const rects = pattern.flatMap((row, y) =>
            row.map((cell, x) =>
                cell ? `<rect x="${padding + x * cellSize}" y="${padding + y * cellSize}" width="${cellSize}" height="${cellSize}" fill="black"/>` : ''
            ).filter(Boolean)
        ).join('');

        return `<svg width="${totalSize}" height="${totalSize}" viewBox="0 0 ${totalSize} ${totalSize}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${totalSize}" height="${totalSize}" fill="white"/>
      ${rects}
    </svg>`;
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUserData(prev => ({ ...prev, profileImage: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const generateNewUUID = () => {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        setUserData(prev => ({ ...prev, uuid }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
            <div className="w-full max-w-sm">
                {/* Digital ID Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-white font-bold text-lg">ConventionID</h1>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="px-6 py-6">
                        <div className="flex flex-col items-center text-center">
                            {/* Profile Picture */}
                            <div className="relative mb-4">
                                <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden border-4 border-blue-100">
                                    {userData.profileImage ? (
                                        <img
                                            src={userData.profileImage}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <User className="w-12 h-12 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                                <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <span className="text-white text-xs">+</span>
                                </label>
                            </div>

                            {/* Name */}
                            <input
                                type="text"
                                value={userData.name}
                                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                                className="text-xl font-bold text-gray-800 bg-transparent border-none text-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1 mb-2 w-full"
                                placeholder="Enter name"
                            />

                            {/* ID Code */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 mb-1">ID Code</p>
                                <div className="flex items-center gap-2">
                                    <code className="text-xs font-mono bg-gray-100 px-3 py-2 rounded-lg text-gray-700 break-all">
                                        {userData.uuid}
                                    </code>
                                    <button
                                        onClick={generateNewUUID}
                                        className="text-blue-600 hover:text-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                                    >
                                        New
                                    </button>
                                </div>
                            </div>

                            {/* QR Code */}
                            <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                                <div
                                    className="mx-auto"
                                    dangerouslySetInnerHTML={{ __html: generateQRCode(userData.uuid) }}
                                />
                                <p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                                    <QrCode className="w-3 h-3" />
                                    Scan to verify
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>Valid for event</span>
                            <span>{new Date().getFullYear()}</span>
                        </div>
                    </div>
                </div>

                {/* Demo Controls */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Tap the + button to upload a photo, or edit the name directly
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConventionIDCard;