// components/Footer.tsx
import { LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu";
import { Button } from "@/components/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-20">
      {/* Top CTA */}
      <div className="mx-auto py-10 text-center border-b border-white/10">
        <h2 className="text-3xl font-bold mb-4">Join Africa’s Learning Revolution</h2>
        <p className="text-white/70 mb-6 w-3/4 mx-auto">
          Keita empowers students and institutions to unlock world-class education built for Africa’s future.
        </p>
        <Button className="bg-white text-black hover:bg-gray-100">
          Get Started Free
        </Button>
      </div>

      {/* Links grid */}
      <div className="mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">
        <div>
          <h4 className="font-semibold mb-4">Keita</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#">Short Courses</a></li>
            <li><a href="#">Professional Qualifications</a></li>
            <li><a href="#">Full Degrees</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">For Institutions</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Educator Portal</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Keita. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#"><LuFacebook /></a>
          <a href="#"><LuInstagram /></a>
          <a href="#"><LuTwitter /></a>
          <a href="#"><LuLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
