import { useEffect, useState } from 'react'

export const useProgressPercent = (progress: number) => {
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercent(prev => {
        prev += 10

        if (prev > progress - 1) {
          clearInterval(interval)
          return progress
        }

        return prev
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return { progressPercent }
}
