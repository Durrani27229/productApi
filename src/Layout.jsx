import React from 'react'

import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Component/Navbar'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function Layout() {
  return (
      <>
      <Navbar/>
      <Outlet />
      <Footer/>
      </>
  )
}

export default Layout
