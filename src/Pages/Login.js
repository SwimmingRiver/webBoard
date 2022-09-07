
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {userInfoSlice} from './../Redux/UserReducer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginTitle = styled.h1`
    font-size: 60px;
    font-family: 'Kanit';
  `;
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 15vh;
`;
const LoginButton = styled.button`
    font-family: 'Raleway';
    font-size: 12px;
    width: 60px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
`;

function Login(){
    const [userLog,setUserLog]=useState({id:"",pw:"",on:false})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setUserLog((prev)=>({
            ...prev,
            [name]:value,
            on:false,
        }))
    }
    const showLogin = useSelector((state)=>(state[0].map((i,index)=>i.on?<h2 key={index}>{i.name} is login</h2>:null)));
    const List = useSelector((state)=>state[0]);
    



    const login = ()=>{
        if(List.map(i=>i.id).includes(userLog.id)){
            if(List.map(i=>i.pw).includes(userLog.pw)){
                let lList= {
                    id:userLog.id,
                    pw:userLog.pw,
                    name:List[List.map(i=>i.id).indexOf(userLog.id)].name,
                    on:List[List.map(i=>i.id).indexOf(userLog.id)].on,
                }
                dispatch(userInfoSlice.actions.userLogin(lList))
                alert("login")
                console.log(lList);
                navigate("/webBoard");
            }else{alert("잘못된 비밀번호입니다.")}
        }else{alert("가입되지않은 아이디입니다.")}
        
        
       
    }
    
    return(<>
        <LoginTitle>Login</LoginTitle>
        <LoginWrapper>
        <input placeholder="id" name="id" value={userLog.id} onChange={handleOnChange}/>
        <input placeholder="pw" name='pw' value={userLog.pw} onChange={handleOnChange}/>
        <LoginButton onClick={login}>login</LoginButton>
        {showLogin}
        </LoginWrapper>
    </>)
}

export default Login;