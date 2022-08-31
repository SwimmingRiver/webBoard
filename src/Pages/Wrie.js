
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postSlice } from '../Redux/PostReducer';

function Write(){
    const [post,setPost]=useState({
        title:"",
        content:"",
        writer:"",
    })
    const dispatch =useDispatch();
    const writerData = useSelector((state)=>state.on?state.id:null)
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setPost((prev)=>({
            ...prev,
            [name]:value,
            writer:"",
        }))
    }
    const submit = ()=>{
        if(writerData!==null){
        let lList = {
            title:post.title,
            content:post.content,
            writer:writerData,
        }
        dispatch(postSlice.actions.submit(lList))
        }else if(writerData===null){
            alert("로그인을 해주세요")
        }
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