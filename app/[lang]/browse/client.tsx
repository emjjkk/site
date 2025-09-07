"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { LuChevronDown, LuSearch, LuSlidersHorizontal } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import Card from "@/components/course-card"

export default function Client() {
    const searchParams = useSearchParams()
    const router = useRouter()

    // Read initial params
    const initialQuery = searchParams.get("query") || ""
    const initialType = searchParams.get("type") || "all"
    const initialSubject = searchParams.get("subject") || "all"
    const initialSort = searchParams.get("sort") || "popular"

    // States
    const [query, setQuery] = useState(initialQuery)
    const [type, setType] = useState(initialType)
    const [subject, setSubject] = useState(initialSubject)
    const [sort, setSort] = useState(initialSort)

    // For now, static mock courses
    const mockCourses = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        title: `Course ${i + 1}`,
    }))

    // Update URL params when filters/search change
    const updateSearchParams = (newParams: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString())
        Object.entries(newParams).forEach(([key, value]) => {
            if (value === "all" || value === "") {
                params.delete(key)
            } else {
                params.set(key, value)
            }
        })
        router.push(`/browse?${params.toString()}`)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        updateSearchParams({ query })
    }

    const handleFilterChange = (key: string, value: string) => {
        if (key === "type") setType(value)
        if (key === "subject") setSubject(value)
        updateSearchParams({ [key]: value })
    }

    const handleSortChange = (value: string) => {
        setSort(value)
        updateSearchParams({ sort: value })
    }

    return (
        <main className="w-full min-h-[100dvh] border-b">
            {/* ===== Page Header ===== */}
            <section className="bg-pattern border-b py-12 md:py-16 px-6 md:px-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                    Browse Courses
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Explore hundreds of top-quality courses from Africa’s leading institutions and beyond.  
                    Filter by type, subject, or keyword to find exactly what you need.
                </p>
            </section>

            <div className="px-6 md:px-10 py-10">
                {/* Top Search + Sort */}
                <section className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative flex-1 max-w-lg">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search courses, topics, or instructors..."
                            className="w-full border rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            <LuSearch size={18} />
                        </button>
                    </form>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <select
                            value={sort}
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="latest">Newest</option>
                        </select>
                    </div>
                </section>

                {/* Filter Bar */}
                <section className="mb-10 flex flex-wrap gap-3">
                    <Button
                        variant={type === "all" ? "default" : "outline"}
                        onClick={() => handleFilterChange("type", "all")}
                    >
                        All Types
                    </Button>
                    <Button
                        variant={type === "certification" ? "default" : "outline"}
                        onClick={() => handleFilterChange("type", "certification")}
                    >
                        Certifications
                    </Button>
                    <Button
                        variant={type === "degree" ? "default" : "outline"}
                        onClick={() => handleFilterChange("type", "degree")}
                    >
                        Degrees
                    </Button>
                    <Button
                        variant={type === "short" ? "default" : "outline"}
                        onClick={() => handleFilterChange("type", "short")}
                    >
                        Short Courses
                    </Button>

                    {/* Subject Dropdown */}
                    <div className="relative">
                        <select
                            value={subject}
                            onChange={(e) => handleFilterChange("subject", e.target.value)}
                            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="all">All Subjects</option>
                            <option value="it">IT & Computer Science</option>
                            <option value="business">Business & Management</option>
                            <option value="design">Design & Arts</option>
                            <option value="health">Health & Medicine</option>
                        </select>
                    </div>

                    <Button
                        variant="outline"
                        className="flex items-center gap-2 ml-auto"
                    >
                        <LuSlidersHorizontal size={16} />
                        More Filters
                    </Button>
                </section>

                {/* Courses Grid */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Browse Courses</h2>
                        <p className="text-gray-500 text-sm">
                            Showing {mockCourses.length} results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {mockCourses.map((course) => (
                            <Card key={course.id} />
                        ))}
                    </div>
                </section>

                {/* Pagination */}
                <section className="mt-10 flex justify-center">
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Previous</Button>
                        <Button variant="default">1</Button>
                        <Button variant="outline">2</Button>
                        <Button variant="outline">3</Button>
                        <Button variant="outline">Next</Button>
                    </div>
                </section>
            </div>
        </main>
    )
}
