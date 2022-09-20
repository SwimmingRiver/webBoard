
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
    let {index} = useParams();
    const loadPost = useSelector((state)=>state[1].map((i)=>i));
    const NowLogin = useSelector((state)=>state[0].map(i=>i));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userAdmit,setUserAdmit]=useState(false);
    const checkAdmit = ()=>{
        for(let i=0;i<NowLogin.length;i++){
            if(NowLogin[i].on){
                if(loadPost[index].writer === NowLogin[i].id){
                    setUserAdmit(true);
                }
            }
        }
    }
    useEffect(checkAdmit,[]);
    const selectedPost = useSelector((state)=>state[1].map((i)=>i));
    const Delete =()=>{
        const nowPage = document.location.href.split("@");
        const pageInt = parseInt(nowPage[1]);
        // console.log(selectedPost[pageInt].index)
        selectedPost.splice(pageInt,1);
        dispatch(userInfoSlice.actions.boardDelete(pageInt));
        // navigate("/webBoard/board");
    }
    return <>
    <PostWrapper>
    <Title>{loadPost[index].title}</Title>
    <PostWriter>{loadPost[index].writer}</PostWriter>
    <PostContent>{loadPost[index].content}</PostContent>
   <div>
    <p>{NowLogin.id}</p>
    {userAdmit?<button>edit</button>:null}
    {userAdmit?<button onClick={Delete}>delete</button>:null}
    </div>
    </PostWrapper>
    </>
}
export default OPost;