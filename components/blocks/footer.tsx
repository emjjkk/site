export default function Footer(){
    return(
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
    )
}