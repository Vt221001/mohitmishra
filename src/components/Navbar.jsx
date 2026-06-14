import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const location = useLocation()

  const goToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }

    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const navLinks = [
    {
      label: 'Insurance Services',
      children: [
        { label: 'Life Insurance', section: 'services' },
        { label: 'Health Insurance', section: 'services' },
        { label: 'Motor Insurance', section: 'services' },
        { label: 'Term Insurance', section: 'services' },
        { label: 'Investment Plans', section: 'services' },
      ],
    },
    {
      label: 'Products',
      to: '/products',
    },
    {
      label: 'About Us',
      section: 'about',
    },
    {
      label: 'Our Clients',
      section: 'clients',
    },
    {
      label: 'Contact Us',
      section: 'contact',
    },
  ]

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-[9999]
      bg-white
      shadow-lg
      py-3
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              M
            </span>
          </div>

          <div>
            <h2 className="font-bold text-xl text-blue-900">
              Mohit Mishra
            </h2>

            <p className="text-xs text-gray-500">
              Trusted Insurance Advisor
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
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
                  className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  text-gray-700
                  hover:text-blue-700
                  transition-colors
                  "
                >
                  {link.label}
                  <ChevronDown size={15} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => goToSection(child.section)}
                        className="
                        block
                        w-full
                        text-left
                        px-5
                        py-3
                        text-sm
                        text-gray-700
                        hover:bg-blue-50
                        hover:text-blue-700
                        transition-colors
                        "
                      >
                        {child.label}
                      </button>
                    ))}

                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-blue-700
                    transition-colors
                    "
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => goToSection(link.section)}
                    className="
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-blue-700
                    transition-colors
                    "
                  >
                    {link.label}
                  </button>
                )}
              </li>
            )
          )}

        </ul>

        {/* CTA */}
        <button
          onClick={() => goToSection('contact')}
          className="
          hidden
          md:inline-flex
          items-center
          px-5
          py-3
          rounded-xl
          bg-blue-700
          text-white
          text-sm
          font-semibold
          hover:bg-blue-800
          transition
          shadow-lg
          "
        >
          Free Consultation
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">

          <div className="px-6 py-5">

            <ul className="space-y-4">

              {navLinks.map((link) =>
                link.children ? (
                  <li key={link.label}>

                    <p className="font-semibold text-gray-800 mb-2">
                      {link.label}
                    </p>

                    <ul className="pl-4 space-y-2">

                      {link.children.map((child) => (
                        <li key={child.label}>
                          <button
                            onClick={() => {
                              goToSection(child.section)
                              setMenuOpen(false)
                            }}
                            className="text-sm text-gray-600 hover:text-blue-700"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}

                    </ul>

                  </li>
                ) : (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 hover:text-blue-700"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          goToSection(link.section)
                          setMenuOpen(false)
                        }}
                        className="text-sm font-medium text-gray-700 hover:text-blue-700"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                )
              )}

              <li>
                <button
                  onClick={() => {
                    goToSection('contact')
                    setMenuOpen(false)
                  }}
                  className="
                  block
                  w-full
                  text-center
                  bg-blue-700
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  mt-4
                  "
                >
                  Free Consultation
                </button>
              </li>

            </ul>

          </div>

        </div>
      )}
    </header>
  )
}