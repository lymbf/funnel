import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import React, {Suspense} from "react";
import GA from "@/components/GA/ga";

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
        <Suspense>
            <GA GA_MEASUREMENT_ID={'G-6NT3WL41ST'}/>
        </Suspense>

        <body
            className={`${lato.className} antialiased`}
        >
        {header}
        {children}
        </body>
        </html>
    );
}
