import React from 'react'
import { useSelector } from 'react-redux'

const UserReportsPage = () => {
  const user = useSelector(state => state.user)

  return <div>Hello {user?.name}</div>
}

export default UserReportsPage
