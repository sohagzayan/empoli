'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { cn } from '@/lib/utils'; // Adjust the import path as necessary
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

interface SelectOption {
  label: string;
  value: string;
}

interface SelectDropdownProps {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  selectedClassName?: string;
  dropdownClassName?: string;
  label?: string;
  showLabel?: boolean;
  labelClassName?: string;
  icon?: React.ElementType | null; // Optional icon
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  placeholder = 'Select an option',
  className = '',
  selectedClassName = '',
  dropdownClassName = '',
  label = 'Label',
  showLabel = false, // Label visibility is controlled by this prop
  labelClassName = '',
  icon: Icon = null, // Optional icon, default is null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(null);

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative w-full', className)}>
      {/* Conditionally render the label if showLabel is true */}
      {showLabel && (
        <label
          className={cn('mb-2 block font-semibold text-white', labelClassName)}
        >
          {label}
        </label>
      )}

      {/* Selected value box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between rounded-full bg-[rgba(255,255,255,0.06)] px-4 py-3 text-white',
          selectedClassName,
        )}
      >
        <span>{selected ? selected.label : placeholder}</span>
        {Icon && <Icon className="ml-2" />} {/* Optional icon */}
        {isOpen ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </div>

      {/* Dropdown options with Framer Motion animation and AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={cn(
              'absolute z-10 w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#181C3B] shadow-lg',
              dropdownClassName,
            )}
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cn(
                  'flex cursor-pointer items-center justify-between rounded-lg p-3 text-gray-400 hover:text-theme1',
                  selected?.value === option.value ? 'text-white' : '',
                )}
              >
                <span>{option.label}</span>
                {selected?.value === option.value && (
                  <span className="text-blue-400">&#10003;</span> // Check mark
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectDropdown;
