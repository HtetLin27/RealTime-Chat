import { useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';

function App() {
 
  const {currentUser,isLoading,fethcUserInfo} = useUserStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fethcUserInfo(user?.uid);
    })

    return () =>{
      unSub();
    }
  },[fethcUserInfo])

  console.log(currentUser)

  if(isLoading) return <div className='loading'>Loading...</div>
     
  return (
    <div className="container">
      {
        currentUser ? (
        <>
         <List/>
        <Chat/>
        <Detail/>
        </>
        ) : (<Login/>)
      }
      <Notification/>
     
    </div>
  );
}

export default App;
