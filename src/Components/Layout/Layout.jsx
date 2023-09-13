import React from 'react'
import Navpar from '../Navpar/Navpar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>

  <Navpar/>
  <Outlet></Outlet>
  
  <Footer/>
  
  </>
}
