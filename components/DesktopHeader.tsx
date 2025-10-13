'use client'

import { useState, useEffect } from 'react'
import { LuMailOpen, LuPhoneCall, LuChevronDown, LuArrowUpRight, LuArrowRight, LuGraduationCap, LuBuilding, LuCode } from 'react-icons/lu'

export default function DesktopHeader({ dict }: any) {
    const d = dict
    const [extendedMenu, setExtendedMenu] = useState('false')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className="w-full py-2 px-14 hidden lg:flex items-center justify-between border-b">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1 text-sm">{d.lang}<LuChevronDown /></div>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-sm flex items-center gap-1"><LuMailOpen />{d.header.contact.email}</p>
                    <p className="text-sm flex items-center gap-1"><LuPhoneCall />{d.header.contact.phone}</p>
                </div>
            </div>
            <div className={`sticky top-0 z-[999] ${scrolled ? 'border-b' : ''} `}>
                <div className="bg-white w-full hidden lg:flex items-center justify-between px-12 py-2 z-[999]">
                    <div className="flex items-center gap-6">
                        <img src="/assets/logo.png" alt="Keita" className="h-6 w-auto relative bottom-[2px]" />
                    </div>
                    <div className="flex items-center gap-7">
                        <div className="flex items-center gap-4 relative">
                            <a onClick={() => setExtendedMenu(extendedMenu === 'courses' ? 'false' : 'courses')} className="hover:cursor-pointer text-md flex items-center gap-1 capitalize hover:text-[#f44034ff]">{d.header.nav.courses}<LuChevronDown className='text-sm relative' /></a>
                            <a onClick={() => setExtendedMenu(extendedMenu === 'hiw' ? 'false' : 'hiw')} className="cursor-pointer text-md flex items-center gap-1 capitalize hover:text-[#f44034ff]">{d.header.nav.how_it_works}<LuChevronDown className='text-sm relative' /></a>
                            <a href="/blog" className="text-md flex items-center gap-1 capitalize hover:text-[#f44034ff]">{d.header.nav.news}</a>
                        </div>
                        <a href="/signup"><button className="font-mono py-3 px-5 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] hover:cursor-pointer rounded-lg text-sm capitalize">{d.header.get_started}</button></a>
                    </div>
                </div>
                {extendedMenu != 'false' ? (
                    <div className="absolute w-full px-12 z-[999]">
                        {extendedMenu == "courses" ? (
                            <div className="bg-neutral-50 rounded-lg border border-1 border-neutral-300 min-h-64 ">
                                <div className="w-full flex items-center justify-center px-8 pt-5">
                                    <div className="flex items-center border border-neutral-400 border-1 rounded-full p-[2px] w-2/4">
                                        <input type="text" name="" id="" className="py-3 px-5 text-sm outline-none flex-1" placeholder={d.header.courses_menu.search_placeholder} />
                                        <button type="submit" className="text-sm rounded-full py-3 px-5 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] flex items-center gap-1">{d.header.courses_menu.search_button}<LuArrowRight /></button>
                                    </div>
                                </div>
                                <div className="w-full flex justify-between gap-16 px-8 py-5">
                                    <div className='w-1/3'>
                                        <h2 className="text-md font-mono mb-3">{d.header.courses_menu.featured_title}</h2>
                                        <div className="flex border rounded-lg mb-2">
                                            <div className="rounded-lg bg-slate-200 w-1/3"></div>
                                            <div className="p-3 w-2/3">
                                                <p className="text-lg mb-2">CS50x: Introduction to Computer Science</p>
                                                <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.courses_menu.learn_more} <LuArrowUpRight /> </a>
                                            </div>
                                        </div>
                                        <div className="flex border rounded-lg mb-2">
                                            <div className="rounded-lg bg-slate-200 w-1/3"></div>
                                            <div className="p-3 w-2/3">
                                                <p className="text-lg mb-2">Diploma in Supply Chain Management</p>
                                                <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.courses_menu.learn_more} <LuArrowUpRight /> </a>
                                            </div>
                                        </div>
                                        <div className="flex border rounded-lg">
                                            <div className="rounded-lg bg-slate-200 w-1/3"></div>
                                            <div className="p-3 w-2/3">
                                                <p className="text-lg mb-2">English for Professional Communication</p>
                                                <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.courses_menu.learn_more} <LuArrowUpRight /> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/3'>
                                        <h2 className="text-md font-mono pb-2 mb-3 border-b">{d.header.courses_menu.browse_subject}</h2>
                                        <ul className="">
                                            <a href="/courses?subject=language_courses" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff]"><LuArrowRight /> {d.header.courses_menu.subjects.language}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.computer_science}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.data_science}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.physical_science}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.business}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.health}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.education}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.personal_dev}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.social_sciences}</a>
                                            <a href="/courses?subject=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.subjects.arts}</a>
                                            <a href="/courses" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] text-[#ecc94bff]">{d.header.courses_menu.see_all}</a>
                                        </ul>
                                    </div>
                                    <div className='w-1/3'>
                                        <h2 className="text-md font-mono pb-2 mb-3 border-b">{d.header.courses_menu.browse_program}</h2>
                                        <ul className="mb-5">
                                            <a href="/courses?type=courses" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff]"><LuArrowRight /> {d.header.courses_menu.program_types.short_courses}</a>
                                            <a href="/courses?type=professional" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.program_types.professional}</a>
                                            <a href="/courses?type=degree" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.program_types.degree}</a>
                                            <a href="/courses?type=diploma" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> {d.header.courses_menu.program_types.diploma}</a>
                                        </ul>
                                        <h2 className="text-md font-mono pb-2 mb-3 border-b">{d.header.courses_menu.browse_institution}</h2>
                                        <ul className="mb-5">
                                            <a href="/courses?institution=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> Singapore Polytechnic</a>
                                            <a href="/courses?institution=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> KOREATECH</a>
                                            <a href="/courses?institution=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> University of Suffolk</a>
                                            <a href="/courses?institution=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> IBM Cognitive Class</a>
                                            <a href="/courses?institution=" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] "><LuArrowRight /> Google Developers</a>
                                            <a href="/courses" className="flex items-center gap-1 mb-1 hover:text-[#f44034ff] text-[#ecc94bff]">{d.header.courses_menu.see_all}</a>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full h-[90px] bg-pattern-bold rounded-lg"></div>
                            </div>
                        ) : null}
                        {extendedMenu == "hiw" ? (
                            <div className="bg-neutral-50 shadow-md rounded-lg border border-1 border-neutral-300 min-h-64">
                                <div className="w-full flex items-center justify-around px-8 py-8">
                                    <div className="w-fit">
                                        <div className="w-14 h-14 bg-[#f44034ff] text-white text-2xl rounded-lg flex items-center justify-center">
                                            <LuGraduationCap />
                                        </div>
                                        <div className='w-64'>
                                            <h2 className="text-xl font-mono mb-1 mt-2">{d.header.how_it_works_menu.students.title}</h2>
                                            <p className="text-sm mb-2">{d.header.how_it_works_menu.students.description}</p>
                                            <a href="/how-it-works/students" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.how_it_works_menu.students.link_text} <LuArrowUpRight /> </a>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="w-14 h-14 bg-[#ecc94bff] text-white text-2xl rounded-lg flex items-center justify-center">
                                            <LuBuilding />
                                        </div>
                                        <div className='w-64'>
                                            <h2 className="text-xl font-mono mb-1 mt-2">{d.header.how_it_works_menu.institutions.title}</h2>
                                            <p className="text-sm mb-2">{d.header.how_it_works_menu.institutions.description}</p>
                                            <a href="/how-it-works/institutions" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.how_it_works_menu.institutions.link_text} <LuArrowUpRight /> </a>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="w-14 h-14 bg-neutral-400 text-white text-2xl rounded-lg flex items-center justify-center">
                                            <LuCode />
                                        </div>
                                        <div className='w-64'>
                                            <h2 className="text-xl font-mono mb-1 mt-2">{d.header.how_it_works_menu.developers.title}</h2>
                                            <p className="text-sm mb-2">{d.header.how_it_works_menu.developers.description}</p>
                                            <a href="/how-it-works/developers" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm pb-1 w-fit">{d.header.how_it_works_menu.developers.link_text} <LuArrowUpRight /> </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[90px] bg-pattern-bold rounded-lg"></div>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>

        </>
    )
}