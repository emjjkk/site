import { Button } from '@/components/ui/button'
import { LuChevronDown } from 'react-icons/lu'
import Card from '@/components/course-card'

export default function client() {
    return (
        <>
            <main className="w-full border-b min-h-[150dvh]">
                <section id="hero" className="h-[calc(100vh-89px)]">
                    <div className="flex h-[85%] border-b">
                        <div className="w-1/2 h-full flex flex-col justify-center pl-10 pr-15">
                            <h1 className="text-5xl/[1.2] text-foreground font-bold mb-5">Gain Expertise, <br />Get Certified.</h1>
                            <p className="text-md mb-10">Empower your future: study from anywhere and earn verified credentials from accredited institutions across Africa and beyond — all on Africa's leading industry-standard education platform.</p>
                            <div className="flex">
                                <Button variant="default" size="default">Get started for free</Button>
                                <Button variant="ghost" size="default">Learn More</Button>
                            </div>
                        </div>
                        <div className="w-1/2 border-l"></div>
                    </div>
                    <div className="h-[15%] flex items-center justify-center px-10 py-7 gap-10 border-b">
                        <img src="https://theroom.zendesk.com/hc/theming_assets/01HZKW9ES92YB3R6A2RP0B6XFJ" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Alu_logo.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1075px-IBM_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nyu_short_color.svg/2560px-Nyu_short_color.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/University_of_Suffolk_Logo.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                    </div>
                </section>
                <section className="bg-pattern p-10 border-b">
                    <div className="flex items-center gap-2 mb-10">
                        <h1 className="text-2xl font-bold mr-5">Trending on Keita</h1>
                        <Button variant="outline" size="default" className="flex items-center gap-2">Professional Certifications <LuChevronDown /></Button>
                        <Button variant="outline" size="default" className="flex items-center gap-2">IT & Computer Science <LuChevronDown /></Button>
                        <Button variant="default" size="default" className="flex items-center gap-2">See All</Button>
                    </div>
                    <div className="flex gap-3 flex-wrap mb-10">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="bg-background p-10 min-h-screen">
                    <h1 className="text-xl mb-3 pl-1">For Students</h1>
                    <h1 className="text-5xl font-bold w-3/4 mb-10">Gain certified credentials and job-ready skills from reputable institutions across Africa and beyond.</h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[80vh]">
                        <div className="col-span-2 row-span-2 border">
                        </div>
                        <div className="col-start-3 border">2</div>
                        <div className="col-start-4 border">3</div>
                        <div className="col-start-3 row-start-2 border">4</div>
                        <div className="col-start-4 row-start-2 border">5</div>
                    </div>
                </section>
            </main>
        </>
    )
}