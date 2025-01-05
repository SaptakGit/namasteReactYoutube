import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utlis/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utlis/helper";



const LiveChat = () => {
  
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(()=>{
    const i = setInterval(() => {
        //API Poling
        // Fetch An API, convert it to jason and add to dispatch:addMessage
        //console.log('API Poling');
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20)+' 🚀',
        }));
    },1500);
    return () => clearInterval(i);
  },[])

  return (
    <>
        <div className='ml-8 p-2 border border-black w-[400px] h-[450px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            <div>
                {chatMessages.map((chat,index)=>
                    (<ChatMessage 
                        // Dont USE Index as Keys
                        key={index}
                        name={chat.name} 
                        message={chat.message}
                    />)
                )}
            </div>
        </div>
        <form className="w-[400px] p-2 ml-8 border border-black rounded-lg" onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name: "Saptak",
                    message: liveMessage,
                })
            );
            setLiveMessage("");
        }}>
            <input 
                className="px-2 w-72" 
                type="text" 
                value={liveMessage} 
                onChange={(e) => {
                    setLiveMessage(e.target.value);
                }}
            />
            <button className="px-2 mx-2 bg-green-400 rounded-sm">Send</button>
        </form>
    </>
  );
};

export default LiveChat;