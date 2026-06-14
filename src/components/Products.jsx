import { ArrowRight } from 'lucide-react'
import optimaSecure from './optimaSecure.png';
import optimaSecureplus from './optimaSecureplus.png';
import SecurePlus from './SecurePlus.png';
import image1 from './image1.png';
import image from './image.png';
import optimaSecurePdf from './my-optima-secure.pdf'
import optimaSuperSecurePdf from './Optima-Super-Secure.pdf'
import optimaSecurePlusPdf from './OptimaSecure+.pdf'
import energyPlanPdf from './energy-brochure.pdf'
import kotiSurakshaPdf from './koti-suraksha.pdf'

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
            className="py-24 bg-gradient-to-b from-white to-slate-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        Insurance Solutions
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
                        Our Insurance Products
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        Explore a range of insurance solutions designed to protect
                        your family, business, health, and future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              border
              border-slate-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                    {product.name}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    {product.description}
                                </p>

                                <a
                                    href={product.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-700 font-semibold"
                                >
                                    Learn More
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