import React from 'react'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
    <main />
    <Outlet /> 
    <main />    
    </>
)
}

export default ClientLayout