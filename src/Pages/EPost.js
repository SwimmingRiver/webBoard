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

function EPost(){
    let {_index} = useParams();
    const loadPost = useSelector((state)=>state[1].map((i)=>i));
    const NowLogin = useSelector((state)=>state[0].map(i=>i));
    const [wName,setWName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userAdmit,setUserAdmit]=useState(false);
    const checkAdmit = ()=>{
        for(let i=0;i<NowLogin.length;i++){
            if(NowLogin[i].on){
                if(loadPost[_index].writer === NowLogin[i].id){
                    setUserAdmit(true);
                    setWName(loadPost[_index].writer);
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
        number:0,
    })

    const Delete=()=>{
        let dNum = loadPost[pageInt].number
        dispatch(userInfoSlice.actions.boardDelete(pageInt));
        navigate("/board");
    }
    const typing =(e)=>{
        const {name,value}=e.target;
        setSPost((prev)=>({
            ...prev,
            [name]:value,
            writer:wName,
            number:pageInt
        }))
    }
    const Edit=()=>{
        dispatch(userInfoSlice.actions.boardEdit(sPost))
        navigate("/board");
    }
    return <>
    <PostWrapper>
    <input placeholder={loadPost[_index].title} onChange={typing} name='title' value={sPost.title} />
    <PostWriter>{loadPost[_index].writer}</PostWriter>
    <textarea placeholder={loadPost[_index].content} onChange={typing} name='content' value={sPost.content}/>
   <div>
    <p>{NowLogin.id}</p>
    <button onClick={Edit}>edit</button>
    <button onClick={Delete}>delete</button>
    </div>
    </PostWrapper>
    </>
}
export default EPost;