import {
  ShieldCheck,
  HeartPulse,
  Car,
  Building2,
  Landmark,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Life Insurance',
    category: 'Family Protection',
    description:
      'Secure your family’s financial future with customized life insurance plans designed to provide long-term protection and peace of mind.',
    highlights: [
      'Financial Security',
      'Tax Benefits',
      'Long-Term Protection',
    ],
    color: 'blue',
  },

  {
    icon: HeartPulse,
    title: 'Health Insurance',
    category: 'Medical Coverage',
    description:
      'Comprehensive health insurance solutions for individuals, families, and senior citizens with cashless hospitalization benefits.',
    highlights: [
      'Cashless Treatment',
      'Critical Illness Cover',
      'Family Floater Plans',
    ],
    color: 'green',
  },

  {
    icon: BadgeCheck,
    title: 'Term Insurance',
    category: 'High Coverage',
    description:
      'Affordable term plans that provide maximum financial protection for your loved ones at competitive premiums.',
    highlights: [
      'High Sum Assured',
      'Affordable Premiums',
      'Family Protection',
    ],
    color: 'indigo',
  },

  {
    icon: Car,
    title: 'Motor Insurance',
    category: 'Vehicle Protection',
    description:
      'Protect your car and bike against accidents, theft, and unexpected damages with comprehensive motor insurance.',
    highlights: [
      'Car Insurance',
      'Bike Insurance',
      'Quick Renewal',
    ],
    color: 'orange',
  },

  {
    icon: Building2,
    title: 'Business Insurance',
    category: 'Business Security',
    description:
      'Safeguard your business assets, operations, employees, and liabilities with tailored insurance solutions.',
    highlights: [
      'Property Coverage',
      'Employee Protection',
      'Risk Management',
    ],
    color: 'purple',
  },

  {
    icon: Landmark,
    title: 'Retirement & Investment Planning',
    category: 'Future Planning',
    description:
      'Build wealth and secure your retirement goals with insurance-backed investment and savings solutions.',
    highlights: [
      'Retirement Planning',
      'Wealth Creation',
      'Goal-Based Investing',
    ],
    color: 'teal',
  },
]

const colorMap = {
  blue: {
    gradient: 'from-blue-600 to-blue-800',
  },

  green: {
    gradient: 'from-green-600 to-green-800',
  },

  indigo: {
    gradient: 'from-indigo-600 to-indigo-800',
  },

  orange: {
    gradient: 'from-orange-500 to-orange-700',
  },

  purple: {
    gradient: 'from-purple-600 to-purple-800',
  },

  teal: {
    gradient: 'from-teal-600 to-teal-800',
  },
}

function ServiceCard({ service }) {
  const Icon = service.icon
  const c = colorMap[service.color]

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      bg-white
      border
      border-slate-200
      p-7
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-500
      "
    >
      {/* Top Accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient}`}
      />

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${c.gradient} flex items-center justify-center shadow-lg`}
      >
        <Icon size={28} className="text-white" />
      </div>

      {/* Category */}
      <span className="inline-block mt-5 text-xs font-semibold uppercase tracking-wider text-blue-700">
        {service.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mt-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 mt-4 leading-relaxed">
        {service.description}
      </p>

      {/* Highlights */}
      <div className="mt-6 flex flex-wrap gap-2">
        {service.highlights.map((item) => (
          <span
            key={item}
            className="
            px-3
            py-1.5
            rounded-full
            bg-slate-100
            text-slate-600
            text-xs
            font-medium
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        className="
        mt-8
        flex
        items-center
        gap-2
        text-blue-700
        font-semibold
        group-hover:gap-3
        transition-all
        "
      >
        Get Consultation
        <ArrowRight size={16} />
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Insurance Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Protect What Matters Most
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            From life and health insurance to retirement planning and business
            protection, we help you choose the right insurance solution with
            complete transparency and expert guidance.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}

        </div>

        {/* CTA Banner */}
        <div className="mt-24">

          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 rounded-[32px] p-10 md:p-14 text-center text-white shadow-2xl">

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Insurance Plan Is Right For You?
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Get personalized guidance from Mohit Mishra and compare multiple
              insurance options before making a decision.
            </p>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-2xl
              bg-white
              text-blue-900
              font-bold
              hover:scale-105
              transition
              "
            >
              Book Free Consultation
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}