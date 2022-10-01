import styled from "styled-components";
import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import {userInfoSlice} from './../Redux/UserReducer';
import {useNavigate} from 'react-router-dom';
const Sector = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-around;
    width: 300px;
    
`;
const JoinSubject = styled.p`
    font-family: 'Source Sans Pro';
    font-size: 25px;
`;
const JoinWrapper = styled.div`
    border:solid 0.5px black;
    margin: 15px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40vw;
    height: 30vh;
`;
const Title = styled.h1`
    font-size: 60px;
    font-family: 'Kanit';
  `;
const CheckButton = styled.button`
    font-family: 'Raleway';
    font-size: 12px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    
`;
const JoinButton = styled.button`
    font-family: 'Raleway';
    font-size: 12px;
    width: 60px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
`;
function Join(){
    const [user,setUser]=useState({id:"",password:"",name:"",on:false})
    const [rePassword,setRePassword]=useState("");
    const [idCheck,setIdCheck]=useState(false);
    const [nameCheck,setNameCheck]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const List = useSelector((state)=>state[0]);
    const CheckId=(e)=>{
        e.preventDefault();
        let findId = List.map((i)=>i.id)
        if(findId.includes(user.id)){
            alert("사용중인 아이디입니다.")
        }else{
            alert("사용가능한 아이디입니다.")
            setIdCheck(true)
        }
    }
    const CheckName=(e)=>{
        e.preventDefault();
        let findName = List.map((i)=>i.name)
        if(findName.includes(user.name)){
            alert("사용중인 이름입니다.")
        }else{
            alert("사용가능한 이름입니다.")
            setNameCheck(true)
        }
    }
    const addUser=(aId,aPw,aName)=>{
        let _user={
            id:aId,
            pw:aPw,
            name:aName,
            on:false
        }
        return _user;
    }
    const Submit=(e)=>{
        e.preventDefault();
        if(idCheck===false){
            alert("id 중복확인을 해주세요");
        }else if(user.password!==rePassword){
            alert("같은 암호를 입력해주세요");
        }else if(nameCheck===false){
            alert("이름 중복확인을 해주세요");
        }else{
            dispatch(userInfoSlice.actions.userJoin(addUser(user.id,user.password,user.name)));
            alert("Join!");
            navigate("/");
        }
    }

    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value,
            on:false,
        }))
    }
    const checkRePw=(e)=>{ setRePassword(e.target.value)}
    return<>
    <Title>Join</Title>
    <form onSubmit={Submit}>
        <JoinWrapper>
    <Sector>
        <JoinSubject>ID </JoinSubject>
        <input onChange={handleOnChange} name="id" value={user.id}/>
        <CheckButton type="idCheck" onClick={CheckId}>CHECK</CheckButton>
    </Sector>
    <Sector>
        <JoinSubject>PW </JoinSubject>
        <input onChange={handleOnChange} name="password"value={user.password} type='password'/>
    </Sector>
    <Sector>
        <JoinSubject>Pw Repeat </JoinSubject>
        <input onChange={checkRePw} name="rePassword" value={rePassword} type='password'/>
    </Sector>
    <Sector>
        <JoinSubject>NAME </JoinSubject>
        <input onChange={handleOnChange} name="name" value={user.name}/>
        <CheckButton onClick={CheckName}>CHECK</CheckButton>
    </Sector>
    <JoinButton type="submit">JOIN</JoinButton>
    </JoinWrapper>
    </form>
    </>
}
export default Join;