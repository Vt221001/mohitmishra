import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const goToSection = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
    { label: 'Products', to: '/products' },
    { label: 'About Us', section: 'about' },
    { label: 'Our Clients', section: 'clients' },
    { label: 'Contact Us', section: 'contact' },
  ]

  return (
    <>
      <style>{`
        /* ── Mobile drawer only ── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,0.45);
          backdrop-filter: blur(2px);
          z-index: 9998;
          animation: drawerFadeIn 0.22s ease;
        }
        @keyframes drawerFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .drawer-panel {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(80vw, 300px);
          background: white;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 48px rgba(0,0,0,0.15);
          animation: drawerSlideIn 0.28s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        @keyframes drawerSlideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        .drawer-close-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: background 0.15s;
        }
        .drawer-close-btn:hover { background: #f8fafc; }
        .drawer-nav { flex: 1; padding: 8px 24px; }
        .drawer-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 0;
          font-size: 15px;
          font-weight: 500;
          color: #1e293b;
          background: none;
          border: none;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
          text-decoration: none;
          text-align: left;
          transition: color 0.15s;
        }
        .drawer-nav-link:hover { color: #1d4ed8; }
        .drawer-submenu { padding: 6px 0 4px 14px; border-bottom: 1px solid #f1f5f9; }
        .drawer-sub-btn {
          display: block;
          width: 100%;
          padding: 9px 0;
          font-size: 13.5px;
          color: #64748b;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: color 0.15s;
        }
        .drawer-sub-btn:hover { color: #1d4ed8; }
        .drawer-footer {
          padding: 20px 24px;
          border-top: 1px solid #f1f5f9;
        }
        .drawer-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: #1d4ed8;
          color: white;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(29,78,216,0.3);
          transition: background 0.18s;
        }
        .drawer-cta-btn:hover { background: #1e40af; }
        .drawer-chevron { transition: transform 0.2s; flex-shrink: 0; }
        .drawer-chevron.open { transform: rotate(180deg); }
      `}</style>

      {/* ── Original Desktop Navbar — untouched ── */}
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg py-3">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h2 className="font-bold text-xl text-blue-900">Mohit Mishra</h2>
              <p className="text-xs text-gray-500">Trusted Insurance Advisor</p>
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
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                    {link.label}
                    <ChevronDown size={15} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => goToSection(child.section)}
                          className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
                    <Link to={link.to} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <button onClick={() => goToSection(link.section)} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                      {link.label}
                    </button>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => goToSection('contact')}
            className="hidden md:inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r
                    from-slate-900 via-blue-950 to-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition shadow-lg"
          >
            Free Consultation
          </button>

          {/* Mobile hamburger — opens drawer */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>

        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
          <div className="drawer-panel">

            {/* Header */}
            <div className="drawer-header">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-base">M</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">Mohit Mishra</p>
                  <p className="text-xs text-gray-400">Insurance Advisor</p>
                </div>
              </div>
              <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <div className="drawer-nav">
              {navLinks.map((link) =>
                link.children
                  ? <MobileAccordion key={link.label} link={link} goToSection={goToSection} />
                  : (
                    <div key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="drawer-nav-link" onClick={() => setMenuOpen(false)}>
                          {link.label}
                        </Link>
                      ) : (
                        <button className="drawer-nav-link" onClick={() => goToSection(link.section)}>
                          {link.label}
                        </button>
                      )}
                    </div>
                  )
              )}
            </div>

            {/* Footer CTA */}
            <div className="drawer-footer">
              <button className="drawer-cta-btn " onClick={() => goToSection('contact')}>
                <Phone size={16} />
                Free Consultation
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">No commitment · 100% free advice</p>
            </div>

          </div>
        </>
      )}
    </>
  )
}

function MobileAccordion({ link, goToSection }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button className="drawer-nav-link" onClick={() => setOpen((o) => !o)}>
        {link.label}
        <ChevronDown size={16} className={`drawer-chevron${open ? ' open' : ''}`} />
      </button>
      {open && (
        <div className="drawer-submenu">
          {link.children.map((child) => (
            <button key={child.label} className="drawer-sub-btn" onClick={() => goToSection(child.section)}>
              → {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}