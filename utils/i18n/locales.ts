const locales = {
  'en-US': () => import('@/locales/en-US.json').then((module) => module.default),
  'fr-FR': () => import('@/locales/fr-FR.json').then((module) => module.default),
}
 
export const getLocale = async (locale: 'en-US' | 'fr-FR') =>
  locales[locale]()