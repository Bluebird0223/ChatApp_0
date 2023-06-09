import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chatapp</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="img" />
        <span>Name</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar