"use client";

import { useState } from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProfileSetup() {
  const [profession, setProfession] = useState("Working Professional");
  const [domain, setDomain] = useState("Design");
  const [role, setRole] = useState("Product Designer");
  const [experience, setExperience] = useState("2");

  const professions = ["Working Professional", "Student", "Freelancer"];
  const domains = ["Design", "Development", "Marketing", "Sales"];
  const roles = ["Product Designer", "UX Designer", "UI Designer", "Design Manager"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-20">
        <Image
          src="/WhatsApp Image 2026-03-19 at 21.30.15.jpeg"
          alt="Crow Logo"
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
          style={{ width: 40, height: 40 }}
        />
        <span className="text-xl font-semibold">crow</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-2xl mx-auto">
        {/* BACK BUTTON */}
        <button className="mb-12 text-gray-400 hover:text-white transition">
          <ChevronLeft size={32} />
        </button>

        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
            Tell others about your work <span className="text-3xl">👩‍💻</span>
          </h1>
          <p className="text-gray-400 text-lg">So your matches make more sense</p>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-4 mb-8">
          {/* Profession */}
          <div className="relative">
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-5 py-4 text-white font-medium appearance-none cursor-pointer hover:border-slate-600 focus:outline-none focus:border-purple-500 transition"
            >
              {professions.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <ChevronLeft size={20} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-270 text-gray-400 pointer-events-none rotate-[270deg]" />
          </div>

          {/* Domain */}
          <div className="relative">
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-5 py-4 text-white font-medium appearance-none cursor-pointer hover:border-slate-600 focus:outline-none focus:border-purple-500 transition"
            >
              {domains.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <ChevronLeft size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none rotate-[270deg]" />
          </div>

          {/* Role */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-5 py-4 text-white font-medium appearance-none cursor-pointer hover:border-slate-600 focus:outline-none focus:border-purple-500 transition"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <ChevronLeft size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none rotate-[270deg]" />
          </div>

          {/* Experience */}
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter Experience Level"
            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-5 py-4 text-white font-medium placeholder-gray-500 hover:border-slate-600 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* NEXT BUTTON */}
        <button className="w-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 hover:from-purple-600 hover:via-purple-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl">
          Next
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
