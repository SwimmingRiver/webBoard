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
import styled from 'styled-components';

//styled
const Wrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`;
const Title = styled.h1`
font-size: 60px;
font-family: 'Kanit';
`;
const LinkList = styled.ul`
display: flex;
justify-content: space-around;
border:solid 2px black;
border-radius: 10px;
width: 70vw;
margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
text-decoration: none;
font-size: 50px;
color: black;
font-family: 'raleway';
`;
const LogoutButton = styled.button`
font-family: 'Raleway';
font-size: 12px;
width: 75px;
background-color: white;
border-radius: 5px;
border: 1px solid black;
`;




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
    <Wrapper>
    <Title>Web Board</Title>
    <h1 style={{fontFamily:'Roboto',fontSize:"30px"}}>welcome {showUser}</h1>
    {loginToggle?<LogoutButton onClick={logOut}>LOG OUT</LogoutButton>:null}
    <BrowserRouter>
    <LinkList>
    <li><StyledLink to="/webBoard/">Home</StyledLink></li>
    <li>{loginToggle?null:<StyledLink to="/webBoard/join">Join</StyledLink>}</li>
    {loginToggle?null:<StyledLink to="/webBoard/login">Login</StyledLink>}
    {loginToggle?<StyledLink to="/webBoard/write">Write</StyledLink>:null}
    <StyledLink to="/webBoard/board">Board</StyledLink>
    </LinkList>
        <Routes>
            <Route path="/webBoard/" element={<Main/>}/>
            <Route path="/webBoard/login" element={<Login/>}/>
            <Route path="/webBoard/join" element={<Join/>}/>
            <Route path='/webBoard/write' element={<Write/>}/>
            <Route path='/webBoard/board' element={<Board/>}/>
            <Route path='/webBoard/Post/@:index' element={<OPost/>}/>
        </Routes>
       
    </BrowserRouter>
    </Wrapper>
    </>

  );
}

export default App;
