import { useEffect, useState } from 'react'

export default function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let animation
    let startTime
    const duration = 1400

    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        animation = requestAnimationFrame(animate)
      }
    }

    animation = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animation)
  }, [value])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
