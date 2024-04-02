"use client";

import { Poppins } from "@/resources/fonts";


import "../globals.css";
import NextProvider from "../NextUIProvider";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <head>
      
       
      </head>
      <body className={Poppins.className}>
        <NextProvider>
          <main className="light text-foreground bg-background min-w-[1285px] w-screen min-h-screen font-poppins">
            
            {children}

         
          </main>
        </NextProvider>
      </body>
    </html>
  );
}
