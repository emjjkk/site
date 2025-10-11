'use client'

import { LuMailOpen, LuPhoneCall, LuMapPin, LuFacebook, LuTwitter, LuLinkedin, LuInstagram, LuYoutube } from 'react-icons/lu'

export default function Footer({ dict }: any) {
    const d = dict
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-neutral-900 text-neutral-200">
            <div className="h-5"></div>
            <div className="h-[90px] bg-pattern-bold w-full"></div>
            {/* Main Footer Content */}
            <div className="w-full px-4 md:px-10 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <img src="/assets/logo.png" alt="Keita" className="h-6 w-auto mb-4 invert" />
                        <p className="text-sm mb-4">{d.footer.about.description}</p>
                        <div className="flex items-center gap-3">
                            <a href={d.footer.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ecc94bff] transition-colors">
                                <LuFacebook />
                            </a>
                            <a href={d.footer.social.twitter} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ecc94bff] transition-colors">
                                <LuTwitter />
                            </a>
                            <a href={d.footer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ecc94bff] transition-colors">
                                <LuLinkedin />
                            </a>
                            <a href={d.footer.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ecc94bff] transition-colors">
                                <LuInstagram />
                            </a>
                            <a href={d.footer.social.youtube} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ecc94bff] transition-colors">
                                <LuYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-mono mb-4">{d.footer.quick_links.title}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/about" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.about}
                                </a>
                            </li>
                            <li>
                                <a href="/courses" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.browse_courses}
                                </a>
                            </li>
                            <li>
                                <a href="/how-it-works" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.how_it_works}
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.news_blog}
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.faq}
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.quick_links.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* For Partners */}
                    <div>
                        <h3 className="text-lg font-mono mb-4">{d.footer.partners.title}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/partners/institutions" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.partners.for_institutions}
                                </a>
                            </li>
                            <li>
                                <a href="/partners/developers" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.partners.for_developers}
                                </a>
                            </li>
                            <li>
                                <a href="/partners/become-partner" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.partners.become_partner}
                                </a>
                            </li>
                            <li>
                                <a href="/api-docs" className="hover:text-[#ecc94bff] transition-colors">
                                    {d.footer.partners.api_documentation}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-mono mb-4">{d.footer.contact.title}</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href={`mailto:${d.header.contact.email}`} className="flex items-start gap-2 hover:text-[#ecc94bff] transition-colors">
                                    <LuMailOpen className="text-base mt-0.5 flex-shrink-0" />
                                    <span>{d.header.contact.email}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${d.header.contact.phone}`} className="flex items-start gap-2 hover:text-[#ecc94bff] transition-colors">
                                    <LuPhoneCall className="text-base mt-0.5 flex-shrink-0" />
                                    <span>{d.header.contact.phone}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <LuMapPin className="text-base mt-0.5 flex-shrink-0" />
                                <span>{d.footer.contact.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full border-t border-neutral-700">
                <div className="px-4 md:px-10 py-4 md:py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <p className="text-neutral-400 text-center md:text-left">
                            {d.footer.bottom.copyright.replace('{year}', currentYear)}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            <a href="/privacy" className="hover:text-[#ecc94bff] transition-colors text-neutral-400">
                                {d.footer.bottom.privacy_policy}
                            </a>
                            <a href="/terms" className="hover:text-[#ecc94bff] transition-colors text-neutral-400">
                                {d.footer.bottom.terms_of_service}
                            </a>
                            <a href="/cookies" className="hover:text-[#ecc94bff] transition-colors text-neutral-400">
                                {d.footer.bottom.cookie_policy}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}