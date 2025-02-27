"use client";
import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
//CONVEX PROVIER
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import {ClerkProvider} from "@clerk/clerk-react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex flex-col">
            <main className="relative flex bg-black-3">
                <LeftSidebar />
                <section className=" min-h-screen flex-1 flex-col p-4 sm:p-14">
                    <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                        <div className="flex h-16 items-center justify-between md:hidden">
                            {" "}
                            <Image src="/icons/logo.svg" width={30} height={30} alt="menu-icon" /> <MobileNav />
                        </div>
                        <div className="flex flex-col md:p-14">
                            Toaster
                            <ConvexClerkProvider>
                                <ClerkProvider>{children}</ClerkProvider>
                            </ConvexClerkProvider>
                        </div>
                    </div>
                </section>
                <RightSidebar />
            </main>
        </div>
    );
}
