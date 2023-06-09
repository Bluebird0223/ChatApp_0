import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import ChatSide from './ChatSide'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <ChatSide/>
    </div>
  )
}

export default Sidebar