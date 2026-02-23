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
  Heart,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Award,
  Clock,
  Briefcase,
  TrendingUp,
  Rocket,
  Target,
  Shield,
  MessageCircle,
  Download,
  FileText
} from "lucide-react";
import Link from "next/link";
import React from "react";

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
      image: "/testimonials/priya.jpg",
      achievement: "Hired in 2 weeks"
    },
    {
      name: "Rahul Verma",
      role: "Product Manager",
      company: "Amazon",
      feedback: "Incredible tool! The resume templates are professional and the AI assistance made my experience section much more impactful.",
      rating: 5,
      image: "/testimonials/rahul.jpg",
      achievement: "5+ interview calls"
    },
    {
      name: "Neha Gupta",
      role: "Data Scientist",
      company: "Microsoft",
      feedback: "Got multiple interview calls within a week of using this resume. Highly recommended for all job seekers!",
      rating: 5,
      image: "/testimonials/neha.jpg",
      achievement: "3 job offers"
    }
  ];

  // Stats data
  const stats = [
    { label: "Active Users", value: "100+", icon: Users, description: "Growing daily" },
    { label: "Resumes Created", value: "250+", icon: FileText, description: "And counting" },
    { label: "Success Rate", value: "95%", icon: TrendingUp, description: "Interview success" },
    { label: "Avg. Response", value: "< 48 hrs", icon: Clock, description: "From employers" }
  ];

  // Features data
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Suggestions",
      description: "Get intelligent recommendations for your experience and skills sections"
    },
    {
      icon: Shield,
      title: "ATS-Friendly Templates",
      description: "Optimized to pass through applicant tracking systems"
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download as PDF, DOCX, or share via unique link"
    },
    {
      icon: Target,
      title: "Targeted Content",
      description: "Tailor your resume for specific job descriptions"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="relative py-12 px-6 mx-auto max-w-screen-xl lg:py-20 lg:px-12">
          {/* Announcement Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full px-4 py-2 mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                NEW
              </span>
              <span className="text-sm text-gray-700">
                AI-Powered Resume Builder v2.0 is here!
              </span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Build Your Resume
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                With AI Intelligence
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Effortlessly Craft a Professional Resume with Our AI-Powered Builder.
              Join hundreds of successful job seekers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get Started Free</span>
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
              >
                Learn more
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white" />
                  ))}
                </div>
                <span>100+ users</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 mx-auto max-w-screen-xl lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 mx-auto max-w-screen-xl" id="learn-more">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            How it Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate a professional resume in just 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: AtomIcon,
              title: "Create Your Template",
              description: "Start by selecting the color scheme for your resume template. Our single, professionally designed template ensures a clean and consistent look for all users.",
              step: "01"
            },
            {
              icon: Edit,
              title: "Update Your Information",
              description: "Enter your personal details, work experience, education, and skills into the provided form. Our AI assists you in filling out each section accurately and effectively.",
              step: "02"
            },
            {
              icon: Share2,
              title: "Share Your Resume",
              description: "After completing your resume, save it securely and generate a shareable link. Easily update your information anytime and share the link with potential employers.",
              step: "03"
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute top-0 right-0 text-8xl font-bold text-gray-100 group-hover:text-indigo-100 transition-colors duration-300">
                {item.step}
              </div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 mx-auto max-w-screen-xl bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Why Choose ResumeAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you land your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 mx-auto max-w-screen-xl">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their job search
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-indigo-100 group-hover:text-indigo-200 transition-colors">
                &quot;
              </div>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs font-medium text-indigo-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 relative z-10">"{testimonial.feedback}"</p>

              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 text-indigo-600 mr-2" />
                <span className="text-indigo-600 font-medium">{testimonial.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Journey Today
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 mx-auto max-w-screen-xl">
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center text-white">
          {/* Animated background */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:30px_30px]" />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Dream Resume?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of job seekers who've successfully landed interviews with our AI-powered platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-indigo-600 bg-white rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Rocket className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                Get Started For Free
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8 text-sm opacity-90">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                No credit card required
              </span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                Free forever
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-screen-xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ResumeAI
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Empowering job seekers with AI-powered resume building tools to land their dream jobs.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Features', 'Pricing', 'FAQ'].map((item, index) => (
                  <li key={index}>
                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <Link href="mailto:support@resumeai.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    support@resumeai.com
                  </Link>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <Link href="tel:+1234567890" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    +1 (234) 567-890
                  </Link>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-400">123 Tech Street, Silicon Valley, CA</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe for tips, updates, and exclusive content.
              </p>
              <form className="flex flex-col space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                © 2024 <span className="text-indigo-400 font-medium">ResumeBuilder</span>. All Rights Reserved.
              </span>
              <div className="text-sm text-gray-500">
                <span className="inline-flex items-center">
                  <Sparkles className="h-4 w-4 mr-1 text-indigo-400" />
                  Powered by <span className="text-indigo-400 font-medium ml-1">Aryan & The Team</span>
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
