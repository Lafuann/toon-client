import "../../globals.css";
import { PrimaryLayout } from "@/components/layouts";
import React from "react";

export const metadata = {
    title: "TOON - Toko Online",
    description: "Created by Naufal",
};

const AuthLayout = ({ children }) => {
    return <PrimaryLayout>{children}</PrimaryLayout>;
};

export default AuthLayout;
