"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function DropdownButton({ iconLeft, chevron }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleOpen() {
        setIsOpen(!isOpen);
    }
    console.log("isOpen", isOpen);
    return (
        <button
            onClick={handleOpen}
            className="flex flex-row gap-1 items-center cursor-pointer"
        >
            <span>{iconLeft ?? iconLeft}</span>
            <span className="text-white text-sm">Bahasa Indonesia</span>
            <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {chevron ?? chevron}
            </motion.span>
        </button>
    );
}
