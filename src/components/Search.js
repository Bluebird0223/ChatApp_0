import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
        <div>
          <div className="userChat">
            <img src="https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
            <div className="userChatInfo">
              <span>name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search