import styled from "styled-components";
import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import {userInfoSlice} from './../Redux/UserReducer';
import {useNavigate} from 'react-router-dom';
const Sector = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-around;
`;
const Subject = styled.p`
    font-family: 'Source Sans Pro';
    font-size: 25px;
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
            navigate("/webBoard/");
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
    <h1>Join</h1>
    <form onSubmit={Submit}>
    <Sector>
        <Subject>ID </Subject>
        <input onChange={handleOnChange} name="id" value={user.id}/>
        <button type="idCheck" onClick={CheckId}>check</button>
    </Sector>
    <Sector>
        <Subject>PW </Subject>
        <input onChange={handleOnChange} name="password"value={user.password}/>
    </Sector>
    <Sector>
        <Subject>Pw Repeat </Subject>
        <input onChange={checkRePw} name="rePassword" value={rePassword}/>
    </Sector>
    <Sector>
        <Subject>NAME </Subject>
        <input onChange={handleOnChange} name="name" value={user.name}/>
        <button onClick={CheckName}>check</button>
    </Sector>
    <button type="submit">Join</button>
    </form>
    </>
}
export default Join;