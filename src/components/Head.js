import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utlis/appSlice';
import { YOUTUBE_SEARCH_API } from '../utlis/constants';
import { cachecacheResults } from '../utlis/searchSlice';

const Head = () => {

const dispatch = useDispatch();

const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

const searchCache = useSelector((store)=> store.search);

useEffect(() => {

  // Make an API call after every key press
  // but if the difference between 2 API calls is <200 ms
  // decline the API call

  const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      getSearchSuggestions();
    }  
  },200);

  return () => {
    clearTimeout(timer);
  };

}, [searchQuery]);

const getSearchSuggestions = async () =>{
  //console.log("API Call - "+searchQuery);
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  //console.log(json[1]);
  setSuggestions(json[1]);
  dispatch(cachecacheResults({
    [searchQuery]:json[1],
  }));
}

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
        <div>
          <input 
            type='text' 
            className='w-1/2 border border-gray-400 p-1 rounded-l-full' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 p-1 rounded-r-full px-5 bg-gray-100'>🔍</button>
        </div>
        {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[30%] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((search) => (
              <li key={search} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{search}</li>
          ))}
            
          </ul>
        </div>)}
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