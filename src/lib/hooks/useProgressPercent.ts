import { useEffect, useState } from 'react'

export const useProgressPercent = (
  progress: number,
  inc: number = 10,
  timeout: number = 50
) => {
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercent(prev => {
        prev += inc

        if (prev > progress - 1) {
          clearInterval(interval)
          return progress
        }

        return prev
      })
    }, timeout)

    return () => clearInterval(interval)
  }, [])

  return { progressPercent }
}
