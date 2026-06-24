import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let width = 0
    let height = 0
    let frame

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00065,
      vy: (Math.random() - 0.5) * 0.00065,
      size: Math.random() * 1.8 + 0.6,
    }))

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= 1) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= 1) particle.vy *= -1

        const x = particle.x * width
        const y = particle.y * height

        context.beginPath()
        context.arc(x, y, particle.size, 0, Math.PI * 2)
        context.fillStyle = 'rgba(110, 231, 183, 0.58)'
        context.fill()

        for (let i = index + 1; i < particles.length; i += 1) {
          const other = particles[i]
          const ox = other.x * width
          const oy = other.y * height
          const distance = Math.hypot(x - ox, y - oy)

          if (distance < 150) {
            context.beginPath()
            context.moveTo(x, y)
            context.lineTo(ox, oy)
            context.strokeStyle = `rgba(110, 231, 183, ${0.12 * (1 - distance / 150)})`
            context.lineWidth = 1
            context.stroke()
          }
        }
      })

      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />
}
