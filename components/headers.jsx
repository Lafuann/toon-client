"use client";

import Image from "next/image";
import { Fredoka } from "next/font/google";
import { SearchInput } from "./form";
import { useState } from "react";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import { DropdownButton } from "./buttons";

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export function PrimaryHeader() {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }
    return (
        <header className="sticky top-0 flex flex-col">
            <div className="bg-primary-toon z-[999] w-full h-36 flex flex-row gap-8 justify-center items-center">
                <div className="flex gap-2 items-center h-full w-max">
                    <div className="w-20 h-max flex justify-center rounded-2xl bg-slate-50">
                        <Image
                            src={"/toon-logo.png"}
                            alt="logo"
                            objectFit="contain"
                            layout="responsive"
                            width={1}
                            height={1}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col items-start -space-y-2 justify-start">
                        <h1
                            className={`text-white font-bold ${fredoka.className}`}
                        >
                            TOON
                        </h1>
                        <p
                            className={`text-white font-medium ${fredoka.className}`}
                        >
                            Toko Online
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/2 h-max pt-6">
                    <SearchInput
                        name={"search"}
                        placeholder={"Cari produk yang anda inginkan"}
                        onChange={handleChange}
                        value={value}
                    />
                    <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            Lorem ipsum dolor
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            ipsum amet, sit amet
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            Lorem ipsum dolor
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            ipsum amet, sit amet
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            Lorem ipsum dolor
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            ipsum amet, sit amet
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            Lorem ipsum dolor
                        </a>
                        <a className="cursor-pointer text-white text-xs hover:underline">
                            ipsum amet, sit amet
                        </a>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center text-white">
                    <Link href={"/"}>
                        <FaShoppingCart className="text-white" size={20} />
                    </Link>
                    |
                    <Link href={"/auth/signin"}>
                        <span className="text-white text-sm cursor-pointer">
                            Daftar
                        </span>
                    </Link>
                    |
                    <Link href={"/auth/signup"}>
                        <span className="text-white text-sm cursor-pointer">
                            Masuk
                        </span>
                    </Link>
                    |
                    <DropdownButton
                        iconLeft={
                            <MdLanguage className="text-white" size={20} />
                        }
                        chevron={
                            <FaChevronDown className="text-white text-xs" />
                        }
                    />
                    {/* <button className="flex flex-row gap-1 items-center cursor-pointer">
                        {" "}
                        <span className="text-white text-sm">
                            Bahasa Indonesia
                        </span>
                    </button> */}
                </div>
            </div>
        </header>
    );
}
