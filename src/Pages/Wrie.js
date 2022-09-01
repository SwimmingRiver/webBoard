
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userInfoSlice} from './../Redux/UserReducer';

function Write(){
    const [post,setPost]=useState({
        title:"",
        content:"",
        writer:"",
    })
    const dispatch =useDispatch();
    const writerData = useSelector((state)=>state[0].map((i)=>i));
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
         }
         return lList;
    }
    const submit = ()=>{
      
        dispatch(userInfoSlice.actions.boardPost(posting(post.title,post.content)))
    }

    return<>
        <h1>Write</h1>
        <h2>title</h2>
        <input name='title' value={post.title} onChange={handleOnChange}/>
        <h2>contents</h2>
        <textarea name='content' value={post.content} onChange={handleOnChange}/>
        <button onClick={submit}>submit</button>
    </>
}
export default Write;