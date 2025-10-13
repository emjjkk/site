import { LuPlay, LuUsers, LuAward } from "react-icons/lu";
import { Button } from "./ui/button";

export default function ForStudentsBlock() {
    return (
        <>
            {/* For Students Section */}
            <section className="w-full min-h-[80dvh] bg-white py-12 sm:py-16 lg:py-20 border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-mono">An Innovative Platform for Higher Education</h2>
                            <p className="text-base sm:text-lg text-foreground/80 mb-8">Experience learning designed africa-first, with local case studies, flexible scheduling, and affordable pricing.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <LuPlay className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Offline and Low-Bandwidth Optimization</h4>
                                        <p className="text-sm text-foreground/70">Access courses offline and stream content optimized for slow internet connections.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <LuUsers className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Affordable Costs</h4>
                                        <p className="text-sm text-foreground/70">Quality education at prices designed for African students and professionals.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <LuAward className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Industry Recognition</h4>
                                        <p className="text-sm text-foreground/70">Earn certificates recognized by leading employers across the continent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-200 h-64 sm:h-80 lg:h-96 order-first lg:order-last bg-center bg-cover bg-[url('https://images.pexels.com/photos/8761548/pexels-photo-8761548.jpeg')]"></div>
                    </div>

                    {/* Program Types Section */}
                    <div className="mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 font-mono">There's a Program for Everyone</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <div className="bg-gray-50 border p-6 sm:p-8 text-center rounded-lg">
                                <h4 className="text-lg sm:text-xl font-semibold mb-4 font-mono">Short Courses</h4>
                                <p className="text-sm text-foreground/70 mb-4">Quick skills-based programs designed to get you job-ready fast. Perfect for professionals looking to upskill.</p>
                                <ul className="text-sm text-foreground/60 space-y-2">
                                    <li>• 4-12 weeks duration</li>
                                    <li>• Certificate of completion</li>
                                    <li>• Practical projects</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border p-6 sm:p-8 text-center rounded-lg">
                                <h4 className="text-lg sm:text-xl font-semibold mb-4 font-mono">Professional Qualifications</h4>
                                <p className="text-sm text-foreground/70 mb-4">Industry-recognized certifications that advance your career and increase earning potential.</p>
                                <ul className="text-sm text-foreground/60 space-y-2">
                                    <li>• 6-18 months duration</li>
                                    <li>• Professional certification</li>
                                    <li>• Career support included</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1 rounded-lg">
                                <h4 className="text-lg sm:text-xl font-semibold mb-4 font-mono">Full Degrees</h4>
                                <p className="text-sm text-foreground/70 mb-4">Complete degree programs delivered online with the same rigor as traditional universities.</p>
                                <ul className="text-sm text-foreground/60 space-y-2">
                                    <li>• 2-4 years duration</li>
                                    <li>• Accredited degree</li>
                                    <li>• University partnerships</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center font-mono">
                        <Button>Start Learning Today</Button>
                    </div>
                </div>
            </section>
        </>
    )
}