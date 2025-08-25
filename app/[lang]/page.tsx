import { getLocale } from '@/utils/i18n/locales'
 
export default async function Page({params,}: {params: Promise<{ lang: 'en-US' | 'fr-FR' }>}) {
  const { lang } = await params
  const dict = await getLocale(lang) // en
  return <button>{dict.lang}</button> // Add to Cart
}