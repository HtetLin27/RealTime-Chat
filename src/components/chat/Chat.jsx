import React, { useState } from 'react'

import './chat.css'

import EmojiPicker from 'emoji-picker-react';


const Chat = () => {
  const [open,setOpen] = useState(false)
  const [text,setText] = useState('')

  const handleEmoji = e =>{
    console.log(e.emoji)
    setText((prev) => prev+e.emoji)
    setOpen(false)
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/5706025/pexels-photo-5706025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Nemo, sunt! Quas fuga autem libero provident 
              unde quos vitae maxime perferendis illo, ad amet 
              adipisci error repellat modi. Eius, ipsa in?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Type a message...' />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(prev => !prev)} />      
          <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} /> 
          </div>    
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat