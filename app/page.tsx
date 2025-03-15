'use client';

import React, { useState } from "react"
import { LayoutTemplate, Video, Languages, PenTool, Search, Database } from "lucide-react"
import axios from "axios"

export default function Home() {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); // To show success/error messages

  // Email validation function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    setMessage(""); // Clear previous messages

    if (!email.trim()) {
      setMessage("⚠️ Email is required!");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("⚠️ Invalid email format!");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", { email });

      if (response.status === 200) {
        setMessage("✅ Form Submitted Successfully!");
      }
    } catch (error: any) {
      if (error.response?.status === 422) {
        setMessage("❌ Emails ending with '@ez.works' are not allowed!");
      } else {
        setMessage("❌ Something went wrong! Try again.");
      }
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-8">
        {/* Logo and Heading Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <div className="absolute inset-0 rounded-md border-2 border-orange-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#42c0f5]">EZ</span>
              </div>
            </div>
            <span className="text-4xl sm:text-6xl font-bold text-[#42c0f5]">Works</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-[#1a365d]">Suite Of Business Support Services</h1>

          <p className="text-lg text-[#1a365d] max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed
          </p>

          {/* Contact Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="px-4 py-3 border border-gray-300 rounded-md flex-grow"
            />
            <button 
              onClick={handleSubmit} 
              className="px-6 py-3 bg-[#e67e22] text-white font-medium rounded-md hover:bg-[#d35400] transition-colors"
            >
              Contact Me
            </button>
          </div>
          {message && <p className="text-red-500">{message}</p>}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard icon={<LayoutTemplate className="w-8 h-8 text-white" />} title="Presentation Design" />

          <ServiceCard icon={<Video className="w-8 h-8 text-white" />} title="Audio - Visual Production" />

          <ServiceCard icon={<Languages className="w-8 h-8 text-white" />} title="Translation Services" />

          <ServiceCard icon={<PenTool className="w-8 h-8 text-white" />} title="Graphic Design" />

          <ServiceCard icon={<Search className="w-8 h-8 text-white" />} title="Research & Analytics" />

          <ServiceCard icon={<Database className="w-8 h-8 text-white" />} title="Data Processing" />
        </div>
      </div>
    </main>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="bg-[#0f2a4a] p-6 rounded-md">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-[#42c0f5] text-xl font-medium">{title}</h3>
      </div>
      <p className="text-white">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
    </div>
  )
}