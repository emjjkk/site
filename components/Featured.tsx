"use client"
import { LuFilter } from 'react-icons/lu'
import { Button } from './ui/button'
import CourseCard from './CourseCard'

export default function Featured({ dict }: any) {
    return (
        <>
            <section id="featured" className="relative bg-neutral-100 min-h-[50dvh]">
                <div className="w-full absolute bottom-0 h-[50%] bg-pattern-subtle"></div>
                <div className="w-full h-full p-5 md:p-12 relative">
                    <div className="md:flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold font-mono mb-2 md:mb-0">Featured Programs</h2>
                        <div className="flex items-center gap-2">
                            <button className="font-mono h-10 w-10 text-white flex items-center justify-center bg-[#000] hover:bg-[#f44034ff] hover:cursor-pointer rounded-lg text-md capitalize"><LuFilter /></button>
                            <a href="/signup"><button className="font-mono h-10 flex items-center justify-center px-5 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] hover:cursor-pointer rounded-lg text-sm capitalize">See all programs</button></a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </section>
        </>
    )
}