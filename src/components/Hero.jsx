import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, ShieldCheck, HeartPulse, Briefcase } from 'lucide-react'
import p1 from "./p1.png";

const slides = [
  {
    tag: '12+ Years Insurance Expertise',
    heading: 'Protecting Families & Businesses with Trusted Insurance Solutions',
    subtext:
      'Led by Mohit Mishra, an experienced insurance professional with a successful track record across HDFC Ergo, RenewBuy, and AU Bank. We help individuals, families, and businesses choose the right insurance plans while providing dedicated claim assistance when it matters most.',
    cta: 'Explore Plans',
    bg: 'from-slate-950 via-blue-950 to-blue-900',
  },
  {
    tag: 'Health & Life Protection',
    heading: 'Secure Your Future with Expert Insurance Guidance',
    subtext:
      'From health insurance and life insurance to retirement and investment planning, we provide personalized solutions tailored to your needs and budget.',
    cta: 'Get Consultation',
    bg: 'from-blue-950 via-indigo-900 to-slate-900',
  },
  {
    tag: 'Claim Assistance Support',
    heading: 'More Than Policies — We Stand By You During Claims',
    subtext:
      'Insurance is valuable only when claims are settled smoothly. We provide end-to-end support throughout the claim process to help clients receive the benefits they deserve.',
    cta: 'Talk to Expert',
    bg: 'from-slate-950 via-slate-900 to-blue-950',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-700`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 text-sm font-semibold border border-blue-400/20 mb-6">
              {slide.tag}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {slide.heading}
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
              {slide.subtext}
            </p>

            {/* Trust Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'Life Insurance',
                'Health Insurance',
                'Term Insurance',
                'Motor Insurance',
                'Retirement Planning',
                'Claim Assistance',
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-blue-100 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"
              >
                {slide.cta}
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Request Callback
              </a>
            </div>
          </div>

          {/* Right Side Profile */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">

              {/* Replace image with Mohit Mishra photo */}
              <img
                src={p1}
                alt="Mohit Mishra"
                className="w-[420px] h-[540px] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-20 left-5 right-5 bg-white rounded-3xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  Mohit Mishra
                </h3>

                <p className="text-blue-700 font-semibold">
                  Founder & Insurance Consultant
                </p>

                <div className="grid grid-cols-2 gap-4 mt-5">

                  <div>
                    <p className="text-xl font-bold text-slate-900">6 Years</p>
                    <p className="text-sm text-slate-500">HDFC Ergo</p>
                  </div>

                  <div>
                    <p className="text-xl font-bold text-slate-900">2 Years</p>
                    <p className="text-sm text-slate-500">RenewBuy</p>
                  </div>

                  {/* <div>
                    <p className="text-xl font-bold text-slate-900">2 Years</p>
                    <p className="text-sm text-slate-500">AU Bank</p>
                  </div> */}

                  <div>
                    <p className="text-xl font-bold text-slate-900">1000+</p>
                    <p className="text-sm text-slate-500">Policies Assisted</p>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="hidden lg:flex absolute -left-24 top-16 bg-white rounded-2xl px-4 py-3 shadow-xl items-center gap-3">
                <ShieldCheck className="text-blue-700" size={24} />
                <div>
                  <p className="font-bold text-slate-900">Trusted Advisor</p>
                  <p className="text-xs text-slate-500">
                    Insurance Expertise
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="hidden lg:flex absolute -right-12 bottom-28 bg-white rounded-2xl px-4 py-3 shadow-xl items-center gap-3">
                <HeartPulse className="text-green-600" size={24} />
                <div>
                  <p className="font-bold text-slate-900">Claim Support</p>
                  <p className="text-xs text-slate-500">
                    Dedicated Assistance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${current === i
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '1000+', label: 'Policies Assisted' },
            { value: '500+', label: 'Happy Families' },
            { value: '24/7', label: 'Claim Support' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-white">
                {value}
              </p>
              <p className="text-blue-200 text-sm mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}