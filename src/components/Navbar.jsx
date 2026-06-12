import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Insurance Services',
    children: [
      { label: 'Life Insurance', href: '#services' },
      { label: 'Health Insurance', href: '#services' },
      { label: 'Motor Insurance', href: '#services' },
      { label: 'Term Insurance', href: '#services' },
      { label: 'Investment Plans', href: '#services' },
    ],
  },
  { label: 'Our Clients', href: '#clients' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div className="leading-tight">
            <span className={`font-bold text-xl ${scrolled ? 'text-blue-800' : 'text-white'}`}>
              Mohit Mishra
            </span>
            <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
              Trusted Insurance Advisor
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-medium text-sm transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
                    }`}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-medium text-sm transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md"
        >
          Get a Quote
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <p className="font-semibold text-gray-800 mb-1">{link.label}</p>
                  <ul className="pl-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="text-sm text-gray-600 hover:text-blue-700"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-medium text-gray-700 hover:text-blue-700 text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="#contact"
                className="block text-center mt-2 px-5 py-2.5 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
