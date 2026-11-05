"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

/* ─── Smooth Animation Variants (Cubic-Bezier Easing) ──────────────────── */

const headerContainerVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const headerBarVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const connectingLineVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0.7 },
  visible: {
    opacity: 0.85,
    scaleX: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const tickMarksVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 12,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      delay: 0.48,
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: delay + 0.08,
    },
  }),
};

const primaryBlobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const secondaryBlobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -8 },
  visible: {
    opacity: 0.7,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      delay: 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const leftDoodleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: -24, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: -6,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 14,
      delay: 0.28,
    },
  },
};

const rightDoodleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 24, rotate: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 6,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 14,
      delay: 0.28,
    },
  },
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 12,
      delay: 0.4,
    },
  },
};

const headTicksVariants: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.45,
      delay: 0.32,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const portraitVariants: Variants = {
  hidden: { opacity: 0, y: 38, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const detailsContainerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.06,
      delayChildren: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const accentDashVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.45, delay: 0.28, ease: "easeOut" },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 14,
      delay: 0.42 + i * 0.08,
    },
  }),
};

export function AboutTeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Background Ambient Violet Blurs with Gentle Breathing Transition */}
      <motion.div
        initial={{ opacity: 0.2, scale: 0.92 }}
        animate={{ opacity: [0.22, 0.38, 0.22], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0.2, scale: 0.92 }}
        animate={{ opacity: [0.22, 0.38, 0.22], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Header Section: Replays Smoothly on Every Visit / Scroll ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -40px 0px" }}
          variants={headerContainerVariants}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          {/* Tagline Overline */}
          <motion.span
            variants={headerItemVariants}
            className="font-syne text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#7C3AED] block mb-2"
          >
            THE PEOPLE BEHIND THE WORK
          </motion.span>
          
          <motion.div
            variants={headerBarVariants}
            className="w-8 h-[2px] bg-[#7C3AED] rounded-full mx-auto mb-3 origin-center"
          />

          {/* Headline */}
          <motion.h2
            variants={headerItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]"
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
              Team Leads
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={headerItemVariants}
            className="mt-3 text-sm sm:text-base text-[#64748B] font-normal max-w-md mx-auto"
          >
            A small team building thoughtful digital experiences.
          </motion.p>
        </motion.div>

        {/* ─── Two Team Members Grid (Smoothly Animated on Every Visit) ─── */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Wavy Line Between Members (Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="hidden md:block absolute top-[28%] left-[28%] right-[28%] h-20 pointer-events-none z-0"
          >
            <motion.svg
              variants={connectingLineVariants}
              viewBox="0 0 300 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full origin-left"
            >
              <path
                d="M 10 65 C 90 45, 170 15, 290 22"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.85"
              />
            </motion.svg>
            {/* Center tick marks */}
            <motion.div
              variants={tickMarksVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 origin-center"
            >
              <span className="w-1 h-3 bg-[#8B5CF6]/70 rounded-full" />
              <span className="w-1 h-3.5 bg-[#8B5CF6]/70 rounded-full -mt-0.5" />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            {TEAM_MEMBERS.map((member, idx) => {
              const isFirst = idx === 0;

              return (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.18, margin: "0px 0px -40px 0px" }}
                  variants={cardContainerVariants}
                  custom={idx * 0.18}
                  className="relative flex flex-col items-center text-center group"
                >
                  
                  {/* Visual Portrait Stage */}
                  <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[1024/900] flex items-end justify-center">
                    
                    {/* Organic Lavender Backdrop Blobs with Gentle Floating Loop */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                      {/* Primary large soft purple circle */}
                      <motion.div
                        variants={primaryBlobVariants}
                        className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full bg-[#EDE9FE]/90 shadow-[0_20px_50px_rgba(237,233,254,0.7)]"
                      >
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 5.5 + idx,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full rounded-full"
                        />
                      </motion.div>
                      
                      {/* Secondary organic blob */}
                      <motion.div
                        variants={secondaryBlobVariants}
                        className={`absolute w-[240px] h-[240px] rounded-[55%_45%_60%_40%] bg-[#DDD6FE]/70 ${
                          isFirst ? "-top-2 right-2" : "-top-2 left-2"
                        }`}
                      >
                        <motion.div
                          animate={{ y: [0, 6, 0], rotate: [0, 3, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 6.5 + idx,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full rounded-[55%_45%_60%_40%]"
                        />
                      </motion.div>
                    </div>

                    {/* Playful Doodles: Hand-drawn Role & Arrows */}
                    {isFirst ? (
                      <>
                        {/* Member 1: Left Doodles */}
                        <motion.div
                          variants={leftDoodleVariants}
                          className="absolute top-[34%] -left-3 sm:left-0 lg:left-2 -translate-y-1/2 z-20 pointer-events-none text-left"
                        >
                          <span className="font-handwriting text-2xl sm:text-3xl text-[#475569] leading-tight block -rotate-6">
                            Full Stack
                            <br />
                            Developer
                          </span>
                          {/* Curved arrow pointing down-right toward him */}
                          <motion.svg
                            variants={arrowVariants}
                            className="w-7 h-7 text-[#475569] mt-1 ml-5 -rotate-12 origin-top-left"
                            viewBox="0 0 32 32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M 6 4 C 12 14, 16 20, 22 24" />
                            <path d="M 16 25 L 22 24 L 21 18" />
                          </motion.svg>
                        </motion.div>

                        {/* Tick marks near top-left of head */}
                        <motion.div
                          variants={headTicksVariants}
                          className="absolute top-[10%] left-[20%] sm:left-[22%] z-20 flex gap-1 -rotate-12 pointer-events-none origin-bottom"
                        >
                          <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                          <span className="w-1 h-4 bg-[#7C3AED] rounded-full -mt-1" />
                          <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Member 2: Right Doodles */}
                        <motion.div
                          variants={rightDoodleVariants}
                          className="absolute top-[34%] -right-3 sm:right-0 lg:right-2 -translate-y-1/2 z-20 pointer-events-none text-right"
                        >
                          <span className="font-handwriting text-2xl sm:text-3xl text-[#475569] leading-tight block rotate-6">
                            Full Stack
                            <br />
                            Developer
                          </span>
                          {/* Curved arrow pointing down-left toward him */}
                          <motion.svg
                            variants={arrowVariants}
                            className="w-7 h-7 text-[#475569] mt-1 mr-5 ml-auto rotate-12 origin-top-right"
                            viewBox="0 0 32 32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M 26 4 C 20 14, 16 20, 10 24" />
                            <path d="M 16 25 L 10 24 L 11 18" />
                          </motion.svg>
                        </motion.div>

                        {/* Tick marks near top-right of head */}
                        <motion.div
                          variants={headTicksVariants}
                          className="absolute top-[10%] right-[20%] sm:right-[22%] z-20 flex gap-1 rotate-12 pointer-events-none origin-bottom"
                        >
                          <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                          <span className="w-1 h-4 bg-[#7C3AED] rounded-full -mt-1" />
                          <span className="w-1 h-3 bg-[#7C3AED] rounded-full" />
                        </motion.div>
                      </>
                    )}

                    {/* Cutout Portrait Image with Smooth Gradient Bottom Vignette & Entrance Glide */}
                    <motion.div
                      variants={portraitVariants}
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
                        className="team-portrait-bw object-contain object-bottom max-h-[95%] w-auto grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.03] transition-all duration-700 ease-out cursor-pointer"
                        priority
                      />
                    </motion.div>

                  </div>

                  {/* Member Details Card with Staggered Entrance */}
                  <motion.div
                    variants={detailsContainerVariants}
                    className="mt-4 flex flex-col items-center text-center"
                  >
                    
                    {/* Purple Accent Bar Above Name */}
                    <motion.div
                      variants={accentDashVariants}
                      className="w-8 h-[3px] bg-[#7C3AED] rounded-full mb-2.5 origin-center"
                    />

                    {/* Member Name */}
                    <motion.h3
                      variants={textItemVariants}
                      className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight"
                    >
                      {member.name}
                    </motion.h3>

                    {/* Role Badge */}
                    <motion.span
                      variants={textItemVariants}
                      className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#7C3AED] mt-1 mb-2.5 block"
                    >
                      {member.role}
                    </motion.span>

                    {/* Bio Statement */}
                    <motion.p
                      variants={textItemVariants}
                      className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm font-normal mb-4"
                    >
                      {member.bio}
                    </motion.p>

                    {/* Social Media Link Pills */}
                    <div className="flex items-center justify-center gap-2.5">
                      {member.socials.linkedin && (
                        <motion.a
                          variants={socialItemVariants}
                          custom={0}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                        >
                          <LinkedInIcon className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {member.socials.github && (
                        <motion.a
                          variants={socialItemVariants}
                          custom={1}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on GitHub`}
                          className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {member.socials.email && (
                        <motion.a
                          variants={socialItemVariants}
                          custom={2}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.socials.email}
                          aria-label={`Email ${member.name}`}
                          className="w-7 h-7 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80 hover:bg-[#7C3AED] hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </div>

                  </motion.div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
