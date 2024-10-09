import React, { useEffect, useState } from 'react'

import './chatList.css'
import AddUser from './addUser/AddUser'
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';


const ChatList = () => {

  const [addMode,setAddMode] = useState(false)
  const [chats,setChats] = useState([])

  const {currentUser} = useUserStore()

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items  = res.data().chats;

      const promises = items.map( async (item)=>{
        const userDocRef = doc(db,"users", item.receiverId);
        const UserDocSnap = await getDoc(userDocRef);

        const user = UserDocSnap.data()

        return {...item,user};
      })

      const chatData = await Promise.all(promises)
      setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));

      console.log(chats)
  });
  
  return () => {
    unSub()
  }

  },[currentUser.id])


  return (
    <div className='chartList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img onClick={()=>setAddMode(prev => !prev)} src={addMode ? './minus.png' : './plus.png'} alt="" className='add' />
      </div>
      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ) )}
      { addMode && <AddUser/>}
    </div>
  )
}

export default ChatList