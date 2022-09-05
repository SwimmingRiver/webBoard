import Join from './Pages/Join';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Pages/Login';
import Write from './Pages/Wrie';
import Main from './Pages/Main';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Board from './Pages/Board';
import OPost from './Pages/OPost';
import {userInfoSlice} from './Redux/UserReducer';

function App() {
  const [loginToggle,setLoginToggle]=useState(false);
  const loginLoad = useSelector((state)=>state[0].map(i=>i));
  const postLoad = useSelector((state)=>state[1].map(i=>i));
  const dispatch = useDispatch();
  const [showUser,setShowUser]=useState("");
 const aaa=()=>{ 
    for(let i=0;i<loginLoad.length;i++){
    if(loginLoad[i].on){
      setLoginToggle(!loginToggle);
      setShowUser(loginLoad[i].id);
      break;
    }else if(loginToggle){
      break;
    }
  }}
  useEffect(aaa,[loginLoad]);

  let outUser = {
    id:"",
    pw:"",
    name:"",
    on:false,
  }
  const logOut =()=>{
    alert("로그아웃 했습니다!");
    setLoginToggle(!loginToggle);
    setShowUser("");
    for(let i=0;i<loginLoad.length;i++){
     if(loginLoad[i].on){
        outUser = {
          id:loginLoad[i].id,
          pw:loginLoad[i].pw,
          name:loginLoad[i].name,
          on:false,
          } 
          console.log(outUser)
         }; 
      }
      dispatch(userInfoSlice.actions.userLogout(outUser)); 
    }
  
  return (
    <>
    <h1 style={{fontFamily:'Roboto',fontSize:"60px"}}>welcome,{showUser}</h1>
    {loginToggle?<button onClick={logOut}>logout</button>:null}
    <BrowserRouter>
    <Link to="/webBoard/">Home</Link>
    {loginToggle?null:<Link to="/webBoard/join">Join</Link>}
    {loginToggle?null:<Link to="/webBoard/login">Login</Link>}
    {loginToggle?<Link to="/webBoard/write">Write</Link>:null}
    <Link to="/webBoard/board">Board</Link>
        <Routes>
            <Route path="/webBoard/" element={<Main/>}/>
            <Route path="/webBoard/login" element={<Login/>}/>
            <Route path="/webBoard/join" element={<Join/>}/>
            <Route path='/webBoard/write' element={<Write/>}/>
            <Route path='/webBoard/board' element={<Board/>}/>
            <Route path='/webBoard/Post/:index' element={<OPost/>}/>
        </Routes>
       
    </BrowserRouter>
    </>
  );
}

export default App;
