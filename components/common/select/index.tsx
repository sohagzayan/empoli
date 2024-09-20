"use client";
import * as React from "react";

import {
    Select as SelectPrimitive,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    name?: string;
    placeholder?: string;
    options: SelectOption[];
    triggerClassName?: string;
    contentClassName?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    icon?: React.ReactNode; // Optional icon for the SelectTrigger
}

const Select: React.FC<SelectProps> = ({
    name = "select",
    placeholder = "Select an option",
    options = [],
    triggerClassName = "",
    contentClassName = "",
    defaultValue = "",
    onChange,
    icon, // Optional icon for the entire select
}) => {
    const handleValueChange = (value: string) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <SelectPrimitive name={name} defaultValue={defaultValue}>
            <SelectTrigger className={`flex items-center gap-2 no-ring-shadow ${triggerClassName}`}>
                {icon && <span>{icon}</span>} {/* Render the common icon */}
                <SelectValue className="no-ring-shadow" placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={`focus:outline-none focus:ring-0 focus:border-0 border-0 outline-none ring-0 ${contentClassName}`}>
                <SelectGroup>
                    <SelectLabel>{name}</SelectLabel>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className="focus:outline-none focus:ring-0 focus:border-0 border-0 outline-none ring-0"
                            onSelect={() => handleValueChange(option.value)} // Call onChange on selection
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </SelectPrimitive>
    );
};

export default Select;
