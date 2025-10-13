// Utils
import { getLocale } from '@/utils/i18n/locales'

// UI Components
import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'
import HeroSection from '@/components/Hero'
import Footer from '@/components/Footer'
import Featured from '@/components/Featured'
import ForStudentsBlock from '@/components/ForStudentsBlock'
import ForEducatorsBlock from '@/components/ForEducatorsBlock'


export default async function Page({ params, }: { params: Promise<{ lang: 'en-US' | 'fr-FR' }> }) {
  const { lang } = await params
  const dict = await getLocale(lang)
  
  return (
    <>
      {/* Header */}
      <DesktopHeader dict={dict} />
      <div className="block lg:hidden"><MobileHeader dict={dict} /></div>
      <main>
        <HeroSection dict={dict} />
        <section className="min-h-30">
          <Featured dict={dict}/>
          <ForStudentsBlock/>
          <ForEducatorsBlock/>
        </section>
      </main>   
      <Footer dict={dict} />
    </>
  )
}