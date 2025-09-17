import { getLocale } from '@/utils/i18n/locales'
import type { Metadata } from "next";
import Client from './client'

export const metadata: Metadata = {
  title: "We're Launching Soon | Keita",
  description: "...",
};

export default async function({params,}: {params: Promise<{ lang: any }>}){
    const { lang } = await params;
    const dict = await getLocale(lang);
    return(<Client t={dict}/>)
}