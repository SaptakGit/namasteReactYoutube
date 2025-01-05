import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlis/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsCointainer from './CommentsCointainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    //console.log(searchParams.get("v"));

    const disPatch = useDispatch();

    useEffect(() => {
        disPatch(closeMenu())
    },[])

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 ml-10 rounded-lg flex'>
        <div className=''>
          <iframe 
              width="800" 
              height="460" 
              src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=iMk5ca2FFv-jAylx"} title="YouTube video player" 
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
          </iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <div className='px-5'>
        <CommentsCointainer />
      </div>
      
    </div>
  );
};

export default WatchPage;