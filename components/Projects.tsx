'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  year: string
  category: string
  accentColor: string
  accentColorDim: string
  number: string
  androidLink?: string
  iosLink?: string
  iosStatus?: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Credvisor',
    description:
      'Developed a fintech lead management and service fulfilment application using Flutter, enabling channel partners to generate, track, and manage financial product leads and customer service requests. Implemented role-based dashboards, lead allocation workflows, real-time status tracking, and API integrations.',
    tech: ['Flutter', 'Dart', 'MVVM', 'GetX', 'REST APIs', 'Firebase'],
    year: '2024 - 2025',
    category: 'Fintech & Lead Management',
    accentColor: '#8b5cf6',
    accentColorDim: 'rgba(139,92,246,0.12)',
    number: '01',
    androidLink: 'https://play.google.com/store/search?q=credvisor&c=apps',
    iosLink: 'https://apps.apple.com/in/app/credvisor/id6744828115',
    link: 'https://apps.apple.com/in/app/credvisor/id6744828115',
  },
  {
    id: 2,
    title: 'Sri Tirupati Jewellers',
    description:
      'Developed a jewellery e-commerce and customer engagement application using React Native, enabling users to browse jewellery collections, manage accounts, explore gold savings schemes, view transaction history, and access showroom services across Android and iOS platforms.',
    tech: ['React Native', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'REST APIs'],
    year: '2024',
    category: 'E-Commerce & Digital Gold',
    accentColor: '#f59e0b',
    accentColorDim: 'rgba(245,158,11,0.12)',
    number: '02',
    androidLink: 'https://play.google.com/store/search?q=sri+tirupati+jewellers+digi+gold&c=apps',
    iosStatus: 'iOS in process',
    link: 'https://play.google.com/store/search?q=sri+tirupati+jewellers+digi+gold&c=apps',
  },
  {
    id: 3,
    title: 'Mattress Fab',
    description:
      'Developed a B2B textile and mattress fabric marketplace application using React Native, enabling users to browse fabric collections, explore product categories, manage orders, and connect directly with manufacturers across Android and iOS platforms.',
    tech: ['React Native', 'JavaScript', 'TypeScript', 'REST APIs', 'Responsive UI'],
    year: '2024',
    category: 'B2B Textile Marketplace',
    accentColor: '#f43f5e',
    accentColorDim: 'rgba(244,63,94,0.12)',
    number: '03',
    androidLink: 'https://play.google.com/store/search?q=mattress+fab&c=apps',
    iosLink: 'https://apps.apple.com/in/app/mattress-fab/id6759448291',
    link: 'https://apps.apple.com/in/app/mattress-fab/id6759448291',
  },
  {
    id: 4,
    title: 'Wheelboard',
    description:
      'Developed a transport and fleet management platform using Flutter, connecting fleet owners, drivers, mechanics, and automotive service providers through a unified digital ecosystem. Implemented features for job discovery, trip management, service requests, lead generation, and real-time tracking.',
    tech: ['Flutter', 'Dart', 'Real-time Tracking', 'REST APIs', 'MVVM'],
    year: '2025',
    category: 'Transport & Fleet Logistics',
    accentColor: '#10b981',
    accentColorDim: 'rgba(16,185,129,0.12)',
    number: '04',
    androidLink: 'https://play.google.com/store/apps/details?id=com.wheelboard.app&hl=en',
    link: 'https://play.google.com/store/apps/details?id=com.wheelboard.app&hl=en',
  },
  {
    id: 5,
    title: 'KidsChaupal',
    description:
      'Developed an educational and mentorship platform using Flutter, connecting children and parents with mentors, coaches, and learning institutes. Implemented features for mentor discovery, workshop registrations, event management, skill development programs, and user engagement across platforms.',
    tech: ['Flutter', 'Dart', 'Responsive UI', 'REST APIs', 'Firebase'],
    year: '2023',
    category: 'EdTech & Mentorship',
    accentColor: '#00d4ff',
    accentColorDim: 'rgba(0,212,255,0.12)',
    number: '05',
    androidLink: 'https://play.google.com/store/apps/details?id=com.kidschaupal.app&hl=en_IN',
    iosLink: 'https://kidschaupal.com',
    link: 'https://play.google.com/store/apps/details?id=com.kidschaupal.app&hl=en_IN',
  },
  {
    id: 6,
    title: 'DigiSakshar',
    description:
      'Developed a digital learning and literacy platform using Flutter, enabling users to access educational content, video-based tutorials, assessments, and learning progress tracking. Implemented OTP-based authentication, bookmarking, notifications, and social sharing for a large user base.',
    tech: ['Flutter', 'Dart', 'OTP Auth', 'Video Streaming', 'REST APIs'],
    year: '2023',
    category: 'Digital Literacy Platform',
    accentColor: '#4ecdc4',
    accentColorDim: 'rgba(78,205,196,0.12)',
    number: '06',
    androidLink: 'https://play.google.com/store/apps/details?id=com.vfnf.digisakshar&hl=en_IN',
    link: 'https://play.google.com/store/apps/details?id=com.vfnf.digisakshar&hl=en_IN',
  },
  {
    id: 7,
    title: 'Sashakti',
    description:
      "Developed a women's empowerment and digital learning platform using Flutter, providing access to educational courses, community forums, digital resources, and document repositories to support women's entrepreneurial journeys and digital education.",
    tech: ['Flutter', 'Dart', 'Content Management', 'Forums', 'REST APIs'],
    year: '2023',
    category: "Women's Empowerment & Learning",
    accentColor: '#ec4899',
    accentColorDim: 'rgba(236,72,153,0.12)',
    number: '07',
    androidLink: 'https://sashakti.in',
    link: 'https://sashakti.in',
  },
  {
    id: 8,
    title: 'Addon Pharma ERP',
    description:
      'Complete billing, accounting, and inventory management solution built with Flutter specifically designed for pharmaceutical wholesalers and distributors to automate stock, invoices, and distribution.',
    tech: ['Flutter', 'Dart', 'ERP Architecture', 'GetX', 'REST APIs'],
    year: '2025',
    category: 'Enterprise Pharma Solution',
    accentColor: '#eab308',
    accentColorDim: 'rgba(234,179,8,0.12)',
    number: '08',
    androidLink: 'https://play.google.com/store/apps/details?id=com.addonpharma.erp&hl=en',
    link: 'https://play.google.com/store/apps/details?id=com.addonpharma.erp&hl=en',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-3xl overflow-hidden h-full flex flex-col"
        style={{
          background: hovered
            ? `linear-gradient(145deg, ${project.accentColorDim}, rgba(255,255,255,0.04))`
            : 'rgba(255,255,255,0.025)',
          border: `1px solid ${hovered ? project.accentColor + '35' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(24px)',
          boxShadow: hovered
            ? `0 0 60px ${project.accentColor}18, 0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
          transform: hovered ? 'translateY(-8px) scale(1.005)' : 'translateY(0) scale(1)',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Animated glowing border top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${project.accentColor}60, transparent)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Ambient glow spot */}
        <div
          className="absolute top-0 left-0 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${project.accentColor}18 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transform: 'translate(-30%, -30%)',
          }}
        />

        <div className="relative z-10 p-7 lg:p-9 flex flex-col h-full">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Number */}
              <div
                className="text-4xl lg:text-5xl font-black leading-none select-none transition-all duration-500"
                style={{
                  WebkitTextStroke: `1.5px ${project.accentColor}${hovered ? '60' : '25'}`,
                  color: 'transparent',
                }}
              >
                {project.number}
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: project.accentColor }}
                >
                  {project.category}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Store Links Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.androidLink && (
              <a
                href={project.androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/90 hover:text-white transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0004 0-.5511.4482-1.0004.9993-1.0004.5511 0 .9993.4493.9993 1.0004 0 .5518-.4482 1.0004-.9993 1.0004m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0004 0-.5511.4482-1.0004.9993-1.0004.5511 0 .9993.4493.9993 1.0004 0 .5518-.4482 1.0004-.9993 1.0004m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.084 12 8.084c-1.8533 0-3.5902.3276-5.1368.8653L4.8409 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
                <span>Android Link</span>
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.iosLink && (
              <a
                href={project.iosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/90 hover:text-white transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.36-.58.67-1.08 1.74-.95 2.77.99.08 2.06-.52 2.68-1.28z" />
                </svg>
                <span>iOS Link</span>
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.iosStatus && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-300/80"
                style={{
                  background: 'rgba(245,158,11,0.08)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                {project.iosStatus}
              </span>
            )}
          </div>

          {/* Divider */}
          <div
            className="h-[1px] mt-auto mb-5 transition-all duration-500"
            style={{
              background: hovered
                ? `linear-gradient(to right, ${project.accentColor}40, rgba(255,255,255,0.06), transparent)`
                : 'rgba(255,255,255,0.06)',
            }}
          />

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[11px] font-semibold rounded-full tracking-wide transition-all duration-300"
                style={{
                  background: hovered ? `${project.accentColor}12` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${hovered ? project.accentColor + '35' : 'rgba(255,255,255,0.08)'}`,
                  color: hovered ? project.accentColor : '#9ca3af',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────
const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '8+', label: 'Apps Shipped' },
  { value: 'Flutter & RN', label: 'Cross-Platform' },
  { value: 'Native Android', label: 'Java & Kotlin' },
]

export function Projects() {
  const headingRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headingRef, { once: true, margin: '-80px' })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' })

  return (
    <section id="work" className="relative py-36 px-4 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-60 right-[-100px] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(78,205,196,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section header ─────────────────────────── */}
        <div ref={headingRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, #00d4ff, #4ecdc4)' }}
            />
            <span className="text-[11px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              Selected Work
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.95]"
            >
              Featured
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-400 text-base max-w-md leading-relaxed lg:text-right"
            >
              Production mobile applications delivered from architecture and API integration to deployment on Google Play and Apple App Store.
            </motion.p>
          </div>
        </div>

        {/* ── Stats strip ───────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative py-5 px-6 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="text-2xl lg:text-3xl font-black mb-1"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Project grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── GitHub CTA ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/KunalDevWorld"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-400"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View repositories on GitHub</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
