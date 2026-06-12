import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Users,
  Star,
  Quote,
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
      'Guidance and support throughout the entire claim settlement process.',
  },

  {
    icon: BadgeCheck,
    title: 'Multiple Insurance Partners',
    description:
      'Compare plans from leading insurance providers to find the best coverage.',
  },

  {
    icon: Users,
    title: 'Client First Approach',
    description:
      'Every recommendation is tailored according to the client’s needs and goals.',
  },
]

const testimonials = [
  {
    quote:
      'Mohit Ji guided us patiently and helped us choose the right life insurance plan for our family. Highly recommended.',
    name: 'Rajesh Sharma',
    city: 'Varanasi',
  },

  {
    quote:
      'The best part was the claim assistance. We received complete support during the process and everything went smoothly.',
    name: 'Amit Verma',
    city: 'Lucknow',
  },

  {
    quote:
      'Transparent advice, no pressure selling, and excellent service. We trust Mohit Ji for all our insurance needs.',
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
]

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Trust & Credibility
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Why Families Trust Mohit Mishra
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Insurance is built on trust. Our focus is helping clients
            make informed decisions while providing reliable support
            throughout their insurance journey.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

          {trustPoints.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                bg-white
                rounded-3xl
                p-7
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}

        </div>

        {/* Insurance Partners */}
        <div className="mb-24">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">
              Insurance Partners
            </h3>

            <p className="text-slate-600 mt-3">
              Compare plans from leading insurance companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {partners.map((partner) => (
              <div
                key={partner}
                className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-5
                text-center
                font-semibold
                text-slate-700
                hover:shadow-lg
                transition
                "
              >
                {partner}
              </div>
            ))}

          </div>

        </div>

        {/* Testimonials */}
        <div>

          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-slate-900">
              What Our Clients Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item) => (
              <div
                key={item.name}
                className="
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-100
                shadow-lg
                hover:shadow-2xl
                transition-all
                "
              >
                <Quote
                  className="text-blue-200 mb-5"
                  size={40}
                />

                <p className="text-slate-600 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.city}
                    </p>
                  </div>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}