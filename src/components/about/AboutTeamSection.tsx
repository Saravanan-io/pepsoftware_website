"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  doodleRole: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: "member-1",
    name: "Karthikeyan.S",
    role: "FULL STACK DEVELOPER",
    doodleRole: "Full Stack\nDeveloper",
    bio: "I build modern, user-friendly web applications and digital solutions that turn ideas into real products.",
    imageSrc: "/images/about/team-member-1.png",
    imageAlt: "Karthikeyan.S - Full Stack Developer",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:contact@pepsoftwares.com",
    },
  },
  {
    id: "member-2",
    name: "Saravanan.J",
    role: "FULL STACK DEVELOPER",
    doodleRole: "Full Stack\nDeveloper",
    bio: "I focus on building scalable software solutions and creating impactful digital experiences.",
    imageSrc: "/images/about/team-member-2-v3.png",
    imageAlt: "Saravanan.J - Full Stack Developer",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:contact@pepsoftwares.com",
    },
  },
];

export function AboutTeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Background Ambient Violet Blurs */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Header Section (Exact Match to Reference Image) ─── */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <RevealOnScroll>
            {/* Tagline Overline */}
            <span className="font-syne text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#7C3AED] block mb-2">
              THE PEOPLE BEHIND THE WORK
            </span>
            <div className="w-8 h-[2px] bg-[#7C3AED] rounded-full mx-auto mb-3" />

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                Team Leads
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#64748B] font-normal max-w-md mx-auto">
              A small team building thoughtful digital experiences.
            </p>
          </RevealOnScroll>
        </div>

        {/* ─── Two Team Members Grid (Exact Match to Reference Image) ─── */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Subtle Connecting Wavy Line Between Members (Desktop) */}
          <div className="hidden md:block absolute top-[28%] left-[28%] right-[28%] h-20 pointer-events-none z-0">
            <svg
              viewBox="0 0 300 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M 10 65 C 90 45, 170 15, 290 22"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.85"
              />
            </svg>
            {/* Subtle center tick marks */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 rotate-12">
              <span className="w-1 h-3 bg-[#8B5CF6]/70 rounded-full" />
              <span className="w-1 h-3.5 bg-[#8B5CF6]/70 rounded-full -mt-0.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            {TEAM_MEMBERS.map((member, idx) => {
              const isFirst = idx === 0;

              return (
                <RevealOnScroll key={member.id} delay={idx * 0.15}>
                  <div className="relative flex flex-col items-center text-center group">
                    
                    {/* Visual Portrait Stage */}
                    <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[1024/900] flex items-end justify-center">
                      
                      {/* Organic Lavender Backdrop Blobs */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        {/* Primary large soft purple circle */}
                        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full bg-[#EDE9FE]/90 shadow-[0_20px_50px_rgba(237,233,254,0.7)]" />
                        
                        {/* Secondary organic blob */}
                        <div
                          className={`absolute w-[240px] h-[240px] rounded-[55%_45%_60%_40%] bg-[#DDD6FE]/70 ${
                            isFirst ? "-top-2 right-2" : "-top-2 left-2"
                          }`}
                        />
                      </div>

                      {/* Playful Doodles: Hand-drawn Role & Arrows */}
                      {isFirst ? (
                        <>
                          {/* Member 1: Left Doodles */}
                          <div className="absolute top-[34%] -left-3 sm:left-0 lg:left-2 -translate-y-1/2 z-20 pointer-events-none text-left">
                            <span className="font-handwriting text-2xl sm:text-3xl text-[#475569] leading-tight block -rotate-6">
                              Full Stack
                              <br />
                              Developer
                            </span>
                            {/* Curved arrow pointing down-right toward him */}
                            <svg
                              className="w-7 h-7 text-[#475569] mt-1 ml-5 -rotate-12"
                              viewBox="0 0 32 32"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M 6 4 C 12 14, 16 20, 22 24" />
                              <path d="M 16 25 L 22 24 L 21 18" />
                            </svg>
                          </div>

                          {/* Tick marks near top-left of head (safely above text) */}
                          <div className="absolute top-[10%] left-[20%] sm:left-[22%] z-20 flex gap-1 -rotate-12 pointer-events-none">
                            <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                            <span className="w-1 h-4 bg-[#7C3AED] rounded-full -mt-1" />
                            <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Member 2: Right Doodles */}
                          <div className="absolute top-[34%] -right-3 sm:right-0 lg:right-2 -translate-y-1/2 z-20 pointer-events-none text-right">
                            <span className="font-handwriting text-2xl sm:text-3xl text-[#475569] leading-tight block rotate-6">
                              Full Stack
                              <br />
                              Developer
                            </span>
                            {/* Curved arrow pointing down-left toward him */}
                            <svg
                              className="w-7 h-7 text-[#475569] mt-1 mr-5 ml-auto rotate-12"
                              viewBox="0 0 32 32"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M 26 4 C 20 14, 16 20, 10 24" />
                              <path d="M 16 25 L 10 24 L 11 18" />
                            </svg>
                          </div>

                          {/* Tick marks near top-right of head (safely above text) */}
                          <div className="absolute top-[10%] right-[20%] sm:right-[22%] z-20 flex gap-1 rotate-12 pointer-events-none">
                            <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                            <span className="w-1 h-4 bg-[#7C3AED] rounded-full -mt-1" />
                            <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                          </div>
                        </>
                      )}

                      {/* Cutout Portrait Image with Smooth Gradient Bottom Vignette */}
                      <div
                        className="relative w-full h-full flex items-end justify-center"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom, black 72%, transparent 98%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 72%, transparent 98%)",
                        }}
                      >
                        <Image
                          src={member.imageSrc}
                          alt={member.imageAlt}
                          width={440}
                          height={410}
                          className="team-portrait-bw object-contain object-bottom max-h-[95%] w-auto grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer"
                          priority
                        />
                      </div>

                    </div>

                    {/* Member Details Card (Exact Match to Reference Layout) */}
                    <div className="mt-4 flex flex-col items-center text-center">
                      
                      {/* Purple Accent Bar Above Name */}
                      <div className="w-8 h-[3px] bg-[#7C3AED] rounded-full mb-2.5" />

                      {/* Member Name */}
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                        {member.name}
                      </h3>

                      {/* Role Badge */}
                      <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#7C3AED] mt-1 mb-2.5 block">
                        {member.role}
                      </span>

                      {/* Bio Statement */}
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm font-normal mb-4">
                        {member.bio}
                      </p>

                      {/* Social Media Link Pills */}
                      <div className="flex items-center justify-center gap-2.5">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                            className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                          >
                            <LinkedInIcon className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on GitHub`}
                            className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                          >
                            <GitHubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {member.socials.email && (
                          <a
                            href={member.socials.email}
                            aria-label={`Email ${member.name}`}
                            className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
