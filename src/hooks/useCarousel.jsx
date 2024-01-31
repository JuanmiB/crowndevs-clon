// hooks/useCarousel.js
import { useState, useEffect, useRef } from 'react'

const useCarousel = (initialCounter, items, cardWidth) => {
  const [counter, setCounter] = useState(initialCounter)

  const containerElement = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setCounter(0)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const slide = (n) => {
    const containerWidth = containerElement?.current?.offsetWidth / cardWidth
    const canUse = containerWidth < items.length

    if (n === 1) {
      if (canUse && counter > -items.length * cardWidth + containerWidth * cardWidth) {
        setCounter(counter - cardWidth)
      }
    } else {
      if (canUse && counter < 0) {
        if (containerElement?.current?.offsetWidth + counter < items.length * cardWidth) {
          setCounter(counter + cardWidth)
        }
      }
    }
  }

  return { counter, slide, containerElement }
}

export default useCarousel
