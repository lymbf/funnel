import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import React from "react";

const lato = Lato({
    variable: '--font-lato-sans',
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "HierFenster.de",
    description: "Jetzt Angebot sichern!",
};

export default function RootLayout({
                                       children,
                                       header,
                                       header2
                                   }: Readonly<{
    children: React.ReactNode;
    header: React.ReactNode;
    header2: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${lato.className} antialiased`}
        >
        {header}
        {children}
        </body>
        </html>
    );
}
