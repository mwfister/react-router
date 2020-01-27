import React, { useState } from 'react'
import cx from 'classnames'

export const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)
  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div className="picture-container avatar">
      <img src={`${src}?size=20`} alt={alt} className="placeholder-image" />
      <img src={`${src}?size=200`} alt={alt} className={cx(className, "picture", { loaded })} onLoad={handleLoad} />
    </div>
  )
}
