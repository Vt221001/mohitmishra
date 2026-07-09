import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 7800132290',
    href: 'tel:+917800132290',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mohitm746@gmail.com',
    href: 'mailto:mohitm746@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Varanasi, Uttar Pradesh',
    href: '#',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Free Consultation
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Let's Secure Your Future
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Speak directly with Mohit Mishra and get expert guidance on
            Life Insurance, Health Insurance, Term Plans, Retirement
            Planning, and Claim Assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="flex flex-col gap-6">

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="
                bg-white
                rounded-3xl
                p-6
                border
                border-slate-100
                shadow-lg
                hover:shadow-xl
                transition-all
                flex
                items-center
                gap-4
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                    {label}
                  </p>

                  <p className="font-semibold text-slate-900">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Trust Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl">

              <h3 className="text-2xl font-bold mb-6">
                Why Choose Mohit Mishra?
              </h3>

              <div className="space-y-4 text-blue-100">

                <p>✓ 12+ Years Insurance Experience</p>

                <p>✓ Multiple Insurance Partners</p>

                <p>✓ Dedicated Claim Assistance</p>

                <p>✓ Personalized Insurance Solutions</p>

                <p>✓ Transparent & Honest Advice</p>

                <p>✓ Family & Business Protection Plans</p>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-10">

            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center">

                <CheckCircle2
                  size={70}
                  className="text-green-500 mb-5"
                />

                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Request Submitted!
                </h3>

                <p className="text-slate-600 max-w-md">
                  Thank you for contacting us. We will get back to
                  you shortly and help you find the right insurance solution.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: '',
                    })
                  }}
                  className="
                  mt-6
                  px-6
                  py-3
                  rounded-xl
                  bg-blue-700
                  text-white
                  font-semibold
                  "
                >
                  Submit Another Request
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <h3 className="text-2xl font-bold text-slate-900">
                  Request a Free Consultation
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Insurance Type
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Insurance Type</option>
                      <option>Life Insurance</option>
                      <option>Health Insurance</option>
                      <option>Term Insurance</option>
                      <option>Motor Insurance</option>
                      <option>Business Insurance</option>
                      <option>Retirement Planning</option>
                      <option>Investment Planning</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your insurance requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                    from-slate-950 via-blue-950 to-blue-900
                  text-white
                  font-semibold
                  hover:bg-blue-800
                  transition
                  "
                >
                  <Send size={18} />
                  Request Free Consultation
                </button>

              </form>
            )}

            {/* Quick Contact */}
            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-3xl p-6">

              <h4 className="font-bold text-slate-900 mb-2">
                Need Immediate Assistance?
              </h4>

              <p className="text-slate-600 mb-5">
                Call or WhatsApp directly for quick guidance.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="tel:+917800132290"
                  className="
                  px-5
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                    from-slate-950 via-blue-950 to-blue-900
                  text-white
                  font-semibold
                  "
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/917800132290"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-green-600
                  text-white
                  font-semibold
                  "
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}