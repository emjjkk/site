"use client"
import Logo from '@/components/logo'
import { LuSearch, LuMenu, LuX } from 'react-icons/lu'
import { useState } from 'react'

export default function Header({ d } : any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    return (
        <>
            <section className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 py-2 border-b bg-background sticky top-0 z-[100]">
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Mobile menu button - visible on small screens */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <LuMenu className="text-lg"/>
                    </button>
                    
                    <Logo style="text-2xl md:text-3xl"/>
                    
                    {/* Desktop navigation - hidden on mobile */}
                    <nav className="hidden md:flex items-center gap-3 lg:gap-5">
                        <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Courses</a>
                        <a href="#" className="text-sm hover:text-foreground/70 transition-colors">News</a>
                        <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Contribute</a>
                        <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Contact</a>
                    </nav>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Search bar - expands on focus on mobile */}
                    <div className={`flex items-center py-1.5 sm:py-2 px-2 sm:px-3 border rounded-sm transition-all ${isSearchFocused ? 'w-32 sm:w-auto' : 'w-24 sm:w-auto'}`}>
                        <input 
                            type="search" 
                            name="q" 
                            id="q" 
                            className="text-sm bg-transparent outline-none w-full"
                            placeholder={isSearchFocused ? "What do you want to study?" : "Search..."}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                        <LuSearch className="text-sm text-foreground/50 flex-shrink-0"/>
                    </div>
                    
                    {/* Get Started button - hidden on smallest screens */}
                    <a href="#" className="hidden xs:block">
                        <button className="py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm rounded-sm bg-foreground text-white whitespace-nowrap">
                            Get Started
                        </button>
                    </a>
                </div>
            </section>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-background z-[101] md:hidden">
                    <div className="p-4 border-b flex justify-between items-center">
                        <Logo style="text-2xl"/>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <LuX className="text-lg"/>
                        </button>
                    </div>
                    <nav className="flex flex-col p-4">
                        <a href="#" className="py-3 border-b text-sm">Courses</a>
                        <a href="#" className="py-3 border-b text-sm">News</a>
                        <a href="#" className="py-3 border-b text-sm">Contribute</a>
                        <a href="#" className="py-3 border-b text-sm">Contact</a>
                        <a href="#" className="py-3">
                            <button className="w-full py-2 text-sm rounded-sm bg-foreground text-white">
                                Get Started
                            </button>
                        </a>
                    </nav>
                </div>
            )}
        </>
    )
}