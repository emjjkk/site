'use client'

import { LuArrowRight } from 'react-icons/lu'

export default function HeroSection({ dict }: any) {
    const d = dict

    return (
        <section className="relative w-full md:min-h-[85dvh] flex flex-col items-center justify-center px-4 md:px-10 py-20 border-b">
            {/* Main Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6 leading-tight">
                    {d.hero.title.split('\\n').map((line: string, index: number) => (
                        <span key={index}>
                            {line}
                            {index === 0 && <br />}
                        </span>
                    ))}
                </h1>

                {/* Subheading */}
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                    {d.hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center gap-3 mb-20 md:mb-[110px]">
                    <a href="/signup">
                        <button className="font-mono py-3 px-5 text-white bg-[#f44034ff] hover:bg-[#d63529ff]  border-2 border-[#f44034ff]  rounded-full text-sm transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                            {d.hero.cta.get_started}
                            <LuArrowRight className="text-sm" />
                        </button>
                    </a>
                    <a href="/courses">
                        <button className="font-mono py-3 px-5 text-neutral-800 bg-white hover:bg-neutral-50 border-2 border-neutral-300 rounded-full text-sm transition-colors w-full sm:w-auto">
                            {d.hero.cta.browse_courses}
                        </button>
                    </a>
                </div>
            </div>
            <div className="md:absolute md:bottom-0 md:left-0 w-full py-8 border-t hidden md:flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-6 sm:gap-8 lg:gap-10 items-center justify-center px-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Alu_logo.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/University_of_Suffolk_Logo.png/1200px-University_of_Suffolk_Logo.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm0-GZZjdfHQsEn9dw8ajQfJcvo_YwqjMtQ&s" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1075px-IBM_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihVSvF9oqeR6OrMlmUiF07pjpZ-3mutphQw&s" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                </div>
            </div>
        </section>
    )
}