import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const footerLinks = {
  Insurance: [
    'Life Insurance',
    'Health Insurance',
    'Motor Insurance',
    'Term Insurance',
    'Retirement Plans',
    'Child Education Plans',
  ],
  Company: [
    'About Us',
    'Why Choose Us',
    'Testimonials',
    'FAQs',
    'Contact Us',
  ],
  Resources: [
    'Insurance Guides',
    'Claim Assistance',
    'Privacy Policy',
    'Terms & Conditions',
    'Support',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-xl text-white">Mohit Mishra</span>
                <p className="text-xs text-gray-500">Trusted Insurance Advisor</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Led by Mohit Mishra, an experienced insurance professional with a successful track record across HDFC Ergo, RenewBuy, and AU Bank. We help individuals, families, and businesses choose the right insurance plans while providing dedicated claim assistance when it matters most.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-blue-500 flex-shrink-0" />
                +91 7800132290
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-blue-500 flex-shrink-0" />
                mohitm746@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                Varanasi Uttar Pradesh, India
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Mohit M. All rights reserved.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-400 transition-colors"
          >
            mohitmishra.com <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </footer>
  )
}
