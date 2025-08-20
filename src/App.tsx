import React from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FBF8F9] dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
      {/* Hero Section */}
        <section className="max-w-7xl mx-auto mt-10 lg:mt-20 px-8 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
        {/* Left: main text */}
        <div className="flex-1 text-center lg:text-left">
              <div className="text-[#db4c57] font-bold mb-2 animate-bounce">#Welfare Support</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#363742] dark:text-white mb-4">
                Supporting Our Members<br />
                Through <span className="text-[#db4c57]">Life's Journey</span>
          </h1>
              <p className="text-lg text-[#9aa1a3] dark:text-gray-300 max-w-lg mb-7">
                Join our welfare program to access comprehensive support including burial assistance, healthcare benefits, and emergency aid. Together, we build a stronger, more caring community.
          </p>
              <a href="#" className="inline-block px-8 py-3 bg-[#db4c57] hover:bg-[#af3841] text-white rounded-full shadow font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Member Login
          </a>
        </div>
        {/* Right: hero illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
                src="https://ext.same-assets.com/42432576/831391142.jpeg"
                alt="Community support illustration"
                className="w-full max-w-[440px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
        </div>
      </section>

      {/* Services: Four Columns */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-8 lg:px-8">
          {[
            {
              icon: "https://ext.same-assets.com/42432576/2866584116.svg",
              title: "Burial Support",
              desc: "Comprehensive assistance for funeral arrangements and burial expenses during difficult times.",
            },
            {
              icon: "https://ext.same-assets.com/42432576/3638629057.svg",
              title: "Healthcare Benefits",
              desc: "Access to quality healthcare services and medical expense support for members.",
            },
            {
              icon: "https://ext.same-assets.com/42432576/3275621288.svg",
              title: "24/7 Support",
              desc: "Round-the-clock assistance and guidance for all welfare-related matters.",
            },
            {
              icon: "https://ext.same-assets.com/42432576/1323392615.svg",
              title: "Emergency Aid",
              desc: "Immediate support and resources during emergencies and unexpected situations.",
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-[0_2px_16px_0_rgba(52,62,110,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#db4c57]/10 flex items-center justify-center group-hover:bg-[#db4c57]/20 transition-colors duration-300">
                <img src={icon} alt={title} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#363742] dark:text-white mb-2 group-hover:text-[#db4c57] transition-colors duration-300">{title}</h3>
              <p className="text-[#9aa1a3] dark:text-gray-300 text-sm">{desc}</p>
          </div>
        ))}
      </section>

        {/* About Us Section */}
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center mt-20 gap-12 px-8 lg:px-8 w-full">
        <div className="flex-1 flex justify-center items-center">
            <img src="https://ext.same-assets.com/42432576/831391142.jpeg" alt="Community support" className="rounded-full object-cover w-[300px] h-[300px] border-8 border-white dark:border-gray-800 shadow-xl" />
        </div>
        <div className="flex-1 text-center lg:text-left">
            <span className="text-[#db4c57] font-bold text-sm uppercase tracking-widest">About Our Program</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#363742] dark:text-white">Supporting our community through life's most challenging moments.</h2>
            <p className="mt-6 text-lg text-[#363742] dark:text-white font-bold">
              Our welfare program provides comprehensive support including burial assistance, healthcare benefits, and emergency aid.
            </p>
            <p className="mt-3 text-[#9aa1a3] dark:text-gray-300 max-w-xl">
              Through regular contributions and a strong support network, we ensure that no member faces life's challenges alone. Our program offers burial support, healthcare coverage, and emergency assistance to help members during difficult times.
          </p>
          <a href="#" className="inline-block mt-7 px-8 py-3 bg-[#db4c57] hover:bg-[#af3841] text-white rounded-full shadow font-semibold text-lg transition">
            Learn More
          </a>
        </div>
      </section>

        {/* Benefits Section */}
      <section className="max-w-7xl mx-auto mt-20 px-6 lg:px-0">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#363742] dark:text-white mb-8">
            Comprehensive Welfare Benefits for Our Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
              { img: "https://ext.same-assets.com/42432576/2920430879.jpeg", title: "Burial Support" },
              { img: "https://ext.same-assets.com/42432576/216976255.jpeg", title: "Healthcare Coverage" },
              { img: "https://ext.same-assets.com/42432576/2704445254.jpeg", title: "Emergency Aid" },
              { img: "https://ext.same-assets.com/42432576/3289648163.jpeg", title: "Family Support" },
              { img: "https://ext.same-assets.com/42432576/3132203920.jpeg", title: "Community Events" },
              { img: "https://ext.same-assets.com/42432576/975132280.jpeg", title: "Member Resources" },
          ].map(({ img, title }, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_2px_12px_0_rgba(52,62,110,0.06)] overflow-hidden text-center p-8 group hover:shadow-lg transition">
              <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-[#363742] dark:text-white text-lg font-bold mb-2">{title}</h3>
                <p className="text-[#9aa1a3] dark:text-gray-300 text-sm">Comprehensive support for our members</p>
            </div>
          ))}
        </div>
      </section>

        {/* Testimonial Section */}
        <section className="max-w-7xl mx-auto mt-20 px-8 lg:px-8">
        <div className="text-center mb-8">
            <span className="text-[#db4c57] font-bold text-sm uppercase tracking-widest">Member Stories</span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#363742] dark:text-white">Hear from our members about their experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "https://ext.same-assets.com/42432576/3354677981.jpeg",
                name: "John Kamau",
                role: "Member since 2020",
                content: "The burial support program helped my family during our most difficult time. We're grateful for the assistance.",
            },
            {
              img: "https://ext.same-assets.com/42432576/982466701.jpeg",
                name: "Mary Wakwa",
                role: "Member since 2019",
                content: "The healthcare benefits have been a lifesaver for my family. Thank you for your support.",
            },
            {
              img: "https://ext.same-assets.com/42432576/2491892152.jpeg",
                name: "Robert Mwai",
                role: "Member since 2021",
                content: "The emergency aid program provided immediate support when we needed it most.",
            },
            {
              img: "https://ext.same-assets.com/42432576/975132280.jpeg",
                name: "Sarah Simiyu",
                role: "Member since 2018",
                content: "Being part of this community has given us peace of mind knowing we're supported.",
            },
          ].map(({ img, name, role, content }, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0_3px_12px_0_rgba(51,61,110,0.07)] text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <img
                src={img}
                alt={name}
                  className="h-16 w-16 rounded-full border-4 border-white dark:border-gray-700 shadow mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
              />
                <p className="text-[#9aa1a3] dark:text-gray-300 text-sm mb-4">{content}</p>
                <div className="font-bold text-[#363742] dark:text-white text-base group-hover:text-[#db4c57] transition-colors duration-300">{name}</div>
              <div className="text-[#db4c57] text-xs mt-1">{role}</div>
            </div>
          ))}
        </div>
      </section>

        {/* CTA Section */}
        {/* <section className="w-full bg-gradient-to-r from-[#ff5b5b] via-[#ff8b8b] to-[#fae1dd] py-12 mt-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8 lg:px-8">
            <h3 className="text-2xl text-white font-bold mb-4 md:mb-0">Ready to join our welfare program?</h3>
            <span className="text-white text-lg mb-4 md:mb-0">Contact us at (800-123-1234) for more information</span>
            <a href="#" className="px-8 py-3 bg-white text-[#db4c57] font-semibold rounded-full shadow transition hover:bg-gray-100">Join Now</a>
        </div>
      </section> */}
                </div>
      <Footer />
    </div>
  );
}
