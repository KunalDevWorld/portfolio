'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '4+', label: 'Years Experience', color: '#00d4ff' },
  { value: '8+', label: 'Shipped Apps', color: '#4ecdc4' },
  { value: 'Flutter & RN', label: 'Primary Expertise', color: '#a78bfa' },
  { value: '13K+', label: 'YouTube Community', color: '#f59e0b' },
]

const skills = [
  {
    category: 'Languages & Core',
    color: '#00d4ff',
    items: ['Dart', 'JavaScript', 'TypeScript', 'Java', 'Kotlin'],
  },
  {
    category: 'Frameworks & SDKs',
    color: '#4ecdc4',
    items: ['Flutter', 'React Native', 'Android SDK'],
  },
  {
    category: 'State Management & Arch',
    color: '#8b5cf6',
    items: ['GetX', 'Provider', 'Bloc', 'Redux Toolkit', 'MVVM', 'Clean Architecture', 'Repository Pattern'],
  },
  {
    category: 'Backend, APIs & Storage',
    color: '#f59e0b',
    items: ['REST APIs', 'GraphQL', 'Firebase & FCM', 'Node.js', 'SQLite', 'Hive', 'Firestore'],
  },
  {
    category: 'Integrations & UI/UX',
    color: '#ec4899',
    items: ['Payment Gateways', 'Push Notifications', 'Deep Linking', 'Social Login', 'Material Design', 'Responsive UI'],
  },
  {
    category: 'Tools & Practices',
    color: '#10b981',
    items: ['Git & GitHub', 'Bitbucket', 'Postman', 'Android Studio', 'VS Code', 'Agile / Scrum', 'CI/CD & Profiling'],
  },
]

const journey = [
  {
    period: 'Dec 2025 – Present',
    role: 'Sr. Software Engineer',
    company: 'Addon Shareware Private Limited',
    location: 'Noida, UP, IND',
    points: [
      'Leading cross-platform mobile application development using Flutter and React Native for Android & iOS platforms.',
      'Designing and implementing scalable architectures using MVVM, GetX, and modern mobile development practices.',
      'Developing high-performance applications with a strong focus on code quality, maintainability, and user experience.',
      'Integrating REST APIs, Firebase services, payment gateways, push notifications, and third-party SDKs.',
      'Collaborating with backend teams to optimise APIs, data flow, and overall application performance.',
      'Contributing to application architecture decisions, feature planning, debugging, and production deployments.',
    ],
    color: '#00d4ff',
  },
  {
    period: 'Sep 2023 – Dec 2024',
    role: 'Flutter Developer',
    company: 'Bluelupin Technologies Pvt. Ltd.',
    location: 'Noida, UP, IND',
    points: [
      'Developed and maintained high-performance cross-platform mobile applications using Flutter.',
      'Integrated REST APIs, Firebase services, and third-party libraries to enhance application functionality.',
      'Collaborated with designers and backend teams to deliver responsive and user-friendly mobile solutions.',
      'Optimised application performance and improved overall user experience across Android and iOS platforms.',
    ],
    color: '#4ecdc4',
  },
  {
    period: 'Jan 2022 – Aug 2023',
    role: 'Software Engineer',
    company: 'Techweiler Software Private Limited',
    location: 'Remote',
    points: [
      'Developed and maintained mobile applications using Flutter (Dart) and Native Android (Java/Kotlin) for Android platforms.',
      'Implemented scalable architectures, reusable components, and optimised application performance to ensure high-quality user experiences.',
      'Integrated REST APIs, third-party SDKs, and backend services to deliver robust and feature-rich applications.',
      'Collaborated with designers, product managers, and backend teams to build intuitive, responsive, and business-focused mobile solutions.',
    ],
    color: '#a78bfa',
  },
]

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    period: '2021 – 2023',
    institution: 'Swami Vivekanand Subharti University, Meerut',
    mode: 'Distance Learning Mode',
    specialization: 'Specialised in Marketing & Information Technology',
    color: '#4ecdc4',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2017 – 2020',
    institution: 'IMR College, Duhai',
    mode: 'Affiliated with Chaudhary Charan Singh (CCS) University, Meerut',
    specialization: 'Computer Applications & Software Foundations',
    color: '#00d4ff',
  },
]

export function Experience() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' })

  return (
    <section
      id="experience"
      className="relative py-36 px-4 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #121212 0%, #0d1017 50%, #121212 100%)',
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section header ─────────────────────────── */}
        <div ref={headRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, #00d4ff, #4ecdc4)' }}
            />
            <span className="text-[11px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              Career &amp; Technical Depth
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.95]"
          >
            Experience &amp;{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </motion.h2>
        </div>

        {/* ── Stats row ─────────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-8 px-6 rounded-2xl text-center overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${stat.color}20`,
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${stat.color}10 0%, transparent 70%)`,
                }}
              />
              <div
                className="text-3xl lg:text-4xl font-black mb-2 relative z-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}bb)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Two column layout: Timeline & Skills ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20 mb-28">
          {/* Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold text-gray-400 mb-10 flex items-center gap-3 tracking-widest uppercase">
              <span
                className="w-6 h-[1px]"
                style={{ background: 'linear-gradient(to right, #00d4ff, transparent)' }}
              />
              Work Experience
            </h3>

            <div className="relative pl-7">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-[1px]"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(78,205,196,0.3), rgba(167,139,250,0.1), transparent)',
                }}
              />

              {journey.map((item, i) => (
                <motion.div
                  key={item.company + item.period}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.55rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0d1017] transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Ring on hover */}
                  <div
                    className="absolute -left-[1.9rem] top-[2px] w-5 h-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 12px ${item.color}` }}
                  />

                  <div className="pl-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span
                        className="text-[11px] font-black tracking-[0.2em] uppercase"
                        style={{ color: item.color }}
                      >
                        {item.period}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-white font-bold text-lg">
                      {item.role}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">
                      {item.company}
                    </p>

                    <ul className="space-y-2 mt-2">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-gray-400 leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: item.color, opacity: 0.7 }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold text-gray-400 mb-10 flex items-center gap-3 tracking-widest uppercase">
              <span
                className="w-6 h-[1px]"
                style={{ background: 'linear-gradient(to right, #4ecdc4, transparent)' }}
              />
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-2xl group relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: `1px solid ${group.color}20`,
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${group.color}10 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${group.color}50, transparent)` }}
                  />

                  <h4
                    className="text-[10px] font-black tracking-[0.25em] uppercase mb-3 relative z-10"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md text-gray-300 bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Education Section ─────────────────────── */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-10 flex items-center gap-3 tracking-widest uppercase">
            <span
              className="w-6 h-[1px]"
              style={{ background: 'linear-gradient(to right, #00d4ff, #4ecdc4)' }}
            />
            Education &amp; Academic Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${edu.color}25`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${edu.color}12 0%, transparent 70%)`,
                  }}
                />
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-black tracking-[0.25em] uppercase"
                    style={{ color: edu.color }}
                  >
                    {edu.period}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: `${edu.color}15`,
                      color: edu.color,
                      border: `1px solid ${edu.color}30`,
                    }}
                  >
                    🎓
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium text-cyan-300/80 mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {edu.mode}
                </p>
                <div className="pt-3 border-t border-white/5 text-xs text-gray-400">
                  {edu.specialization}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
