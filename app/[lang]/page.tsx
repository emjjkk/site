import { getLocale } from '@/utils/i18n/locales'

import Header from '@/components/blocks/header'
import Subheader from '@/components/blocks/subheader'
import Client from './client'

export default async function Page({ params, }: { params: Promise<{ lang: 'en-US' | 'fr-FR' }> }) {
  const { lang } = await params
  const dict = await getLocale(lang) // en
  return (
    <>
<Subheader d={dict} />
      <Header d={dict} />
      <Client/>
    </>
  )
}