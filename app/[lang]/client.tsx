import { Button } from '@/components/ui/button'
import { LuAward, LuBookOpen, LuCheck, LuChevronDown, LuStar, LuUsers } from 'react-icons/lu'
import Card from '@/components/course-card'
// Mock Testimonial Component
const Testimonial = () => {
    return (
        <div className="border p-6">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-sm mr-4"></div>
                <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">Software Engineer, Kenya</p>
                </div>
            </div>
            <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                    <LuStar key={star} className="text-amber-400" />
                ))}
            </div>
            <p className="text-gray-600">"The courses on this platform completely transformed my career. I went from basic knowledge to job-ready skills in just 3 months."</p>
        </div>
    );
};

export default function client() {
    return (
        <>
            <main className="w-full border-b min-h-[150dvh]">
                <section id="hero" className="h-[calc(100vh-89px)]">
                    <div className="flex h-[85%] border-b">
                        <div className="w-1/2 h-full flex flex-col justify-center pl-10 pr-15">
                            <h1 className="text-5xl/[1.2] text-foreground font-bold mb-5">Gain Expertise, <br />Get Certified.</h1>
                            <p className="text-md mb-10">Empower your future: study from anywhere and earn verified credentials from accredited institutions across Africa and beyond — all on Africa's leading industry-standard education platform.</p>
                            <div className="flex">
                                <Button variant="default" size="default">Get started for free</Button>
                                <Button variant="ghost" size="default">Learn More</Button>
                            </div>
                        </div>
                        <div className="w-1/2 border-l"></div>
                    </div>
                    <div className="h-[15%] flex items-center justify-center px-10 py-7 gap-10 border-b">
                        <img src="https://theroom.zendesk.com/hc/theming_assets/01HZKW9ES92YB3R6A2RP0B6XFJ" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Alu_logo.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1075px-IBM_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nyu_short_color.svg/2560px-Nyu_short_color.svg.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/University_of_Suffolk_Logo.png" alt="ALU" className="h-full w-auto grayscale hover:grayscale-0" />
                    </div>
                </section>
                <section className="bg-pattern p-10 border-b">
                    <div className="flex items-center gap-2 mb-10">
                        <h1 className="text-2xl font-bold mr-5">Trending on Keita</h1>
                        <Button variant="outline" size="default" className="flex items-center gap-2">Professional Certifications <LuChevronDown /></Button>
                        <Button variant="outline" size="default" className="flex items-center gap-2">IT & Computer Science <LuChevronDown /></Button>
                        <Button variant="default" size="default" className="flex items-center gap-2">See All</Button>
                    </div>
                    <div className="flex gap-3 flex-wrap mb-10">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                {/* For Students Section */}
                <section className="border-b py-15 px-6 md:px-10">
                    <div className="">
                        <div className="mb-12">
                            <p className="text-gray-500 mb-2">For Students</p>
                            <h2 className="text-2xl md:text-3xl font-bold max-w-3xl">
                                Gain certified credentials and job-ready skills from reputable institutions across Africa and beyond.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                { icon: <LuBookOpen className="text-2xl" />, title: "Self-Paced Learning", desc: "Learn on your schedule with our flexible courses" },
                                { icon: <LuAward className="text-2xl" />, title: "Earn Certificates", desc: "Get recognized for your skills with credentials" },
                                { icon: <LuUsers className="text-2xl" />, title: "Peer Community", desc: "Connect with fellow learners and experts" },
                                { icon: <LuStar className="text-2xl" />, title: "Career Support", desc: "Get help with job placement and advancement" }
                            ].map((feature, index) => (
                                <div key={index} className="border p-6">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 md:p-12">
                                    <h3 className="text-xl font-semibold mb-4">Career Path Programs</h3>
                                    <p className="text-gray-600 mb-6">
                                        Structured learning paths designed to get you job-ready in high-demand fields like technology, business, and healthcare.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {['Designed by industry experts', 'Hands-on projects', 'Career coaching', 'Job placement support'].map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <LuCheck className="text-green-600 mr-2" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="rounded-sm">
                                        Explore Programs
                                    </Button>
                                </div>
                                <div className="bg-gray-50 flex items-center justify-center p-12">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-gray-800 mb-2">87%</div>
                                        <p className="text-gray-600">of learners report career benefits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* For Institutions Section */}
                <section className="border-b py-16 px-6 md:px-10 bg-foreground text-background">
                    <div className="">
                        <div className="mb-12">
                            <p className="mb-2">For Educators</p>
                            <h2 className="text-2xl md:text-3xl font-bold max-w-3xl">
                                Increase global accessibility to your educational resources.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="mb-6">
                                    Join our network of leading institutions and instructors to share knowledge, build your brand, and generate revenue while making quality education accessible.
                                </p>
                                <div className="space-y-6 mb-8">
                                    {[
                                        { title: "Reach a diverse audience", desc: "Connect with students across 30+ African countries" },
                                        { title: "Monetize your expertise", desc: "Earn revenue while sharing your knowledge" },
                                        { title: "Powerful teaching tools", desc: "Use our platform to create engaging learning experiences" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="bg-gray-500 p-2 mr-4 rounded-sm">
                                                <LuCheck className="" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">{item.title}</h3>
                                                <p className="text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="rounded-sm">
                                    Contact Us to get started
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="border-b py-16 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Students Say</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Join thousands of satisfied learners who have transformed their careers through our platform
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-b py-16 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { number: "50,000+", label: "Active Students" },
                                { number: "500+", label: "Courses" },
                                { number: "100+", label: "Instructors" },
                                { number: "30+", label: "Countries" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-6 border">
                                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                                    <p className="text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 md:px-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start your learning journey today</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join over 50,000 students who are advancing their careers and expanding their knowledge with our courses.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="rounded-sm">
                                Browse Courses
                            </Button>
                            <Button variant="outline" className="rounded-sm">
                                Sign Up Free
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-foreground text-background py-10 px-6 md:px-10">
                    <div className="">
                        <div className="flex justify-between gap-10 mb-10">
                            <div className="w-1/3">
                                <h3 className="font-bold text-lg mb-4">Keita</h3>
                                <p className="">
                                    Africa's leading platform for quality education and professional certification.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Explore</h4>
                                <ul className="space-y-2">
                                    <li>Courses</li>
                                    <li>Programs</li>
                                    <li>Certifications</li>
                                    <li>Institutions</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li>Help Center</li>
                                    <li>Career Guidance</li>
                                    <li>Blog</li>
                                    <li>Scholarships</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 mr-32">Connect</h4>
                                <ul className="space-y-2">
                                    <li>Contact Us</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row items-center justify-between">
                            <div>
                                <span>© 2025 Keita Technologies Co. Ltd. All rights reserved.</span><br />
                                <span>Founded in Rwanda, built with the support of developers around the world.</span>
                            </div>
                            <div className="flex gap-2 mt-4 md:mt-0">
                                <span>Privacy Policy</span>
                                <span>Terms of Service</span>
                                <span>Cookie Settings</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}