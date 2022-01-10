import React from 'react'

const Image = ({ src, alt }) => {
  return <img src={`data:image;base64,${src}`} alt={alt} />
}

export default Image
