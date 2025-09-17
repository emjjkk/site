import { Button } from '@/components/Button'
import { LuMail, LuPhone, LuLanguages, LuChevronDown } from 'react-icons/lu'

export default function Header({ t }: any) {
    const content = t

    return (
        <>
            {/* Top info bar - scrolls away */}
            <section className="w-full px-15 py-2 flex items-center justify-between border-b border-foreground/10">
                <div className="flex items-center gap-4">
                    <div className="text-xs flex items-center gap-1">
                        {content.lang}
                        <LuChevronDown />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-xs flex items-center gap-1">
                        <LuMail /> general@keita.online
                    </a>
                    <a href="#" className="text-xs flex items-center gap-1">
                        <LuPhone /> +250 723 434 000
                    </a>
                </div>
            </section>

            {/* Main nav - sticky */}
            <section className="w-full px-15 py-2 flex items-center justify-between bg-white sticky top-0 z-50">
                <div className="flex items-center gap-10">
                    <img
                        src="/assets/Keita.png"
                        alt="Keita"
                        className="h-6 w-auto relative bottom-[1.5px]"
                    />
                    <nav className="flex items-center gap-4 capitalize">
                        <a href="#" className="text-sm flex items-center gap-1">
                            {content.header.courses}
                            <LuChevronDown />
                        </a>
                        <a href="#" className="text-sm flex items-center gap-1">
                            {content.header.how_it_works}
                            <LuChevronDown />
                        </a>
                        <a href="#" className="text-sm">
                            {content.header.news}
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm capitalize">
                        {content.header.login}
                    </a>
                    <Button className="capitalize">{content.header.signup}</Button>
                </div>
            </section>
        </>
    )
}
