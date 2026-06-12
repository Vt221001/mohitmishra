# Dytelworld Clone — React + Tailwind CSS

A professional React clone of [dytelworld.com](https://dytelworld.com) built for learning purposes.

## Tech Stack
- **React 18** — UI library
- **Vite** — lightning-fast dev server & bundler
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon library

## Project Structure

```
dytelworld-clone/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              ← entry point
    ├── App.jsx               ← root component (wires all sections)
    ├── index.css             ← Tailwind directives + global styles
    └── components/
        ├── Navbar.jsx        ← sticky navbar with dropdown + mobile menu
        ├── Hero.jsx          ← auto-sliding hero with stats bar
        ├── Services.jsx      ← 6 service cards with hover effects
        ├── Clients.jsx       ← client groups + testimonials
        ├── About.jsx         ← company info + timeline
        ├── Contact.jsx       ← contact form with validation
        └── Footer.jsx        ← multi-column footer
```

## Key React Concepts Used (great for practice!)

| Concept | Where to find it |
|---|---|
| `useState` | Navbar (menu/dropdown), Hero (slide index), Contact (form state) |
| `useEffect` + cleanup | Navbar (scroll listener), Hero (auto-slide timer) |
| Props & prop drilling | ServiceCard receives `service` prop |
| Conditional rendering | Navbar dropdown, Contact success state |
| Array `.map()` rendering | Services, Clients, Footer links |
| Event handling | Form `onChange`, `onSubmit`, button clicks |
| Tailwind responsive classes | Every component uses `sm:`, `md:`, `lg:` |

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```
