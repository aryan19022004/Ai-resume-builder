"use client";

import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import {
  ArrowBigUp,
  AtomIcon,
  Edit,
  Share2,
  Star,
  Users,
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Heart
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Page = () => {
  const user = useUser();

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      feedback: "This AI resume builder helped me land my dream job at Google! The AI suggestions were spot-on and saved me hours of work.",
      rating: 5,
      image: "/testimonials/priya.jpg" // Add placeholder image later
    },
    {
      name: "Rahul Verma",
      role: "Product Manager",
      company: "Amazon",
      feedback: "Incredible tool! The resume templates are professional and the AI assistance made my experience section much more impactful.",
      rating: 5,
      image: "/testimonials/rahul.jpg"
    },
    {
      name: "Neha Gupta",
      role: "Data Scientist",
      company: "Microsoft",
      feedback: "Got multiple interview calls within a week of using this resume. Highly recommended for all job seekers!",
      rating: 5,
      image: "/testimonials/neha.jpg"
    }
  ];

  // Stats data
  const stats = [
    { label: "Active Users", value: "100+", icon: Users },
    { label: "Resumes Created", value: "250+", icon: Edit },
    { label: "Success Rate", value: "95%", icon: Star },
    { label: "Avg. Response Time", value: "< 48 hrs", icon: Zap }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section>
        <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
          <div className="inline-flex items-center justify-between p-1 mb-7 pe-4 text-sm text-yellow-700 bg-yellow-100 rounded-full hover:bg-yellow-200 transition-colors cursor-pointer">
            <span className="text-xs bg-primary-700 rounded-full text-white px-4 py-1.5 me-3">New</span>
            <span className="text-sm font-medium">AI-Powered Resume Builder v2.0 is here!</span>
            <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </div>
          <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Build Your Resume <span className="text-primary-700 max-sm:block">With AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
            Effortlessly Craft a Professional Resume with Our AI-Powered Builder
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
                Get Started
              </span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary">
                Learn more
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-700 mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 md:px-10">
        <h2 className="font-bold text-3xl" id="learn-more">
          How it Works?
        </h2>
        <h2 className="text-md text-gray-500">
          Generate resume in just 3 steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center md:text-start md:grid-cols-2 lg:grid-cols-3 md:px-24">
          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <AtomIcon className="h-8 w-8 text-primary-700" />
            <h2 className="mt-4 text-xl font-bold text-black">
              Create Your Template
            </h2>
            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Start by selecting the color scheme for your resume template. Our
              single, professionally designed template ensures a clean and
              consistent look for all users.
            </p>
          </div>

          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Edit className="h-8 w-8 text-primary-700" />
            <h2 className="mt-4 text-xl font-bold text-black">
              Update Your Information
            </h2>
            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Enter your personal details, work experience, education, and
              skills into the provided form. Our AI assists you in filling out
              each section accurately and effectively.
            </p>
          </div>

          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Share2 className="h-8 w-8 text-primary-700" />
            <h2 className="mt-4 text-xl font-bold text-black">
              Share Your Resume
            </h2>
            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              After completing your resume, save it securely and generate a
              shareable link. Easily update your information anytime and share
              the link with potential employers or download it in a preferred
              format.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 mx-auto max-w-screen-xl lg:py-20 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-4">What Our Users Say</h2>
          <p className="text-md text-gray-500 max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their job search with our AI resume builder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-700 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"
          >
            Start Your Journey Today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 mx-auto max-w-screen-xl lg:py-20 lg:px-12">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Resume?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of job seekers who've successfully landed interviews with our AI-powered platform
          </p>
          <Link
            href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
            className="inline-block rounded-full bg-white px-12 py-4 text-sm font-medium text-primary-700 transition hover:bg-gray-100 focus:outline-none focus:ring focus:ring-primary-300"
          >
            <div className="flex items-center justify-center">
              <ArrowBigUp className="h-6 w-6 mr-2" />
              Get Started For Free
            </div>
          </Link>
          <p className="text-sm mt-4 opacity-75">No credit card required • Free forever</p>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-screen-xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ResumeAI</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empowering job seekers with AI-powered resume building tools.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-primary-600" />
                  <Link href="mailto:support@resumeai.com" className="hover:text-primary-600 transition-colors">
                    support@resumeai.com
                  </Link>
                </li>
                <li className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-primary-600" />
                  <Link href="tel:+1234567890" className="hover:text-primary-600 transition-colors">
                    +1 (234) 567-890
                  </Link>
                </li>
                <li className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-3">
                Subscribe to our newsletter for tips and updates.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="text-sm text-gray-500">
                © 2024{" "}
                <span className="hover:text-primary-600 hover:cursor-pointer font-medium">
                  ResumeAI
                </span>
                . All Rights Reserved.
              </span>
              <div className="mt-4 md:mt-0 text-sm text-gray-500">
                <span className="inline-flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Crafted by{" "}
                  <span className="font-semibold text-primary-600 ml-1">
                    Aryan & The Team
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;