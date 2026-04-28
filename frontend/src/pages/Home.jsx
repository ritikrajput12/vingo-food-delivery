import React from 'react'
import { useSelector } from 'react-redux'
import UserDashboard from '../components/UserDashboard'
import OwnerDashboard from '../components/OwnerDashboard'
import Nav from '../components/Nav'

function Home() {
  const { userData } = useSelector(state => state.user)

  return (
    <div className='w-[100vw] min-h-[100vh] pt-[100px] flex flex-col items-center bg-[#fff9f6]'>

      <Nav />

      {userData && userData.role === "user" && <UserDashboard />}
      {userData && userData.role === "owner" && <OwnerDashboard />}
      {userData && userData.role === "deliveryBoy" && <UserDashboard />}

    </div>
  )
}

export default Home