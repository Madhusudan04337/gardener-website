"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "./use-in-view"

export function useCountingAnimation(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const animationFrameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (inView) {
      startTimeRef.current = performance.now()
      const animate = (currentTime) => {
        if (!startTimeRef.current) return

        const elapsed = currentTime - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)
        const currentCount = Math.floor(progress * target)

        setCount(currentCount)

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    } else {
      setCount(0)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [inView, target, duration])

  return [ref, count]
}
