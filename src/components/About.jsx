import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Users,
  TrendingUp,
} from 'lucide-react'
import p2 from './p2.jpeg'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Transparent Advice',
    desc: 'Honest recommendations based on your needs, not sales targets.',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Claim Support',
    desc: 'We stand beside you throughout the entire claim settlement process.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    icon: Users,
    title: 'Family First Approach',
    desc: "Solutions designed to secure your family's future at every stage.",
    color: '#0ea5e9',
    bg: '#f0f9ff',
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    desc: 'Insurance and investment solutions aligned with long-term goals.',
    color: '#10b981',
    bg: '#ecfdf5',
  },
]

const journey = [
  { year: '2016', company: 'RenewBuy', desc: 'Started career in digital insurance distribution' },
  { year: '2018', company: 'HDFC Ergo', desc: 'Joined one of India\'s top general insurers' },
  { year: '2026', company: 'Founder', desc: 'Launched independent insurance consultancy' },
]

const stats = [
  { value: '12+', label: 'Years Experience', icon: '🏆' },
  { value: '500+', label: 'Policies Assisted', icon: '📋' },
  { value: '500+', label: 'Happy Families', icon: '❤️' },
  { value: '24/7', label: 'Claim Support', icon: '🛡️' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      <style>{`
        .about-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 10% 20%, rgba(59,130,246,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 80%, rgba(99,102,241,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Founder card */
        .founder-photo-wrap {
          position: relative;
        }
        .founder-img {
          width: 100%;
          border-radius: 28px;
          object-fit: cover;
          display: block;
          box-shadow: 0 24px 64px rgba(59,130,246,0.13), 0 4px 16px rgba(0,0,0,0.08);
        }
        .founder-corner-box {
          position: absolute;
          top: -18px;
          left: -18px;
          width: 120px;
          height: 120px;
          border-radius: 20px;
          border: 2px solid #bfdbfe;
          z-index: 0;
        }
        .founder-corner-box2 {
          position: absolute;
          bottom: -18px;
          right: -18px;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          border: 2px solid #c7d2fe;
          z-index: 0;
        }
        .founder-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: white;
          border-radius: 16px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 2;
        }
        .founder-exp-badge {
          position: absolute;
          top: 24px;
          right: -20px;
          background: #1e40af;
          color: white;
          border-radius: 16px;
          padding: 14px 20px;
          box-shadow: 0 8px 24px rgba(30,64,175,0.35);
          z-index: 2;
          text-align: center;
        }

        /* Trust cards */
        .trust-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .trust-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color);
          border-radius: 20px 20px 0 0;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .trust-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.09);
        }
        .trust-card:hover::before { opacity: 1; }
        .trust-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        /* Timeline */
        .timeline-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #1d4ed8;
          border: 3px solid #bfdbfe;
          margin-bottom: 16px;
          position: relative;
        }
        .timeline-dot.last {
          background: #f59e0b;
          border-color: #fde68a;
          box-shadow: 0 0 0 4px #fef3c7;
        }
        .timeline-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 28px;
          text-align: center;
          min-width: 160px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(59,130,246,0.1);
        }
        .timeline-connector {
          height: 2px;
          width: 60px;
          background: linear-gradient(to right, #bfdbfe, #c7d2fe);
          margin-bottom: 52px;
          flex-shrink: 0;
        }

        /* Claim banner */
        .claim-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          border-radius: 28px;
          padding: 56px 48px;
          position: relative;
          overflow: hidden;
        }
        .claim-banner-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .claim-banner-glow2 {
          position: absolute;
          bottom: -40px; left: 40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .claim-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 18px;
          transition: background 0.2s;
        }
        .claim-check-item:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Stats */
        .stat-card {
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 32px 20px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.1);
        }

        /* Story accent line */
        .story-line {
          width: 48px;
          height: 3px;
          background: linear-gradient(to right, #3b82f6, #6366f1);
          border-radius: 99px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .founder-exp-badge { right: 12px; top: 12px; }
          .timeline-connector { width: 32px; }
          .claim-banner { padding: 36px 24px; }
          .timeline-card { min-width: 120px; padding: 16px 18px; }
        }
      `}</style>

      <div className="about-mesh" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
            Meet Your Insurance Partner
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Experience, Trust &amp; Protection
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Helping families and businesses make informed insurance decisions with
            personalized guidance, trusted support, and long-term protection strategies.
          </p>
        </div>

        {/* ── Founder Section ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

          {/* Photo */}
          <div className="founder-photo-wrap px-6 py-4">
            <div className="founder-corner-box" />
            <div className="founder-corner-box2" />
            <img src={p2} alt="Mohit Mishra" className="founder-img" style={{ position: 'relative', zIndex: 1 }} />
            <div className="founder-badge">
              <p className="font-bold text-slate-900 text-sm">Mohit Mishra</p>
              <p className="text-blue-700 text-xs font-medium mt-0.5">Founder &amp; Insurance Consultant</p>
            </div>
            <div className="founder-exp-badge">
              <p className="text-2xl font-bold leading-none">12+</p>
              <p className="text-xs text-blue-200 mt-1 leading-tight">Years<br/>Experience</p>
            </div>
          </div>

          {/* Story */}
          <div>
            <div className="story-line" />
            <p className="text-blue-700 font-semibold uppercase tracking-widest text-xs mb-3">Founder Story</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">
              Why I Started My Own<br />Insurance Consultancy
            </h3>
            <p className="text-slate-500 leading-relaxed mb-4">
              After spending years working with leading organizations like HDFC Ergo and
              RenewBuy, I realized that clients often need unbiased guidance rather than
              being limited to a single company's products.
            </p>
            <p className="text-slate-500 leading-relaxed mb-4">
              Every family has different financial goals, responsibilities, and protection
              requirements. That's why I decided to build an independent consultancy where
              clients can compare multiple insurance options and choose what truly fits their needs.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              My mission is simple — provide honest advice, dedicated claim support, and
              long-term relationships built on trust.
            </p>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 w-fit">
              <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">MM</div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Mohit Mishra</p>
                <p className="text-slate-500 text-xs">Founder &amp; Insurance Consultant</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trust Cards ── */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Our Values</p>
            <h3 className="text-3xl font-bold text-slate-900">Why Families Trust Us</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="trust-card"
                  style={{ '--card-color': item.color }}
                >
                  <div
                    className="trust-icon-wrap"
                    style={{ background: item.bg }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Journey Timeline ── */}
        <div className="mb-28">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Career Path</p>
            <h3 className="text-3xl font-bold text-slate-900">Professional Journey</h3>
          </div>
          <div className="timeline-wrap">
            {journey.map((item, index) => (
              <div key={item.year} className="flex items-center">
                <div className="timeline-node">
                  <div className={`timeline-dot${index === journey.length - 1 ? ' last' : ''}`} />
                  <div className="timeline-card">
                    <p className="text-blue-700 font-bold text-xl">{item.year}</p>
                    <p className="text-slate-900 font-semibold text-sm mt-1">{item.company}</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-snug max-w-[140px]">{item.desc}</p>
                  </div>
                </div>
                {index !== journey.length - 1 && (
                  <div className="timeline-connector" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Claim Banner ── */}
        <div className="mb-28">
          <div className="claim-banner">
            <div className="claim-banner-glow" />
            <div className="claim-banner-glow2" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-semibold uppercase tracking-widest border border-yellow-400/30 mb-5">
                Claim Assistance
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                We Don't Just Sell Policies.
              </h3>
              <p className="text-slate-300 text-lg mb-8">
                We're with you when it matters most — during claims.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { label: 'Documentation Support', icon: '📄' },
                  { label: 'Claim Process Guidance', icon: '🗺️' },
                  { label: 'Dedicated Assistance', icon: '🤝' },
                  { label: 'Faster Resolution Support', icon: '⚡' },
                ].map((item) => (
                  <div key={item.label} className="claim-check-item">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="stat-card">
              <div className="text-3xl mb-3">{icon}</div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
              <p className="text-slate-500 text-sm">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}