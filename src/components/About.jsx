import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  FileCheck,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import p2 from "./p2.png";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Transparent Advice',
    desc: 'Honest recommendations based on your needs, not sales targets.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Claim Support',
    desc: 'We stand beside you throughout the claim settlement process.',
  },
  {
    icon: Users,
    title: 'Family First Approach',
    desc: 'Solutions designed to secure your family’s future.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    desc: 'Insurance and investment solutions aligned with long-term goals.',
  },
]

const journey = [
  // {
  //   year: '2014',
  //   company: 'AU Bank',
  // },
  {
    year: '2016',
    company: 'RenewBuy',
  },
  {
    year: '2018',
    company: 'HDFC Ergo',
  },
  {
    year: '2026',
    company: 'Founder',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Meet Your Insurance Partner
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Experience, Trust & Protection
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Helping families and businesses make informed insurance decisions
            with personalized guidance, trusted support, and long-term
            protection strategies.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Photo */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-blue-200" />

            <img
              src={p2}
              alt="Mohit Mishra"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl">
              <h3 className="font-bold text-slate-900">
                Mohit Mishra
              </h3>

              <p className="text-blue-700 text-sm font-medium">
                Founder & Insurance Consultant
              </p>
            </div>
          </div>

          {/* Story */}
          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Founder Story
            </span>

            <h3 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              Why I Started My Own Insurance Consultancy
            </h3>

            <p className="text-slate-600 leading-relaxed mb-5">
              After spending years working with leading organizations such as
              HDFC Ergo, RenewBuy, I realized that clients often
              need unbiased guidance rather than being limited to a single
              company's products.
            </p>

            <p className="text-slate-600 leading-relaxed mb-5">
              Every family has different financial goals, responsibilities, and
              protection requirements. That's why I decided to build an
              independent consultancy where clients can compare multiple
              insurance options and choose what truly fits their needs.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              My mission is simple — provide honest advice, dedicated claim
              support, and long-term relationships built on trust.
            </p>

            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold text-slate-900 text-lg">
                  Mohit Mishra
                </p>

                <p className="text-slate-500">
                  Founder & Insurance Consultant
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Cards */}
        <div className="mb-24">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">
              Why Families Trust Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {trustPoints.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>

                  <h4 className="font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              )
            })}

          </div>
        </div>

        {/* Career Journey */}
        <div className="mb-24">

          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-slate-900">
              Professional Journey
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8">

            {journey.map((item, index) => (
              <div
                key={item.year}
                className="flex items-center"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 px-8 py-6 text-center">
                  <p className="text-blue-700 font-bold text-2xl">
                    {item.year}
                  </p>

                  <p className="mt-2 text-slate-700 font-medium">
                    {item.company}
                  </p>
                </div>

                {index !== journey.length - 1 && (
                  <ArrowRight
                    className="mx-4 text-blue-400 hidden md:block"
                    size={28}
                  />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Claim Banner */}
        <div className="mb-24">

          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[32px] p-10 text-white shadow-2xl">

            <div className="max-w-4xl">

              <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">
                Claim Assistance
              </span>

              <h3 className="text-4xl font-bold mt-4 mb-5">
                We Don't Just Sell Policies.
                <br />
                We Help During Claims Too.
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mt-8">

                {[
                  'Documentation Support',
                  'Claim Process Guidance',
                  'Dedicated Assistance',
                  'Faster Resolution Support',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <BadgeCheck
                      className="text-yellow-400"
                      size={20}
                    />

                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            ['12+', 'Years Experience'],
            ['500+', 'Policies Assisted'],
            ['500+', 'Happy Families'],
            ['24/7', 'Claim Support'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-100 flex items-center justify-center mb-5">
                <span className="text-3xl font-extrabold text-blue-700">
                  {value}
                </span>
              </div>

              <p className="text-slate-700 font-medium">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}