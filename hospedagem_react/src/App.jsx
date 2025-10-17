import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  Sparkle,
} from 'lucide-react'

const navLinks = [
  { href: '#features', label: 'Recursos' },
  { href: '#testmonials', label: 'Depoimentos' },
  { href: '#pricing', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
]

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-slate-950 text-slate-100 selection:bg-fuschia-500/30'>
      {/* NavBar */}
      <header className='sticky top-0 z-40 border-b border-white/5'>
        <div>
          <a href='#' className='flex items-center gap-2'>
            <Sparkles className='size-5 text-fuchsia-400' />
            <span className='font-bold tracking-tight'>Minha Marca</span>
          </a>

          <nav>
            {navLinks.map(l => (
              <a>{l.label}</a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default App
