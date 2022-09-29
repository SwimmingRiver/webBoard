
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userInfoSlice} from './../Redux/UserReducer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WriterTitle = styled.h1`
    font-size: 60px;
    font-family: 'Kanit';
  `;
const WriteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 50vh;
    width: 50vw;
`;
const TitleBox = styled.input`
    width: 30vw;
`;
const ContentBox = styled.textarea`
    width: 30vw;
    height: 30vh;
`;
const WriteSubject = styled.h2`
    font-family: 'Raleway';
    font-size: 15px;
`;
const SubmitButton = styled.button`
    font-family: 'Raleway';
    font-size: 12px;
    width: 60px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
`;
function Write(){
    const [post,setPost]=useState({
        title:"",
        content:"",
        writer:"",
    })
    const dispatch = useDispatch();
    const writerData = useSelector((state)=>state[0].map((i)=>i));
    const navigate = useNavigate();
    const clist = useSelector(state=>state);
    const [postNum,setPostNum]=useState(1);
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setPost((prev)=>({
            ...prev,
            [name]:value,
            writer:"",
        }))
    }
    const posting = (title,content)=>{
       let writer = ""

       for(let i = 0;i<writerData.length;i++){
         if(writerData[i].on){
             writer=writerData[i].id
             
         }
        }
         let lList = {
             title:title,
             content:content,
             writer:writer,
             number:clist[1].map(i=>i.number)[clist[1].length-1]+1
         }
         return lList;
    }
    const submit = ()=>{
        dispatch(userInfoSlice.actions.boardPost(posting(post.title,post.content)))
        alert("작성 완료");
        navigate("/board") 
    }

    return<>
        <WriterTitle>Write</WriterTitle>
        <WriteWrapper>
        <WriteSubject>TITLE</WriteSubject>
        <TitleBox name='title' value={post.title} onChange={handleOnChange}/>
        <WriteSubject>CONTENTS</WriteSubject>
        <ContentBox name='content' value={post.content} onChange={handleOnChange}/>
        <SubmitButton onClick={submit}>SUBMIT</SubmitButton>
        </WriteWrapper>
    </>
}
export default Write;