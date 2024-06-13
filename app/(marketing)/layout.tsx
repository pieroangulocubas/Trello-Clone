import React from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function MarketingLayout({children}:{children:React.ReactNode}){
    return (
        <div className="h-full bg-slate-100">
            <main className="pt-40 pb-20 bg-slate-100">
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    )
}