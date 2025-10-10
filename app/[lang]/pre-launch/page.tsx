import type { Metadata } from "next";
import { getLocale } from '@/utils/i18n/locales'
import type { LocaleKey } from '@/types/locales';
import Client from './client'

export const metadata: Metadata = {
  title: "We're launching soon | Keita",
  description: "...",
};

export default async function({params,}: {params: Promise<{ lang: LocaleKey }>}){
    const { lang } = await params
    const dict = await getLocale(lang)
    return(<Client dict={dict.pre_launch}/>)
}