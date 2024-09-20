"use client"
import { useState } from 'react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('All categories');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log(`Subscribed to: ${category}, with email: ${email}`);
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setDropdownOpen(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <button
                    id="dropdown-button"
                    onClick={toggleDropdown}
                    className="bg-[rgba(255,255,255,0.1)] px-3 p-1 rounded-tl-md rounded-tb-md"
                    type="button"
                >
                    <MdOutlineMarkEmailUnread className='text-text6' />
                </button>



                <div className="relative w-full">
                    <input
                        type="email"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-[rgba(255,255,255,0.1)] rounded-e-lg border border-transparent text-white "
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Subscript
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SubscriptionForm;
