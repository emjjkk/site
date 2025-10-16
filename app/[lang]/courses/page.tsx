import type { Metadata } from "next";
import { getLocale } from '@/utils/i18n/locales'
import type { LocaleKey } from '@/types/locales';
import Client from './client'

export const metadata: Metadata = {
  title: "Browse Courses | Keita",
  description: "Explore hundreds of courses from world-class institutions",
};

export default async function CoursesPage({ params }: { params: Promise<{ lang: LocaleKey }> }) {
    const { lang } = await params
    const dict = await getLocale(lang)
    return <Client dict={dict} />
}