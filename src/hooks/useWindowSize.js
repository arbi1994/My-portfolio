import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    function handleResize () {
      setWindowWidth({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth.width
}

export default useWindowSize