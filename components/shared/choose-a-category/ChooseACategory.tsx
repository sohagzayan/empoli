"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ChooseACategory = () => {

    return (
        <Select>
            <SelectTrigger className="w-full outline-none border-none">
                <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="apple">Residential</SelectItem>
                    <SelectItem value="banana">Commercial</SelectItem>
                    <SelectItem value="blueberry">Industrial</SelectItem>
                    <SelectItem value="grapes">Apartments</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default ChooseACategory