import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import React, {Suspense} from "react";
import GA from "@/components/GA/ga";
import { Analytics } from "@vercel/analytics/next"
import CookieBanner from "@/components/cookie/cookieBanner";
import MetaPixelRuntime from "@/components/FBPixel/metaPixelRuntime";
const lato = Lato({
    variable: '--font-lato-sans',
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "HierFenster.de",
    description: "Jetzt Angebot sichern!",
};

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";


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
            <GA GA_MEASUREMENT_ID={'AW-11437617885'}/>
        </Suspense>

        <body
            className={`${lato.className} antialiased`}
        >
        <Analytics/>
        {header}
        {children}
        <CookieBanner/>
        <MetaPixelRuntime pixelId={META_PIXEL_ID} />
        </body>
        </html>
    );
}
