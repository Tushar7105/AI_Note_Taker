"use client"
import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const features = [
    {
      title: "Take Notes Side-by-Side",
      description: "Organize your thoughts with our innovative split-screen interface. Compare, contrast, and connect ideas seamlessly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 4l4-4m-4 4l4 4" />
        </svg>
      )
    },
    {
      title: "AI Integrated to Answer All Your Questions",
      description: "Get instant answers and insights from our advanced AI. Ask questions about your notes and get intelligent responses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Smart Organization",
      description: "Automatically categorize and tag your notes with AI-powered organization that learns from your writing patterns.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Real-time Collaboration",
      description: "Share and collaborate on notes with your team in real-time. See changes as they happen and work together seamlessly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Advanced Search",
      description: "Find any note instantly with our powerful search engine. Search by content, tags, dates, or even ask AI to find specific information.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Export Anywhere",
      description: "Export your notes to PDF, Word, Markdown, or sync with your favorite apps. Your data, your way.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Image src="/logo.svg" alt="logo" width={200} height={150} />
            <div className="flex items-center space-x-4">
            
              <button onClick={()=>router.push("/dashboard")} className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of
            <span className="block text-blue-600">AI-Powered Note Taking</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your productivity with intelligent note-taking. Take notes side-by-side, 
            get AI assistance, and organize your thoughts like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>router.push("/dashboard")} className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free tier • Cancel anytime
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to supercharge your productivity
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover powerful features designed to make note-taking effortless and intelligent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Notes Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to revolutionize your note-taking?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Join thousands of users who have already transformed their productivity with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
        Upgrade to Pro
        </button>
        <button className="border border-gray-600 text-white hover:border-gray-400 hover:bg-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
        Learn More
        </button>
        </div>
        </div>
        </section> */}

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">NotesAI</h3>
              <p className="text-gray-600 text-sm">
                The most intelligent note-taking app powered by AI technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-sm text-gray-600">
              © 2024 NotesAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// "use client"
// // import { api } from "@/convex/_generated/api";
// import { UserButton, useUser } from "@clerk/nextjs";
// import { useMutation } from "convex/react";
// import Image from "next/image";
// import { useEffect } from "react";
// import { api } from "../convex/_generated/api";

// export default function Home() {
//   const {user} = useUser();
//   const createUser = useMutation(api.user.createUser);
//   const CheckUser = async()=>{
//     const result = await createUser({
//       email: user?.primaryEmailAddress.emailAddress,
//       userName : user?.fullName,
//       imageUrl: user?.imageUrl
//     })
//     console.log(result);
//   }
//   useEffect(()=>{user&&CheckUser();}, [user]);
//   return (
//     <div>Hello World
//       <UserButton></UserButton>
//     </div>
//   );
// }