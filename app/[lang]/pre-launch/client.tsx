"use client"
import { Button } from '@/components/Button'

export default function Client({ t }: any) {
    const content = t.COMING_SOON_LANDING;
    return (
        <>
            <div className="bg-center bg-cover bg-[url('https://images.pexels.com/photos/8761548/pexels-photo-8761548.jpeg')]">
                <main className="w-full min-h-screen relative bg-white/90">
                    <div className="w-full h-[75dvh] p-10 flex flex-col items-center text-center justify-center">
                        <h1 className="text-4xl font-semibold mb-3">{content.header}</h1>
                        <p className="text-md w-1/2 mb-5">{content.subheader}.</p>
                        <Button>{content.remind_btn}</Button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[25dvh] bg-pattern-1"></div>
                </main>
            </div>

        </>
    )
}