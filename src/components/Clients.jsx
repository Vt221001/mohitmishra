import { useEffect, useRef, useState } from 'react'
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Users,
} from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: '12+ Years Experience',
    description:
      'Extensive experience helping families and businesses choose the right insurance solutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Claim Support',
    description:
      'Guidance and support throughout the entire claim settlement process, start to finish.',
  },
  {
    icon: BadgeCheck,
    title: 'Multiple Partners',
    description:
      'Compare plans from leading insurance providers to find the best coverage for your needs.',
  },
  {
    icon: Users,
    title: 'Client First Approach',
    description:
      "Every recommendation is tailored according to the client's unique needs and goals.",
  },
]

const testimonials = [
  {
    quote:
      'Mohit Ji guided us patiently and helped us choose the right life insurance plan for our family. The process was smooth and stress-free from start to finish.',
    name: 'Rajesh Sharma',
    city: 'Varanasi',
  },
  {
    quote:
      'The best part was the claim assistance. We received complete support during the process and everything went smoothly. Truly a trustworthy advisor.',
    name: 'Amit Verma',
    city: 'Lucknow',
  },
  {
    quote:
      'Transparent advice, no pressure selling, and excellent service. We trust Mohit Ji for all our insurance needs and recommend him to everyone we know.',
    name: 'Pooja Singh',
    city: 'Prayagraj',
  },
]

const partners = [
  'HDFC Ergo',
  'ICICI Lombard',
  'Star Health',
  'Niva Bupa',
  'Tata AIA',
  'Bajaj Allianz',
  'LIC',
  'Max Bupa',
]

export default function Clients() {
  const [current, setCurrent] = useState(0)
  const [marquePaused, setMarquePaused] = useState(false)
  const timerRef = useRef(null)
  const trackRef = useRef(null)
  const touchStartX = useRef(0)
  const total = testimonials.length

  const goTo = (index) => {
    setCurrent(((index % total) + total) % total)
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 4000)
  }

  useEffect(() => {
    startAuto()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handlePrev = () => { prev(); startAuto() }
  const handleNext = () => { next(); startAuto() }
  const handleDot = (i) => { goTo(i); startAuto() }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    startAuto()
  }

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
            Trust &amp; Credibility
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Why Families Trust Mohit Mishra
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Insurance is built on trust. Our focus is helping clients make informed
            decisions while providing reliable support throughout their journey.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {trustPoints.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-blue-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon size={22} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <hr className="border-slate-100 mb-14" />

        {/* Insurance Partners — Marquee */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Insurance Partners</h3>
            <p className="text-slate-500 mt-2 text-sm">
              Compare plans from leading insurance companies.
            </p>
          </div>

          {/* Marquee container */}
          <div className="relative overflow-hidden flex flex-col gap-3">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

            <style>{`
              @keyframes marquee-rtl {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              @keyframes marquee-ltr {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
              }
              .marquee-row {
                display: flex;
                gap: 12px;
                width: max-content;
              }
              .marquee-row.rtl {
                animation: marquee-rtl 22s linear infinite;
              }
              .marquee-row.ltr {
                animation: marquee-ltr 22s linear infinite;
              }
              .marquee-row.paused {
                animation-play-state: paused;
              }
            `}</style>

            {/* Row 1 — Right to Left */}
            <div
              className={`marquee-row rtl${marquePaused ? ' paused' : ''}`}
              onMouseEnter={() => setMarquePaused(true)}
              onMouseLeave={() => setMarquePaused(false)}
            >
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap ${
                    i % 2 === 0
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'bg-slate-50 text-slate-600 border border-slate-200'
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Row 2 — Left to Right */}
            <div
              className={`marquee-row ltr${marquePaused ? ' paused' : ''}`}
              onMouseEnter={() => setMarquePaused(true)}
              onMouseLeave={() => setMarquePaused(false)}
            >
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap ${
                    i % 2 === 0
                      ? 'bg-slate-50 text-slate-600 border border-slate-200'
                      : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-100 mb-14" />

        {/* Testimonials Carousel — Enhanced */}
        <div>
          <style>{`
            @keyframes progress-bar {
              from { width: 0%; }
              to { width: 100%; }
            }
            .progress-animate {
              animation: progress-bar 4s linear forwards;
            }
            .testi-card-glow {
              background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 60%, #f8f4ff 100%);
              border: 1.5px solid #dbeafe;
              box-shadow: 0 4px 24px 0 rgba(59,130,246,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.04);
              transition: box-shadow 0.3s, border-color 0.3s;
            }
            .testi-card-glow:hover {
              box-shadow: 0 8px 40px 0 rgba(59,130,246,0.15), 0 2px 8px 0 rgba(0,0,0,0.06);
              border-color: #bfdbfe;
            }
            .avatar-ring {
              background: linear-gradient(135deg, #3b82f6, #6366f1);
              padding: 2px;
              border-radius: 9999px;
            }
            .avatar-inner {
              background: white;
              border-radius: 9999px;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .big-quote {
              font-family: Georgia, serif;
              font-size: 80px;
              line-height: 1;
              color: #bfdbfe;
              user-select: none;
              margin-bottom: -16px;
            }
          `}</style>

          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900">What Our Clients Say</h3>
            <p className="text-slate-500 text-sm mt-2">Real stories from real families across UP</p>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((item, idx) => (
                <div key={item.name} className="min-w-full px-1">
                  <div className="testi-card-glow rounded-3xl p-8 md:p-10">

                    {/* Top row: big quote + stars */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="big-quote">&ldquo;</div>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                      {item.quote}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-blue-100 pt-6 flex items-center gap-4">
                      {/* Avatar */}
                      <div className="avatar-ring w-12 h-12 flex-shrink-0">
                        <div className="avatar-inner">
                          <span className="text-sm font-bold text-blue-700">
                            {item.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      {/* Name + city */}
                      <div>
                        <p className="font-bold text-slate-900 text-base">{item.name}</p>
                        <p className="text-sm text-slate-400 flex items-center gap-1">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {item.city}
                        </p>
                      </div>
                      {/* Slide number */}
                      <div className="ml-auto text-xs text-slate-400 font-medium">
                        {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              key={current}
              className="progress-animate h-full bg-blue-500 rounded-full"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5">

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-slate-200 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all group shadow-md shadow-blue-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}