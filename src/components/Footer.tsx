import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FBF8F9] dark:bg-gray-900 pt-10 pb-5 mt-[-6px] border-t border-[#eaeaea] dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-4">
        <div>
          <div className="flex items-center mb-2">
            <img src={logo} alt="Welfare Department logo" className="h-8 w-auto mr-2" />
            <span className="text-2xl font-extrabold text-[#363742] dark:text-white tracking-tight"><span className="text-[#db4c57]"></span></span>
          </div>
          <p className="text-[#9aa1a3] dark:text-gray-300 text-sm mb-3">
            Supporting our community through mutual aid and assistance. Together, we build a stronger, more resilient society.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow text-[#363742] dark:text-white hover:text-[#db4c57]" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.025V7.248c0-.697.462-.86.788-.86h2.176V3.627L14.547 3.62c-3.383 0-4.162 2.534-4.162 4.162v1.217H7.473V12h2.912v8h3.167v-8h2.268l.382-3.002z" /></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow text-[#363742] dark:text-white hover:text-[#db4c57]" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.644.59-2.538.698a4.478 4.478 0 001.963-2.475 8.974 8.974 0 01-2.834 1.085A4.474 4.474 0 0016.024 4c-2.47 0-4.477 2.007-4.477 4.478 0 .351.04.691.115 1.018-3.723-.187-7.026-1.97-9.236-4.676-.385.662-.606 1.43-.606 2.25 0 1.553.792 2.924 2.001 3.73a4.463 4.463 0 01-2.029-.562v.057c0 2.169 1.544 3.98 3.591 4.387-.375.102-.772.157-1.18.157-.288 0-.565-.027-.837-.079.566 1.767 2.209 3.051 4.159 3.085A8.982 8.982 0 012 19.535c6.29 0 9.736-5.215 9.736-9.736 0-.148-.004-.295-.01-.441a6.962 6.962 0 001.712-1.776z" /></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow text-[#363742] dark:text-white hover:text-[#db4c57]" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.18.056 1.97.24 2.425.415a4.998 4.998 0 011.675 1.027 4.998 4.998 0 011.027 1.675c.175.455.359 1.245.415 2.425.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.056 1.18-.24 1.97-.415 2.425a4.998 4.998 0 01-1.027 1.675 4.998 4.998 0 01-1.675 1.027c-.455.175-1.245.359-2.425.415-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.18-.056-1.97-.24-2.425-.415a4.998 4.998 0 01-1.675-1.027 4.998 4.998 0 01-1.027-1.675c-.175-.455-.359-1.245-.415-2.425C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.056-1.18.24-1.97.415-2.425a4.998 4.998 0 011.027-1.675A4.998 4.998 0 015.28 2.648c.455-.175 1.245-.359 2.425-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.771.13 4.863.335 4.08.635a6.868 6.868 0 00-2.421 1.619A6.868 6.868 0 00.635 4.08C.335 4.863.13 5.771.072 7.052.014 8.332 0 8.74 0 12s.014 3.668.072 4.948c.058 1.281.263 2.189.563 2.972a6.868 6.868 0 001.619 2.421 6.868 6.868 0 002.421 1.619c.783.3 1.691.505 2.972.563C8.332 23.986 8.74 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.189-.263 2.972-.563a6.868 6.868 0 002.421-1.619 6.868 6.868 0 001.619-2.421c.3-.783.505-1.691.563-2.972.058-1.281.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.263-2.189-.563-2.972A6.868 6.868 0 0019.92.635a6.868 6.868 0 00-2.421-1.619C16.714.335 15.806.13 14.525.072 13.246.014 12.858 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 15.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#363742] dark:text-white mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Burial Support</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Healthcare Benefits</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Emergency Aid</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Family Support</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Community Events</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#363742] dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>About Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Member Benefits</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>Contact Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="text-[#9aa1a3] dark:text-gray-300 hover:text-[#db4c57] dark:hover:text-white transition-colors relative group">
              <span>FAQ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#363742] dark:text-white mb-4">Stay Updated</h3>
          <p className="text-[#9aa1a3] dark:text-gray-300 mb-4">Subscribe to our newsletter for updates on welfare programs and community initiatives.</p>
          <form className="flex gap-2 pl-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#363742] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#db4c57] transition-all text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#db4c57] hover:bg-[#af3841] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 border-t border-[#eaeaea] dark:border-gray-800 pt-4 px-4 lg:px-4">
        <p className="text-[#9aa1a3] dark:text-gray-300 text-xs">© Copyrights {currentYear} <a href="#" className="text-[#db4c57]">Welfare Department.</a> All rights reserved.</p>
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-4 sm:gap-2 text-xs text-[#9aa1a3] dark:text-gray-300">
          <a href="#" className="hover:text-[#db4c57] transition-colors">Privacy Policy</a>
          <div className="hidden sm:block w-px h-4 bg-[#eaeaea] dark:bg-gray-700"></div>
          <a href="#" className="hover:text-[#db4c57] transition-colors">Terms of Service</a>
          <div className="hidden sm:block w-px h-4 bg-[#eaeaea] dark:bg-gray-700"></div>
          <a href="#" className="hover:text-[#db4c57] transition-colors">Sitemap</a>
          <div className="hidden sm:block w-px h-4 bg-[#eaeaea] dark:bg-gray-700"></div>
          <a href="#" className="hover:text-[#db4c57] transition-colors">Help Center</a>
        </div>
      </div>
    </footer>
  );
} 