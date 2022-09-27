
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import userInfoSlice from './../Redux/UserReducer';

const Title = styled.h1`
    font-family:'Roboto';
    font-weight: 500;
    font-size: 2em;
    border-bottom: 1px solid black;
`;
const PostWriter = styled.h2`
    text-align: right;
    width:40vw;
    margin-right:25px ;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
const PostContent = styled.p`
    font-family: 'Noto Sans KR';
    text-align: left;
    height: 30vh;
    margin: 0 13px 0 13px;
`;
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 60vh;
    width: 60vw;
    min-width: 40vw;
`;

function OPost(){
    let {_index} = useParams();
    const loadPost = useSelector((state)=>state[1].map((i)=>i));
    const NowLogin = useSelector((state)=>state[0].map(i=>i));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userAdmit,setUserAdmit]=useState(false);
    const checkAdmit = ()=>{
        for(let i=0;i<NowLogin.length;i++){
            if(NowLogin[i].on){
                if(loadPost[_index].writer === NowLogin[i].id){
                    setUserAdmit(true);
                }
            }
        }
    }
    useEffect(checkAdmit,[_index]);
    const nowPage = document.location.href.split("@");
    const pageInt = parseInt(nowPage[1]);
    
    const [sPost,setSPost]=useState({
        title:"",
        writer:"",
        content:"",
        index:0,
    })
   function select(){
        for(let i =0;i<loadPost.length;i++){
            if(i===pageInt){
                setSPost({
                    title:loadPost[i].title,
                    writer:loadPost[i].writer,
                    content:loadPost[i].content,
                    number:loadPost[i].number,
            })
            break;
            }
        }
    }

    const Delete=()=>{
        select();
        console.log(sPost)
        dispatch(userInfoSlice.actions.boardDelete(sPost));
        // navigate("/board");
    }
    return <>
    <PostWrapper>
    <Title>{loadPost[_index].title}</Title>
    <PostWriter>{loadPost[_index].writer}</PostWriter>
    <PostContent>{loadPost[_index].content}</PostContent>
    <h1>{sPost.number}</h1>
   <div>
    <p>{NowLogin.id}</p>
    {userAdmit?<button>edit</button>:null}
    {userAdmit?<button onClick={Delete}>delete</button>:null}
    </div>
    </PostWrapper>
    </>
}
export default OPost;