'use client';
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
          className="rounded-tb-md rounded-tl-md bg-[rgba(255,255,255,0.1)] p-1 px-3"
          type="button"
        >
          <MdOutlineMarkEmailUnread className="text-text6" />
        </button>

        <div className="relative w-full">
          <input
            type="email"
            id="search-dropdown"
            className="z-20 block w-full rounded-e-lg border border-transparent bg-[rgba(255,255,255,0.1)] p-2.5 text-sm text-gray-900 text-white"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscript
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubscriptionForm;
