import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import OPost from './OPost';
import styled from 'styled-components';

const DesginedList = styled.ul`
        border:solid 1px black ;
        border-radius: 5px;
        width: 70vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 5px;
    `;
    const BoardList = styled.ul`
        border: solid 1px black;
        width: 70vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    `;
    const TList = styled.li`
        display: flex;
        justify-content: space-around;
        border-bottom: solid 1px black;
    `;
    const LBoxNum = styled.div`
        width: 20vw;
        text-align: center;
    `;
    const LBoxTitle = styled.div`
    width: 20vw;
    text-align: center;
    border-left: solid 1px black;
    border-right: solid 1px black;
    `;
    const LBoxId = styled.div`
    width: 20vw;
    text-align: center;  
    `;
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;
    `;



function Board(){
    const loadList = useSelector((state)=>state[1].map(i=>i));
    
    return<>
    <h1>Board</h1>
     <DesginedList><li>번호</li><li>제목</li><li>작성자</li></DesginedList>
    <BoardList>
        {loadList.map((i,index)=><TList key={i.writer+index}>
           <LBoxNum>{index}</LBoxNum>
            <StyledLink to={{
                pathname: `/webBoard/post/${index}`,
              
            }}><LBoxTitle>{i.title}</LBoxTitle></StyledLink><LBoxId>{i.writer}</LBoxId></TList>)}
    </BoardList>
    </>
}
export default Board;


// state:{
//     title:i.title,
//     writer:i.writer,
//     content:i.content
// }