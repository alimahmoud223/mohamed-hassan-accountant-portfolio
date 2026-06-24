import { useRef } from 'react'

export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const card = ref.current
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={handleMove} className={`spotlight ${className}`}>
      {children}
    </div>
  )
}
