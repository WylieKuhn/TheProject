import React, { useState } from 'react';
import {
    Users,
    Calendar,
    Clock,
    Settings,
    Menu,
    X,
    Search,
    Plus,
    Filter,
    MapPin,
    UserCheck,
    Edit,
    Trash2,
    DollarSign,
    TrendingUp,
    TrendingDown
} from 'lucide-react';

function ConventionAdminPanel() {
    const [activeTab, setActiveTab] = useState('roster');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingAssignment, setEditingAssignment] = useState(null);
    const [filterType, setFilterType] = useState('all');
    const [showAddPersonModal, setShowAddPersonModal] = useState(false);
    const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);
    const [transactionType, setTransactionType] = useState('income');
    const [financeFilterType, setFinanceFilterType] = useState('all');
    const [financeFilterCategory, setFinanceFilterCategory] = useState('all');
    const [assignments, setAssignments] = useState([
        { id: 1, staff: 'John Manager', role: 'Event Coordinator', event: 'Opening Ceremony', startTime: '08:00', endTime: '12:00', room: 'Main Hall' },
        { id: 2, staff: 'Sarah Lead', role: 'Volunteer Coordinator', event: 'Registration', startTime: '08:00', endTime: '18:00', room: 'Lobby' },
        { id: 3, staff: 'Mike Tech', role: 'Technical Support', event: 'All Events', startTime: '09:00', endTime: '17:00', room: 'Various' }
    ]);
    const [roster, setRoster] = useState([
        {
            id: 1,
            name: 'John Manager',
            position: 'Event Coordinator',
            email: 'john.manager@convention.com',
            phone: '(555) 123-4567',
            hotelRoom: '512',
            role: 'Registration',
            status: 'Active',
            hours: 32,
            type: 'staff'
        },
        {
            id: 2,
            name: 'Sarah Lead',
            position: 'Volunteer Coordinator',
            email: 'sarah.lead@convention.com',
            phone: '(555) 234-5678',
            hotelRoom: '418',
            role: 'Guest Relations',
            status: 'Active',
            hours: 28,
            type: 'staff'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            position: 'Volunteer',
            email: 'alice@email.com',
            phone: '(555) 345-6789',
            hotelRoom: '203',
            role: 'Registration',
            status: 'Active',
            hours: 24,
            type: 'volunteer'
        },
        {
            id: 4,
            name: 'Bob Smith',
            position: 'Volunteer',
            email: 'bob@email.com',
            phone: '(555) 456-7890',
            hotelRoom: '107',
            role: 'Security',
            status: 'Active',
            hours: 16,
            type: 'volunteer'
        },
        {
            id: 5,
            name: 'Carol White',
            position: 'Volunteer',
            email: 'carol@email.com',
            phone: '(555) 567-8901',
            hotelRoom: '325',
            role: 'Guest Relations',
            status: 'Inactive',
            hours: 8,
            type: 'volunteer'
        },
    ]);
    const [transactions, setTransactions] = useState([
        // Income
        { id: 1, type: 'income', category: 'Attendee Registration', description: 'General Admission Tickets', amount: 45000, date: '2024-03-01' },
        { id: 2, type: 'income', category: 'Sponsorship', description: 'Platinum Sponsor - TechCorp', amount: 25000, date: '2024-02-15' },
        { id: 3, type: 'income', category: 'Vendor Registration', description: 'Vendor Booth Fees', amount: 18000, date: '2024-02-20' },
        { id: 4, type: 'income', category: 'Attendee Registration', description: 'VIP Tickets', amount: 12000, date: '2024-03-05' },
        { id: 5, type: 'income', category: 'Sponsorship', description: 'Gold Sponsor - Innovation Labs', amount: 15000, date: '2024-02-25' },

        // Expenses
        { id: 6, type: 'expense', category: 'Venue Rental', description: 'Convention Center - 3 Days', amount: -22000, date: '2024-01-15' },
        { id: 7, type: 'expense', category: 'Staff Salaries', description: 'Event Staff Wages', amount: -18000, date: '2024-03-01' },
        { id: 8, type: 'expense', category: 'Guest Payments', description: 'Keynote Speaker Fee', amount: -8000, date: '2024-02-10' },
        { id: 9, type: 'expense', category: 'Manufacturing', description: 'Badge Production', amount: -3500, date: '2024-02-28' },
        { id: 10, type: 'expense', category: 'Supplies', description: 'Registration Supplies & Materials', amount: -2800, date: '2024-02-20' },
        { id: 11, type: 'expense', category: 'Manufacturing', description: 'Pamphlet & Program Printing', amount: -4200, date: '2024-02-25' },
        { id: 12, type: 'expense', category: 'Manufacturing', description: 'Signage & Banners', amount: -5800, date: '2024-02-22' },
        { id: 13, type: 'expense', category: 'Guest Payments', description: 'Panel Speaker Honorariums', amount: -6000, date: '2024-02-28' }
    ]);

    // Sample data
    const volunteers = [
        { id: 1, name: 'Alice Johnson', email: 'alice@email.com', role: 'Registration', status: 'Active', hours: 24 },
        { id: 2, name: 'Bob Smith', email: 'bob@email.com', role: 'Security', status: 'Active', hours: 16 },
        { id: 3, name: 'Carol White', email: 'carol@email.com', role: 'Guest Relations', status: 'Inactive', hours: 8 },
        { id: 4, name: 'David Brown', email: 'david@email.com', role: 'Tech Support', status: 'Active', hours: 32 },
    ];

    const events = [
        { id: 1, title: 'Opening Ceremony', time: '09:00', room: 'Main Hall', date: '2024-03-15' },
        { id: 2, title: 'Panel Discussion', time: '10:30', room: 'Room A', date: '2024-03-15' },
        { id: 3, title: 'Workshop', time: '14:00', room: 'Room B', date: '2024-03-15' },
        { id: 4, title: 'Vendor Fair', time: '16:00', room: 'Exhibition Hall', date: '2024-03-15' },
    ];

    const availableStaff = roster.map(person => person.name);

    const handleEditAssignment = (assignment) => {
        setEditingAssignment({
            ...assignment,
            originalId: assignment.id
        });
    };

    const handleSaveAssignment = () => {
        setAssignments(prev => prev.map(assignment =>
            assignment.id === editingAssignment.originalId ? editingAssignment : assignment
        ));
        setEditingAssignment(null);
    };

    const handleCancelEdit = () => {
        setEditingAssignment(null);
    };

    const handleAddPerson = (personData) => {
        const newPerson = {
            ...personData,
            id: Math.max(...roster.map(p => p.id)) + 1,
            hours: 0
        };
        setRoster(prev => [...prev, newPerson]);
        setShowAddPersonModal(false);
    };

    const handleAddTransaction = (transactionData) => {
        const newTransaction = {
            ...transactionData,
            id: Math.max(...transactions.map(t => t.id)) + 1,
            amount: transactionData.type === 'expense' ? -Math.abs(transactionData.amount) : Math.abs(transactionData.amount)
        };
        setTransactions(prev => [...prev, newTransaction]);
        setShowAddTransactionModal(false);
    };

    const menuItems = [
        { id: 'roster', label: 'Roster', icon: Users },
        { id: 'calendar', label: 'Event Calendar', icon: Calendar },
        { id: 'scheduling', label: 'Staff Scheduling', icon: Clock },
        { id: 'finances', label: 'Finances', icon: DollarSign },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const filteredRoster = roster.filter(person => {
        const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.position.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterType === 'all' || person.type === filterType;

        return matchesSearch && matchesFilter;
    });

    const AddPersonModal = ({ onAdd, onClose }) => {
        const [formData, setFormData] = useState({
            name: '',
            position: '',
            email: '',
            phone: '',
            hotelRoom: '',
            role: '',
            status: 'Active',
            type: 'volunteer'
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            onAdd(formData);
            setFormData({
                name: '',
                position: '',
                email: '',
                phone: '',
                hotelRoom: '',
                role: '',
                status: 'Active',
                type: 'volunteer'
            });
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Add New Person</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        type: e.target.value,
                                        position: e.target.value === 'volunteer' ? 'Volunteer' : ''
                                    }))}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="volunteer">Volunteer</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                            <input
                                type="text"
                                required
                                value={formData.position}
                                onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                                placeholder={formData.type === 'volunteer' ? 'Volunteer' : 'e.g., Event Coordinator'}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                    placeholder="(555) 123-4567"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Room Number</label>
                                <input
                                    type="text"
                                    value={formData.hotelRoom}
                                    onChange={(e) => setFormData(prev => ({ ...prev, hotelRoom: e.target.value }))}
                                    placeholder="e.g., 512"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                                <select
                                    required
                                    value={formData.role}
                                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select role...</option>
                                    <option value="Registration">Registration</option>
                                    <option value="Security">Security</option>
                                    <option value="Guest Relations">Guest Relations</option>
                                    <option value="Tech Support">Tech Support</option>
                                    <option value="Event Coordinator">Event Coordinator</option>
                                    <option value="Volunteer Coordinator">Volunteer Coordinator</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Add Person
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const AddTransactionModal = ({ type, onAdd, onClose }) => {
        const [formData, setFormData] = useState({
            type: type,
            category: '',
            description: '',
            amount: '',
            date: new Date().toISOString().split('T')[0]
        });

        const incomeCategories = ['Attendee Registration', 'Sponsorship', 'Vendor Registration', 'Merchandise', 'Other'];
        const expenseCategories = ['Staff Salaries', 'Venue Rental', 'Guest Payments', 'Supplies', 'Manufacturing', 'Marketing', 'Other'];

        const categories = type === 'income' ? incomeCategories : expenseCategories;

        const handleSubmit = (e) => {
            e.preventDefault();
            onAdd(formData);
            setFormData({
                type: type,
                category: '',
                description: '',
                amount: '',
                date: new Date().toISOString().split('T')[0]
            });
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Add {type === 'income' ? 'Income' : 'Expense'}
                        </h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                            <select
                                required
                                value={formData.category}
                                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select category...</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                            <input
                                type="text"
                                required
                                value={formData.description}
                                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter description"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Amount *</label>
                            <input
                                type="number"
                                required
                                min="0"
                                step="0.01"
                                value={formData.amount}
                                onChange={(e) => setFormData(prev => ({ ...prev, amount: parseFloat(e.target.value) || '' }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="0.00"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                            <input
                                type="date"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Add {type === 'income' ? 'Income' : 'Expense'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const renderFinances = () => {
        const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
        const totalExpenses = Math.abs(transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0));
        const netProfit = totalIncome - totalExpenses;

        const incomeByCategory = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
                return acc;
            }, {});

        const expensesByCategory = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
                return acc;
            }, {});

        // Get unique categories for filter dropdown
        const allCategories = [...new Set(transactions.map(t => t.category))].sort();

        // Filter transactions based on selected filters
        const filteredTransactions = transactions.filter(transaction => {
            const matchesType = financeFilterType === 'all' || transaction.type === financeFilterType;
            const matchesCategory = financeFilterCategory === 'all' || transaction.category === financeFilterCategory;
            return matchesType && matchesCategory;
        });

        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(amount);
        };

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                setTransactionType('income');
                                setShowAddTransactionModal(true);
                            }}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                        >
                            <Plus size={16} />
                            Add Income
                        </button>
                        <button
                            onClick={() => {
                                setTransactionType('expense');
                                setShowAddTransactionModal(true);
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
                        >
                            <Plus size={16} />
                            Add Expense
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Income</p>
                                <p className="text-3xl font-bold text-green-600">{formatCurrency(totalIncome)}</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                                <p className="text-3xl font-bold text-red-600">{formatCurrency(totalExpenses)}</p>
                            </div>
                            <TrendingDown className="h-8 w-8 text-red-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Net Profit</p>
                                <p className={`text-3xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {formatCurrency(netProfit)}
                                </p>
                            </div>
                            <DollarSign className="h-8 w-8 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Income and Expenses by Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Income by Category</h3>
                        <div className="space-y-3">
                            {Object.entries(incomeByCategory).map(([category, amount]) => (
                                <div key={category} className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">{category}</span>
                                    <span className="font-medium text-green-600">{formatCurrency(amount)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses by Category</h3>
                        <div className="space-y-3">
                            {Object.entries(expensesByCategory).map(([category, amount]) => (
                                <div key={category} className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">{category}</span>
                                    <span className="font-medium text-red-600">{formatCurrency(amount)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900">Transactions</h3>
                            <div className="flex gap-3 items-center">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setFinanceFilterType('all');
                                            setFinanceFilterCategory('all');
                                        }}
                                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                            financeFilterType === 'all'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        All ({transactions.length})
                                    </button>
                                    <button
                                        onClick={() => {
                                            setFinanceFilterType('income');
                                            setFinanceFilterCategory('all');
                                        }}
                                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                            financeFilterType === 'income'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        Income ({transactions.filter(t => t.type === 'income').length})
                                    </button>
                                    <button
                                        onClick={() => {
                                            setFinanceFilterType('expense');
                                            setFinanceFilterCategory('all');
                                        }}
                                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                            financeFilterType === 'expense'
                                                ? 'bg-red-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        Expenses ({transactions.filter(t => t.type === 'expense').length})
                                    </button>
                                </div>

                                <select
                                    value={financeFilterCategory}
                                    onChange={(e) => setFinanceFilterCategory(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Categories</option>
                                    {allCategories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.slice().reverse().map((transaction) => (
                                    <tr key={transaction.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {new Date(transaction.date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.type === 'income'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                          {transaction.type}
                        </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {transaction.category}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {formatCurrency(Math.abs(transaction.amount))}
                        </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                <Edit size={16} />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-sm text-gray-500">
                                        No transactions found matching the selected filters.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {showAddTransactionModal && (
                    <AddTransactionModal
                        type={transactionType}
                        onAdd={handleAddTransaction}
                        onClose={() => setShowAddTransactionModal(false)}
                    />
                )}
            </div>
        )
    };

    const renderRoster = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Roster Management</h2>
                <button
                    onClick={() => setShowAddPersonModal(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                    <Plus size={16} />
                    Add Staff/Volunteer
                </button>
            </div>

            <div className="flex gap-4 items-center flex-wrap">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search roster..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setFilterType('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            filterType === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        All ({roster.length})
                    </button>
                    <button
                        onClick={() => setFilterType('staff')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            filterType === 'staff'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Staff ({roster.filter(p => p.type === 'staff').length})
                    </button>
                    <button
                        onClick={() => setFilterType('volunteer')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            filterType === 'volunteer'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Volunteers ({roster.filter(p => p.type === 'volunteer').length})
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name & Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position & Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel Room</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRoster.map((person) => (
                        <tr key={person.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                    <div className="text-sm text-gray-500">{person.email}</div>
                                    <div className="text-sm text-gray-500">{person.phone}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{person.position}</div>
                                    <div className="text-sm text-gray-500">{person.role}</div>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        person.type === 'staff' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                    }`}>
                      {person.type}
                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {person.hotelRoom || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      person.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {person.status}
                  </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.hours}h</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                    <Edit size={16} />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showAddPersonModal && (
                <AddPersonModal
                    onAdd={handleAddPerson}
                    onClose={() => setShowAddPersonModal(false)}
                />
            )}
        </div>
    );

    const renderCalendar = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Event Calendar</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                    <Plus size={16} />
                    Add Event
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="p-2 text-center font-medium text-gray-500 text-sm">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 35 }, (_, i) => (
                            <div key={i} className="aspect-square p-2 border border-gray-100 hover:bg-gray-50 cursor-pointer">
                                <div className="text-sm text-gray-900">{(i % 31) + 1}</div>
                                {i === 14 && (
                                    <div className="mt-1">
                                        <div className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded">
                                            Opening
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Today's Events</h3>
                    <div className="space-y-3">
                        {events.map((event) => (
                            <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                                <div className="font-medium text-gray-900">{event.title}</div>
                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                    <Clock size={12} />
                                    {event.time}
                                </div>
                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                    <MapPin size={12} />
                                    {event.room}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderScheduling = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Staff & Volunteer Scheduling</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                    <Plus size={16} />
                    New Assignment
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Current Assignments</h3>
                    <div className="space-y-4">
                        {assignments.map((assignment) => (
                            <div key={assignment.id} className="border border-gray-200 rounded-lg p-4">
                                {editingAssignment && editingAssignment.originalId === assignment.id ? (
                                    // Edit form
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="font-medium text-gray-900">Edit Assignment</h4>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleSaveAssignment}
                                                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancelEdit}
                                                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Staff/Volunteer</label>
                                            <select
                                                value={editingAssignment.staff}
                                                onChange={(e) => setEditingAssignment(prev => ({ ...prev, staff: e.target.value }))}
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                {availableStaff.map(staff => (
                                                    <option key={staff} value={staff}>{staff}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Event</label>
                                            <select
                                                value={editingAssignment.event}
                                                onChange={(e) => setEditingAssignment(prev => ({ ...prev, event: e.target.value }))}
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="Opening Ceremony">Opening Ceremony</option>
                                                <option value="Panel Discussion">Panel Discussion</option>
                                                <option value="Workshop">Workshop</option>
                                                <option value="Registration">Registration</option>
                                                <option value="All Events">All Events</option>
                                                <option value="Vendor Fair">Vendor Fair</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                                                <input
                                                    type="time"
                                                    value={editingAssignment.startTime}
                                                    onChange={(e) => setEditingAssignment(prev => ({ ...prev, startTime: e.target.value }))}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                                                <input
                                                    type="time"
                                                    value={editingAssignment.endTime}
                                                    onChange={(e) => setEditingAssignment(prev => ({ ...prev, endTime: e.target.value }))}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Room/Location</label>
                                            <input
                                                type="text"
                                                value={editingAssignment.room}
                                                onChange={(e) => setEditingAssignment(prev => ({ ...prev, room: e.target.value }))}
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // Display view
                                    <>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="font-medium text-gray-900">{assignment.staff}</div>
                                                <div className="text-sm text-gray-500">{assignment.role}</div>
                                            </div>
                                            <button
                                                onClick={() => handleEditAssignment(assignment)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                <Edit size={16} />
                                            </button>
                                        </div>
                                        <div className="mt-2 space-y-1">
                                            <div className="text-sm text-gray-600">Event: {assignment.event}</div>
                                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                                <Clock size={12} />
                                                {assignment.startTime}-{assignment.endTime}
                                            </div>
                                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                                <MapPin size={12} />
                                                {assignment.room}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Assign</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Staff/Volunteer</label>
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>Select person...</option>
                                <option>Alice Johnson</option>
                                <option>Bob Smith</option>
                                <option>Carol White</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Event</label>
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>Select event...</option>
                                <option>Opening Ceremony</option>
                                <option>Panel Discussion</option>
                                <option>Workshop</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                                <input type="time" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                                <input type="time" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Room/Location</label>
                            <input type="text" placeholder="Enter room or location" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Create Assignment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Convention Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Convention Name</label>
                                <input type="text" defaultValue="Tech Convention 2024" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <input type="text" defaultValue="Convention Center Downtown" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                                <span className="ml-2 text-sm text-gray-700">Email notifications for new volunteers</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                                <span className="ml-2 text-sm text-gray-700">Schedule change notifications</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                                <span className="ml-2 text-sm text-gray-700">Daily summary reports</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'roster':
                return renderRoster();
            case 'calendar':
                return renderCalendar();
            case 'scheduling':
                return renderScheduling();
            case 'finances':
                return renderFinances();
            case 'settings':
                return renderSettings();
            default:
                return renderRoster();
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        {sidebarOpen && <h1 className="text-xl font-bold text-gray-900">ConventionPro</h1>}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                            activeTab === item.id
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        <Icon size={20} />
                                        {sidebarOpen && <span>{item.label}</span>}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                <UserCheck size={16} />
                                Convention Live
                            </div>
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default ConventionAdminPanel;