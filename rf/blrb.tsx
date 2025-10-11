import { getLocale } from '@/utils/i18n/locales'
import { redirect } from 'next/navigation'
import Header from '@/components/Header';
import Footer from '@/components/Footer'
import { Button } from '@/components/Button'
import { LuArrowRight, LuPlay, LuUsers, LuGraduationCap, LuAward } from 'react-icons/lu';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Keita - Africa's world-class edtech platorm"
};

export default async function Page({ params, }: { params: Promise<{ lang: any }> }) {
    if (process.env.NEXT_PUBLIC_LAUNCHED === "false") { redirect("/pre-launch"); }
    const { lang } = await params;
    const dict = await getLocale(lang);

    return (
        <>
            <Header t={dict} />
            <main>
                {/* Hero Section */}
                <section id="hero" className="bg-center bg-cover bg-[url('https://images.pexels.com/photos/8761548/pexels-photo-8761548.jpeg')] h-[75dvh] overflow-hidden border-b">
                    <div className="bg-gradient-to-t from-white via-white/80 to-white h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl/[1.2] font-bold mb-5">
                            Gain Skills, Get Certified<br />On Africa's Leading EdTech Platform
                        </h1>
                        <p className="text-sm sm:text-md mb-5 text-foreground/80 w-full sm:w-3/4 lg:w-2/4 px-4 sm:px-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maiores nulla sequi ducimus maxime voluptate, quas ea unde itaque ipsam magni adipisci repudiandae odit blanditiis, praesentium nesciunt doloribus, nemo expedita.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                            <Button>Create a free account</Button>
                            <button className="py-2 px-4 text-sm flex items-center gap-2">Learn More <LuArrowRight /></button>
                        </div>
                    </div>
                    {/*<div className="px-24 pt-10 bg-pattern-2">
            <img src="/assets/Screenshot Mock.png" alt="" className="w-full " />
          </div>*/}
                </section>

                {/* Partners Section */}
                <section className="bg-white w-full py-6 border-b">
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-6 sm:gap-8 lg:gap-10 items-center justify-center px-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Alu_logo.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/University_of_Suffolk_Logo.png/1200px-University_of_Suffolk_Logo.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm0-GZZjdfHQsEn9dw8ajQfJcvo_YwqjMtQ&s" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1075px-IBM_logo.svg.png" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihVSvF9oqeR6OrMlmUiF07pjpZ-3mutphQw&s" alt="" className="h-4 sm:h-5 lg:h-6 grayscale-100 hover:grayscale-0 mx-auto" />
                        </div>
                    </div>
                </section>

                {/* Featured Courses Section */}
                <section className="w-full bg-pattern-3 py-12 border-b">
                    <div className="mx-auto px-4 sm:px-6 lg:px-15">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                            <h2 className="text-xl sm:text-2xl font-bold">Featured Courses</h2>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white w-full sm:w-auto">
                                    <option>All Categories</option>
                                    <option>Technology</option>
                                    <option>Data Science</option>
                                    <option>Marketing</option>
                                    <option>Mobile Development</option>
                                    <option>Business</option>
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white w-full sm:w-auto">
                                    <option>All Programs</option>
                                    <option>Masters Programs</option>
                                    <option>Bachelors Programs</option>
                                    <option>Associate Degrees</option>
                                    <option>Short Courses</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white border overflow-hidden flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute top-4 right-4 w-12 h-6 bg-white/90 rounded"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-foreground/60 bg-gray-100 px-2 py-1 rounded">Technology</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
                                    <p className="text-sm text-foreground/70 mb-4 flex-1">Master modern web development with React, Node.js, and cloud deployment techniques for real-world applications.</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-foreground/60">12 weeks</span>
                                        <span className="text-xl font-bold">$299</span>
                                    </div>
                                    <Button className="w-full mt-auto">Learn More</Button>
                                </div>
                            </div>

                            <div className="bg-white border overflow-hidden flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute top-4 right-4 w-12 h-6 bg-white/90 rounded"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-foreground/60 bg-gray-100 px-2 py-1 rounded">Data Science</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Data Science & Analytics</h3>
                                    <p className="text-sm text-foreground/70 mb-4 flex-1">Learn Python, machine learning, and data visualization to make data-driven decisions in any industry.</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-foreground/60">16 weeks</span>
                                        <span className="text-xl font-bold">$399</span>
                                    </div>
                                    <Button className="w-full mt-auto">Learn More</Button>
                                </div>
                            </div>

                            <div className="bg-white border overflow-hidden flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute top-4 right-4 w-12 h-6 bg-white/90 rounded"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-foreground/60 bg-gray-100 px-2 py-1 rounded">Marketing</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
                                    <p className="text-sm text-foreground/70 mb-4 flex-1">Master social media, SEO, content marketing, and analytics for sustainable business growth.</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-foreground/60">10 weeks</span>
                                        <span className="text-xl font-bold">$249</span>
                                    </div>
                                    <Button className="w-full mt-auto">Learn More</Button>
                                </div>
                            </div>

                            <div className="bg-white border overflow-hidden flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute top-4 right-4 w-12 h-6 bg-white/90 rounded"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-foreground/60 bg-gray-100 px-2 py-1 rounded">Mobile Dev</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Mobile App Development</h3>
                                    <p className="text-sm text-foreground/70 mb-4 flex-1">Build native mobile apps for iOS and Android using React Native and Flutter frameworks.</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-foreground/60">14 weeks</span>
                                        <span className="text-xl font-bold">$349</span>
                                    </div>
                                    <Button className="w-full mt-auto">Learn More</Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="py-2 px-4 text-sm flex items-center gap-2 mx-auto">View All Courses <LuArrowRight /></button>
                        </div>
                    </div>
                </section>

                {/* For Students Section */}
                <section className="w-full min-h-[80dvh] bg-white py-12 sm:py-16 lg:py-20 border-b">
                    <div className="mx-auto px-4 sm:px-6 lg:px-15">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Built for African Students</h2>
                                <p className="text-base sm:text-lg text-foreground/80 mb-8">Experience learning designed specifically for the African context, with local case studies, flexible scheduling, and affordable pricing.</p>

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

                            <div className="bg-gray-200 h-64 sm:h-80 lg:h-96 order-first lg:order-last"></div>
                        </div>

                        {/* Program Types Section */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">There's a Program for Everyone</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                <div className="bg-gray-50 border p-6 sm:p-8 text-center">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Short Courses</h4>
                                    <p className="text-sm text-foreground/70 mb-4">Quick skills-based programs designed to get you job-ready fast. Perfect for professionals looking to upskill.</p>
                                    <ul className="text-sm text-foreground/60 space-y-2">
                                        <li>• 4-12 weeks duration</li>
                                        <li>• Certificate of completion</li>
                                        <li>• Practical projects</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border p-6 sm:p-8 text-center">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Professional Qualifications</h4>
                                    <p className="text-sm text-foreground/70 mb-4">Industry-recognized certifications that advance your career and increase earning potential.</p>
                                    <ul className="text-sm text-foreground/60 space-y-2">
                                        <li>• 6-18 months duration</li>
                                        <li>• Professional certification</li>
                                        <li>• Career support included</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Full Degrees</h4>
                                    <p className="text-sm text-foreground/70 mb-4">Complete degree programs delivered online with the same rigor as traditional universities.</p>
                                    <ul className="text-sm text-foreground/60 space-y-2">
                                        <li>• 2-4 years duration</li>
                                        <li>• Accredited degree</li>
                                        <li>• University partnerships</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button>Start Learning Today</Button>
                        </div>
                    </div>
                </section>

                {/* For Educators Section */}
                <section className="w-full min-h-[80dvh] bg-gray-50 py-12 sm:py-16 lg:py-20 border-b">
                    <div className="mx-auto px-4 sm:px-6 lg:px-15">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="bg-gray-200 h-64 sm:h-80 lg:h-96"></div>

                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Empower Your Institution</h2>
                                <p className="text-base sm:text-lg text-foreground/80 mb-8">
                                    Partner with Keita to reach more students, reduce costs, and keep full control of your educational delivery.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                            <LuUsers className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Expand Your Audience</h4>
                                            <p className="text-sm text-foreground/70">
                                                Take your institution beyond borders with access to learners across Africa and beyond.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                            <LuAward className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Zero Cost</h4>
                                            <p className="text-sm text-foreground/70">
                                                Partner with Keita at no upfront cost—our platform is built to make scaling education effortless.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                            <LuGraduationCap className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Full Control</h4>
                                            <p className="text-sm text-foreground/70">
                                                Maintain ownership of your content, brand, and teaching style while leveraging Keita's infrastructure.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button>Partner With Us</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}