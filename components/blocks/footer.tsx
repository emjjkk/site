export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-10 px-6 md:px-10">
            <div>
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:w-1/3">
                        <h3 className="font-bold text-lg mb-4">Keita</h3>
                        <p>
                            Africa's leading platform for quality education and professional certification.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Courses</li>
                            <li className="hover:underline cursor-pointer">Programs</li>
                            <li className="hover:underline cursor-pointer">Certifications</li>
                            <li className="hover:underline cursor-pointer">Institutions</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Help Center</li>
                            <li className="hover:underline cursor-pointer">Career Guidance</li>
                            <li className="hover:underline cursor-pointer">Blog</li>
                            <li className="hover:underline cursor-pointer">Scholarships</li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                            <li className="hover:underline cursor-pointer">Facebook</li>
                            <li className="hover:underline cursor-pointer">Twitter</li>
                            <li className="hover:underline cursor-pointer">LinkedIn</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <span>© 2025 Keita Technologies Co. Ltd. All rights reserved.</span>
                        <br className="hidden md:block" />
                        <span>Founded in Rwanda, built with the support of developers around the world.</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4">
                        <span className="hover:underline cursor-pointer">Privacy Policy</span>
                        <span className="hover:underline cursor-pointer">Terms of Service</span>
                        <span className="hover:underline cursor-pointer">Cookie Settings</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
