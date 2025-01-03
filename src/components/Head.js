import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utlis/appSlice';

const Head = () => {
const dispatch = useDispatch();

const toggleMenuHandler = () => {
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-6 cursor-pointer'
          alt='menu-item'
          src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256'
        />
        <img
          className='h-6 mx-2'
          alt='logo-img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s'
        />
      </div>
      <div className='col-span-10 pl-52'>
        <input type='text' className='w-1/2 border border-gray-400 p-1 rounded-l-full' />
        <button className='border border-gray-400 p-1 rounded-r-full px-5 bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-6'
          alt='user'
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
  )
}

export default Head