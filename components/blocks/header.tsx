import Logo from '@/components/logo'
import {LuSearch, LuMenu} from 'react-icons/lu'

export default function Header({d} : any){
    return(
        <>
            <section className="flex items-center justify-between w-full px-10 py-2 border-b bg-background sticky top-0 z-[100]">
                <div className="flex items-center gap-6">
                    <LuMenu className="text-md"/>
                    <Logo style="text-3xl"/>
                    <nav className="flex items-center gap-3">
                        <a href="" className="text-sm">Courses</a>
                        <a href="" className="text-sm">News</a>
                        <a href="" className="text-sm">Contribute</a>
                        <a href="" className="text-sm">Contact</a>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center py-2 px-3 border rounded-sm">
                        <input type="search" name="q" id="q" className="text-sm" placeholder="What do you want to study?"/>
                        <LuSearch className="text-sm text-foreground/50"/>
                    </div>
                    <a href="#"><button className="py-2 px-3 text-sm rounded-sm bg-foreground text-white">Get Started</button></a>
                </div>
            </section>
        </>
    )
}