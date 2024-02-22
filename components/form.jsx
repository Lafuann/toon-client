"use client";
import { FaSearch } from "react-icons/fa";

export function SearchInput({ placeholder, onChange, value, name }) {
    return (
        <div className="relative w-full">
            <input
                name={name}
                type="search"
                className="bg-white w-full h-16 py-4 pl-8 pr-32 rounded-2xl focus:outline-none"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <div className="absolute top-0 right-0 h-full w-32 p-2 flex justify-center items-center">
                <button className="h-full w-full bg-primary-toon flex gap-2 justify-center items-center rounded-lg hover:brightness-95">
                    <span className="text-white text-lg ">Cari</span>
                    <FaSearch className="text-white" />
                </button>
            </div>
        </div>
    );
}
