import React, { useState, useEffect } from 'react';


export default function useOnScreen(ref, msTimeOut = 0) {

  const [isIntersecting, setIntersecting] = useState(false)

  const [ wasIntersecting, setWasIntersecting ] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      // observe only "one time" when firstly visible
      if((!wasIntersecting && !isIntersecting) && entry.isIntersecting ) {
        setTimeout(() => {
          setIntersecting(true);
          setWasIntersecting(true)
        }, msTimeOut)
      }
    }
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}