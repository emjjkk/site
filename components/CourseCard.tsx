"use client"
import { Button } from './ui/button'

export default function CourseCard() {
    return (
        <div className="bg-white border overflow-hidden flex flex-col rounded-lg">
            <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 right-4 w-12 h-6 bg-white/90 rounded"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-foreground/60 bg-gray-100 px-2 py-1 rounded">Computer Science & IT</span>
                </div>
                <h3 className="text-lg font-semibold font-mono">Full Stack Development</h3>
                <h3 className="text-md font-semibold mb-4 text-neutral-500">African Leadership University</h3>
                <p className="text-sm text-foreground/70 mb-5 flex-1">Master modern web development with React, Node.js, and cloud deployment techniques for real-world applications.</p>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/60">Approx. duration</span>
                    <span className="text-sm font-bold">2 weeks</span>
                </div>
                <div className="flex items-center justify-between mb-5">
                    <span className="text-sm text-foreground/60">Price</span>
                    <span className="text-sm font-bold">20000 RWF</span>
                </div>
                <Button className="w-full mt-auto rounded-lg font-mono">Learn More</Button>
            </div>
        </div>
    )
}