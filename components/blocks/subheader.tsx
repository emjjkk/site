import { getLocale } from '@/utils/i18n/locales'
import { LuChevronDown, LuMoon, LuSun } from 'react-icons/lu'

export default async function Subheader({ d }: any) {

    return (
        <>
            <div className="hidden md:flex w-full py-2 px-10 border-b items-center justify-between bg-background">
                <div className="flex items-center">
                    <button className="text-xs">Keita Technologies Co. Ltd.</button>
                </div>
                <div className="flex items-center gap-5">
                    <span className="flex gap-2 items-center text-xs">
                        <p>Theme:</p>
                        <p className="text-foreground/50">Dark</p>
                        <p className="text-foreground/50">Light</p>
                        <p>Auto</p>
                    </span>
                    <span className="flex gap-2 items-center text-xs">
                        <p>Language:</p>
                        <div className="flex items-center">
                            <p>English</p>
                            <LuChevronDown />
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}