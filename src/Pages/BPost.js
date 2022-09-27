import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

function BPost(){
    let {pNum} = useParams();
    const loadPost = useSelector((state)=>state[1].map((i)=>i));
    const dispatch = useDispatch();
    const nowPage = document.location.href.split("@");
    const pageInt = parseInt(nowPage[1]);
    const Del =()=>{
       let rArr =  loadPost[pageInt];
       console.log(rArr);
       dispatch(userInfoSlice.actions.boardDelete(rArr))
    }
    return<>
    <PostWrapper>
        <Title>{loadPost[pNum].title}</Title>
        <PostWriter>{loadPost[pNum].writer}</PostWriter>
        <PostContent>{loadPost[pNum].content}</PostContent>
        <button onClick={Del}>del</button>
        <button>edit</button>
    </PostWrapper>
    </>
}

export default BPost;