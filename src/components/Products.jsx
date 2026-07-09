import { ArrowRight } from 'lucide-react'
import optimaSecure from './optimaSecure.png'
import optimaSecureplus from './optimaSecureplus.png'
import SecurePlus from './SecurePlus.png'
import image1 from './image1.png'
import image from './image.png'

import optimaSecurePdf from './my-optima-secure.pdf'
import optimaSuperSecurePdf from './Optima-Super-Secure.pdf'
import optimaSecurePlusPdf from './OptimaSecure+.pdf'
import energyPlanPdf from './energy-brochure.pdf'
import kotiSurakshaPdf from './Koti-Suraksha.pdf'

const products = [
  {
    id: 1,
    name: 'Optima Secure',
    image: optimaSecure,
    pdf: optimaSecurePdf,
    description:
      'Comprehensive health insurance plan with extensive coverage and benefits.',
  },
  {
    id: 2,
    name: 'Optima Super Secure',
    image: optimaSecureplus,
    pdf: optimaSuperSecurePdf,
    description:
      'Enhanced health insurance plan with higher coverage and additional protection.',
  },
  {
    id: 3,
    name: 'Optima Secure+',
    image: SecurePlus,
    pdf: optimaSecurePlusPdf,
    description:
      'Advanced version of Optima Secure with extra healthcare and wellness benefits.',
  },
  {
    id: 4,
    name: 'Energy Plan',
    image: image1,
    pdf: energyPlanPdf,
    description:
      'A specialized health insurance plan focused on long-term wellness and financial security.',
  },
  {
    id: 5,
    name: 'Koti Suraksha',
    image: image,
    pdf: kotiSurakshaPdf,
    description:
      'High-value protection plan designed to provide extensive financial coverage and peace of mind.',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Insurance Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Protect What Matters Most
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover comprehensive insurance plans tailored to secure your
            health, family, and financial future with confidence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-slate-200
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                flex flex-col
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-60
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white text-blue-700 text-xs font-semibold shadow-md">
                    Health Insurance
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <a
                  href={product.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-gradient-to-r
                    from-slate-950 via-blue-950 to-blue-900
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                    shadow-md
                    hover:shadow-xl
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  View Brochure
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}