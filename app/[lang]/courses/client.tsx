'use client'

import { useState } from 'react'
import { LuSearch, LuFilter, LuX, LuChevronDown, LuChevronLeft, LuChevronRight, LuChevronUp } from 'react-icons/lu'
import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'
import Footer from '@/components/Footer'
import CourseCard from '@/components/CourseCard'

export default function CoursesPageClient({ dict }: any) {
    const d = dict.courses_page
    const headerDict = dict.header

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedInstitutions, setSelectedInstitutions] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('newest')
    const [currentPage, setCurrentPage] = useState(1)
    const [subjectExpanded, setSubjectExpanded] = useState(true)
    const [typeExpanded, setTypeExpanded] = useState(false)
    const [institutionExpanded, setInstitutionExpanded] = useState(false)

    // Mock data for filters
    const subjects = [
        { value: 'language', label: headerDict.courses_menu.subjects.language },
        { value: 'computer_science', label: headerDict.courses_menu.subjects.computer_science },
        { value: 'data_science', label: headerDict.courses_menu.subjects.data_science },
        { value: 'business', label: headerDict.courses_menu.subjects.business },
        { value: 'health', label: headerDict.courses_menu.subjects.health },
        { value: 'education', label: headerDict.courses_menu.subjects.education },
    ]

    const types = [
        { value: 'short', label: headerDict.courses_menu.program_types.short_courses },
        { value: 'professional', label: headerDict.courses_menu.program_types.professional },
        { value: 'degree', label: headerDict.courses_menu.program_types.degree },
        { value: 'diploma', label: headerDict.courses_menu.program_types.diploma },
    ]

    const institutions = [
        { value: 'singapore', label: 'Singapore Polytechnic' },
        { value: 'koreatech', label: 'KOREATECH' },
        { value: 'suffolk', label: 'University of Suffolk' },
        { value: 'ibm', label: 'IBM Cognitive Class' },
        { value: 'google', label: 'Google Developers' },
    ]

    const totalCourses = 247
    const coursesPerPage = 12
    const totalPages = Math.ceil(totalCourses / coursesPerPage)

    const toggleSubject = (value: string) => {
        setSelectedSubjects(prev => 
            prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
        )
    }

    const toggleType = (value: string) => {
        setSelectedTypes(prev => 
            prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        )
    }

    const toggleInstitution = (value: string) => {
        setSelectedInstitutions(prev => 
            prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
        )
    }

    const clearFilters = () => {
        setSelectedSubjects([])
        setSelectedTypes([])
        setSelectedInstitutions([])
        setSearchQuery('')
    }

    const removeFilter = (category: 'subject' | 'type' | 'institution', value: string) => {
        if (category === 'subject') {
            setSelectedSubjects(prev => prev.filter(s => s !== value))
        } else if (category === 'type') {
            setSelectedTypes(prev => prev.filter(t => t !== value))
        } else if (category === 'institution') {
            setSelectedInstitutions(prev => prev.filter(i => i !== value))
        }
    }

    const hasActiveFilters = selectedSubjects.length > 0 || selectedTypes.length > 0 || selectedInstitutions.length > 0 || searchQuery !== ''

    const getActiveFilters = () => {
        const filters: Array<{ category: 'subject' | 'type' | 'institution', value: string, label: string }> = []
        
        selectedSubjects.forEach(value => {
            const subject = subjects.find(s => s.value === value)
            if (subject) filters.push({ category: 'subject', value, label: subject.label })
        })
        
        selectedTypes.forEach(value => {
            const type = types.find(t => t.value === value)
            if (type) filters.push({ category: 'type', value, label: type.label })
        })
        
        selectedInstitutions.forEach(value => {
            const institution = institutions.find(i => i.value === value)
            if (institution) filters.push({ category: 'institution', value, label: institution.label })
        })
        
        return filters
    }

    return (
        <>
            <DesktopHeader dict={dict} />
            <div className="block lg:hidden"><MobileHeader dict={dict} /></div>
            <main className="min-h-screen">
                <div className="w-full bg-neutral-50 ">
                    <div className="h-full px-4 md:px-12 py-6 flex flex-col">
                        <p className="text-sm text-neutral-500 mb-3">Home / Browse Courses</p>
                        <h1 className="text-4xl font-bold font-mono">{d.title}</h1>
                        <p className="md:w-2/4 text-lg text-neutral-600">{d.subtitle}</p>
                    </div>
                    <div className="w-full h-[60px] bg-pattern-subtle"></div>
                </div>
                <div className="px-4 lg:px-12 py-8">
                    {/* Search and Sort Bar */}
                    <div className="mb-6 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder={d.search_placeholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                className="lg:hidden flex items-center gap-2 px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                                <LuFilter className="w-5 h-5" />
                                {d.filters.title}
                            </button>
                            <div className="relative flex-1 sm:flex-none sm:w-48">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full appearance-none px-4 py-3 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                                >
                                    <option value="newest">{d.sort.newest}</option>
                                    <option value="popular">{d.sort.popular}</option>
                                    <option value="alphabetical">{d.sort.alphabetical}</option>
                                </select>
                                <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {hasActiveFilters && (
                        <div className="mb-6 flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-neutral-700">Active filters:</span>
                            {getActiveFilters().map((filter, index) => (
                                <span
                                    key={`${filter.category}-${filter.value}-${index}`}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                    {filter.label}
                                    <button
                                        onClick={() => removeFilter(filter.category, filter.value)}
                                        className="hover:bg-blue-200 rounded-full p-0.5"
                                    >
                                        <LuX className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                            <button
                                onClick={clearFilters}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium ml-2"
                            >
                                {d.filters.clear_all}
                            </button>
                        </div>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Desktop Filters Sidebar */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-18 bg-white border border-neutral-200 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="font-bold text-lg font-mono">{d.filters.title}</h2>
                                </div>

                                {/* Subject Filter */}
                                <div className="mb-4">
                                    <button
                                        onClick={() => setSubjectExpanded(!subjectExpanded)}
                                        className="flex items-center justify-between w-full text-sm font-semibold text-neutral-700 mb-3"
                                    >
                                        {d.filters.subject}
                                        {subjectExpanded ? (
                                            <LuChevronUp className="w-4 h-4" />
                                        ) : (
                                            <LuChevronDown className="w-4 h-4" />
                                        )}
                                    </button>
                                    {subjectExpanded && (
                                        <div className="space-y-2">
                                            {subjects.map((subject) => (
                                                <label key={subject.value} className="flex items-center cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        value={subject.value}
                                                        checked={selectedSubjects.includes(subject.value)}
                                                        onChange={() => toggleSubject(subject.value)}
                                                        className="w-4 h-4 text-blue-600 border-neutral-300 focus:ring-2 focus:ring-blue-500 rounded"
                                                    />
                                                    <span className="ml-3 text-sm text-neutral-700 group-hover:text-neutral-900">
                                                        {subject.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Program Type Filter */}
                                <div className="mb-4">
                                    <button
                                        onClick={() => setTypeExpanded(!typeExpanded)}
                                        className="flex items-center justify-between w-full text-sm font-semibold text-neutral-700 mb-3"
                                    >
                                        {d.filters.program_type}
                                        {typeExpanded ? (
                                            <LuChevronUp className="w-4 h-4" />
                                        ) : (
                                            <LuChevronDown className="w-4 h-4" />
                                        )}
                                    </button>
                                    {typeExpanded && (
                                        <div className="space-y-2">
                                            {types.map((type) => (
                                                <label key={type.value} className="flex items-center cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        value={type.value}
                                                        checked={selectedTypes.includes(type.value)}
                                                        onChange={() => toggleType(type.value)}
                                                        className="w-4 h-4 text-blue-600 border-neutral-300 focus:ring-2 focus:ring-blue-500 rounded"
                                                    />
                                                    <span className="ml-3 text-sm text-neutral-700 group-hover:text-neutral-900">
                                                        {type.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Institution Filter */}
                                <div>
                                    <button
                                        onClick={() => setInstitutionExpanded(!institutionExpanded)}
                                        className="flex items-center justify-between w-full text-sm font-semibold text-neutral-700 mb-3"
                                    >
                                        {d.filters.institution}
                                        {institutionExpanded ? (
                                            <LuChevronUp className="w-4 h-4" />
                                        ) : (
                                            <LuChevronDown className="w-4 h-4" />
                                        )}
                                    </button>
                                    {institutionExpanded && (
                                        <div className="space-y-2">
                                            {institutions.map((institution) => (
                                                <label key={institution.value} className="flex items-center cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        value={institution.value}
                                                        checked={selectedInstitutions.includes(institution.value)}
                                                        onChange={() => toggleInstitution(institution.value)}
                                                        className="w-4 h-4 text-blue-600 border-neutral-300 focus:ring-2 focus:ring-blue-500 rounded"
                                                    />
                                                    <span className="ml-3 text-sm text-neutral-700 group-hover:text-neutral-900">
                                                        {institution.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </aside>

                        {/* Mobile Filters Overlay */}
                        {mobileFiltersOpen && (
                            <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)}>
                                <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                    <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
                                        <h2 className="font-bold text-lg">{d.filters.title}</h2>
                                        <button onClick={() => setMobileFiltersOpen(false)} className="p-2 hover:bg-neutral-100 rounded-lg">
                                            <LuX className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="p-6">
                                        {/* Subject Filter */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-semibold text-neutral-700 mb-3">
                                                {d.filters.subject}
                                            </label>
                                            <div className="space-y-2">
                                                {subjects.map((subject) => (
                                                    <label key={subject.value} className="flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            value={subject.value}
                                                            checked={selectedSubjects.includes(subject.value)}
                                                            onChange={() => toggleSubject(subject.value)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="ml-3 text-sm">{subject.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Program Type Filter */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-semibold text-neutral-700 mb-3">
                                                {d.filters.program_type}
                                            </label>
                                            <div className="space-y-2">
                                                {types.map((type) => (
                                                    <label key={type.value} className="flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            value={type.value}
                                                            checked={selectedTypes.includes(type.value)}
                                                            onChange={() => toggleType(type.value)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="ml-3 text-sm">{type.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Institution Filter */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-semibold text-neutral-700 mb-3">
                                                {d.filters.institution}
                                            </label>
                                            <div className="space-y-2">
                                                {institutions.map((institution) => (
                                                    <label key={institution.value} className="flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            value={institution.value}
                                                            checked={selectedInstitutions.includes(institution.value)}
                                                            onChange={() => toggleInstitution(institution.value)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="ml-3 text-sm">{institution.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sticky bottom-0 bg-white border-t border-neutral-200 p-4 flex gap-3">
                                        <button
                                            onClick={clearFilters}
                                            className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 font-medium"
                                        >
                                            {d.filters.clear_all}
                                        </button>
                                        <button
                                            onClick={() => setMobileFiltersOpen(false)}
                                            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                                        >
                                            {d.filters.apply}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Courses Grid */}
                        <div className="flex-1">
                            <div className="mb-6">
                                <p className="text-sm text-neutral-600">
                                    {d.showing_results.replace('{count}', totalCourses.toString())}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                {Array.from({ length: coursesPerPage }).map((_, i) => (
                                    <CourseCard key={i} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <LuChevronLeft className="w-4 h-4" />
                                    <span className="hidden sm:inline">{d.pagination.previous}</span>
                                </button>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                                        const pageNum = i + 1
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === pageNum
                                                        ? 'bg-blue-600 text-white'
                                                        : 'hover:bg-neutral-100 text-neutral-700'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        )
                                    })}
                                    {totalPages > 5 && (
                                        <>
                                            <span className="px-2 text-neutral-500">...</span>
                                            <button
                                                onClick={() => setCurrentPage(totalPages)}
                                                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === totalPages
                                                        ? 'bg-blue-600 text-white'
                                                        : 'hover:bg-neutral-100 text-neutral-700'
                                                    }`}
                                            >
                                                {totalPages}
                                            </button>
                                        </>
                                    )}
                                </div>

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <span className="hidden sm:inline">{d.pagination.next}</span>
                                    <LuChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer dict={dict} />
        </>
    )
}