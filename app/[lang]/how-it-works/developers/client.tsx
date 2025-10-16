"use client"

import DesktopHeader from "@/components/DesktopHeader"
import Footer from "@/components/Footer"
import MobileHeader from "@/components/MobileHeader"

export default function ({ dict }: any) {
    return (
        <>
            <DesktopHeader dict={dict} />
            <div className="block lg:hidden"><MobileHeader dict={dict} /></div>
            <main className="min-h-screen">
                <div className="w-full bg-neutral-50 ">
                    <div className="h-full px-4 md:px-12 py-6 flex flex-col">
                        <p className="text-sm text-neutral-500 mb-3">Home / How It Works / For Developers</p>
                        <h1 className="text-4xl font-bold font-mono">For Developers</h1>
                        <p className="md:w-2/4 text-lg text-neutral-600">Integrate our platform APIs and build educational apps.</p>
                        <p className="md:w-2/4 text-lg text-neutral-600"></p>
                    </div>
                    <div className="w-full h-[60px] bg-pattern-subtle"></div>
                </div>
            </main>
            <Footer dict={dict} />
        </>
    )
}