// Utils
import { getLocale } from '@/utils/i18n/locales'

// UI Components
import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'


export default async function Page({ params, }: { params: Promise<{ lang: 'en-US' | 'fr-FR' }> }) {
  const { lang } = await params
  const dict = await getLocale(lang) // en
  return (
    <>
      <div className="w-full hidden md:block">
        <DesktopHeader dict={dict} />
      </div>

      {/* Show below md (768px) */}
      <div className="w-full block md:hidden">
        <MobileHeader dict={dict} />
      </div>
    </>
  )
}