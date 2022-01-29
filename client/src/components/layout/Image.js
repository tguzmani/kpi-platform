import React from 'react'

const Image = ({ src, alt, ...props }) => {
  return <img src={`data:image;base64,${src}`} alt={alt} {...props} />
}

export default Image
