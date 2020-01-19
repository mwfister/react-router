import React, { useEffect, useState } from 'react'


export const Loading = ({ text = 'Loading' }) => {
  const [loadingText, setLoadingText] = useState(text)
  const stopper = text + '...'

  useEffect(() => {
    const interval = setInterval(()  => {
      loadingText === stopper
        ? setLoadingText(text)
        : setLoadingText(text => text + '.')
    }, 200)

    return () => { clearInterval(interval) }
  })

  return (
    <div className="container">
      <p className='text-center'>
        {loadingText}
      </p>
    </div>
  )
}
