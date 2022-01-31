import React from 'react'

import Skeleton from '@mui/material/Skeleton'

const Loading = ({ number, ...props }) => {
  return (
    <>
      {Array(number || 1)
        .fill()
        .map(n => (
          <Skeleton {...props} animation='wave' />
        ))}
    </>
  )
}

export default Loading
