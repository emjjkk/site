'use client'

import { useState } from 'react'
import {
  LuMailOpen,
  LuPhoneCall,
  LuMenu,
  LuX,
  LuArrowRight,
  LuArrowUpRight,
  LuGraduationCap,
  LuBuilding,
  LuCode,
  LuChevronDown,
  LuChevronRight,
} from 'react-icons/lu'

export default function MobileHeader({ dict }: any) {
  const d = dict
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="w-full py-2 px-4 flex items-center justify-between border-b text-xs">
        <div className="flex items-center gap-1">
          <span>{d.lang}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${d.header.contact.email}`}>
            <LuMailOpen className="text-sm" />
          </a>
          <a href={`tel:${d.header.contact.phone}`}>
            <LuPhoneCall className="text-sm" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border-b">
        <img src="/assets/logo.png" alt="Keita" className="h-5 w-auto" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[88px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-4">
            {/* Courses Section */}
            <div className="border-b pb-4 mb-4">
              <button
                onClick={() => toggleSection('courses')}
                className="w-full flex items-center justify-between text-lg font-medium py-2 capitalize"
              >
                <span>{d.header.nav.courses}</span>
                {expandedSection === 'courses' ? <LuChevronDown /> : <LuChevronRight />}
              </button>

              {expandedSection === 'courses' && (
                <div className="mt-3 space-y-4">
                  {/* Search */}
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="py-2 px-3 text-sm border border-neutral-300 rounded-lg outline-none"
                      placeholder={d.header.courses_menu.search_placeholder_mobile}
                    />
                    <button className="text-sm rounded-lg py-2 px-4 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] flex items-center justify-center gap-1">
                      {d.header.courses_menu.search_button}
                      <LuArrowRight />
                    </button>
                  </div>

                  {/* Featured Courses */}
                  <div>
                    <h3 className="text-sm font-mono mb-2">{d.header.courses_menu.featured_title}</h3>
                    <div className="space-y-2">
                      <div className="border rounded-lg p-3">
                        <p className="text-sm font-medium mb-1">CS50x: Introduction to Computer Science</p>
                        <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-xs">
                          {d.header.courses_menu.learn_more} <LuArrowUpRight className="text-xs" />
                        </a>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="text-sm font-medium mb-1">Diploma in Supply Chain Management</p>
                        <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-xs">
                          {d.header.courses_menu.learn_more} <LuArrowUpRight className="text-xs" />
                        </a>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="text-sm font-medium mb-1">English for Professional Communication</p>
                        <a href="/course/" className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-xs">
                          {d.header.courses_menu.learn_more} <LuArrowUpRight className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Browse by Subject */}
                  <div>
                    <h3 className="text-sm font-mono mb-2 pb-2 border-b">
                      {d.header.courses_menu.browse_subject}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <a href="/courses?subject=language_courses" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.subjects.language}
                      </a>
                      <a href="/courses?subject=computer_science" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.subjects.computer_science}
                      </a>
                      <a href="/courses?subject=data_science" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.subjects.data_science}
                      </a>
                      <a href="/courses?subject=business" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.subjects.business}
                      </a>
                      <a href="/courses" className="flex items-center gap-1 py-1 text-[#ecc94bff]">
                        {d.header.courses_menu.see_all}
                      </a>
                    </div>
                  </div>

                  {/* Program Types */}
                  <div>
                    <h3 className="text-sm font-mono mb-2 pb-2 border-b">
                      {d.header.courses_menu.browse_program}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <a href="/courses?type=courses" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.program_types.short_courses}
                      </a>
                      <a href="/courses?type=professional" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.program_types.professional}
                      </a>
                      <a href="/courses?type=degree" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> {d.header.courses_menu.program_types.degree}
                      </a>
                    </div>
                  </div>

                  {/* Institutions */}
                  <div>
                    <h3 className="text-sm font-mono mb-2 pb-2 border-b">
                      {d.header.courses_menu.browse_institution}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <a href="/courses?institution=singapore_polytechnic" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> Singapore Polytechnic
                      </a>
                      <a href="/courses?institution=koreatech" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> KOREATECH
                      </a>
                      <a href="/courses?institution=ibm" className="flex items-center gap-1 py-1">
                        <LuArrowRight className="text-xs" /> IBM Cognitive Class
                      </a>
                      <a href="/courses" className="flex items-center gap-1 py-1 text-[#ecc94bff]">
                        {d.header.courses_menu.see_all}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works Section */}
            <div className="border-b pb-4 mb-4">
              <button
                onClick={() => toggleSection('hiw')}
                className="w-full flex items-center justify-between text-lg font-medium py-2 capitalize"
              >
                <span>{d.header.nav.how_it_works}</span>
                {expandedSection === 'hiw' ? <LuChevronDown /> : <LuChevronRight />}
              </button>

              {expandedSection === 'hiw' && (
                <div className="mt-3 space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="w-12 h-12 bg-[#f44034ff] text-white text-xl rounded-lg flex items-center justify-center mb-3">
                      <LuGraduationCap />
                    </div>
                    <h3 className="text-base font-mono mb-1">{d.header.how_it_works_menu.students.title}</h3>
                    <p className="text-sm mb-2">{d.header.how_it_works_menu.students.description}</p>
                    <a
                      href="/how-it-works/students"
                      className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm"
                    >
                      {d.header.how_it_works_menu.students.link_text} <LuArrowUpRight className="text-xs" />
                    </a>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="w-12 h-12 bg-[#ecc94bff] text-white text-xl rounded-lg flex items-center justify-center mb-3">
                      <LuBuilding />
                    </div>
                    <h3 className="text-base font-mono mb-1">{d.header.how_it_works_menu.institutions.title}</h3>
                    <p className="text-sm mb-2">{d.header.how_it_works_menu.institutions.description}</p>
                    <a
                      href="/how-it-works/institutions"
                      className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm"
                    >
                      {d.header.how_it_works_menu.institutions.link_text} <LuArrowUpRight className="text-xs" />
                    </a>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="w-12 h-12 bg-neutral-400 text-white text-xl rounded-lg flex items-center justify-center mb-3">
                      <LuCode />
                    </div>
                    <h3 className="text-base font-mono mb-1">{d.header.how_it_works_menu.developers.title}</h3>
                    <p className="text-sm mb-2">{d.header.how_it_works_menu.developers.description}</p>
                    <a
                      href="/how-it-works/developers"
                      className="text-[#ecc94bff] hover:text-[#f44034ff] flex items-center text-sm"
                    >
                      {d.header.how_it_works_menu.developers.link_text} <LuArrowUpRight className="text-xs" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* News Link */}
            <div className="border-b pb-4 mb-4">
              <a
                href="/blog"
                className="flex items-center justify-between text-lg font-medium py-2 capitalize"
              >
                <span>{d.header.nav.news}</span>
                <LuChevronRight />
              </a>
            </div>

            {/* Get Started Button */}
            <div className="pt-2">
              <a href="/signup">
                <button className="w-full font-mono py-3 px-5 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] rounded-full text-sm capitalize">
                  {d.header.get_started}
                </button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-neutral-600">
              <p className="flex items-center gap-2">
                <LuMailOpen className="text-base" />
                inquiries@keita.online
              </p>
              <p className="flex items-center gap-2">
                <LuPhoneCall className="text-base" />
                +250 733 333 222
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
