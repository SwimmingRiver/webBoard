import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import OPost from './OPost';

function Board(){
    const loadList = useSelector((state)=>state[1].map(i=>i));
   
    return<>
    <h1>Board</h1>
    <ul>
        {loadList.map((i,index)=><li key={i.writer+index}>
            {index}/
            <Link to={{
                pathname: `/webBoard/post/${index}`,
              
            }}>{i.title}</Link>/{i.writer}</li>)}
    </ul>
    </>
}
export default Board;


// state:{
//     title:i.title,
//     writer:i.writer,
//     content:i.content
// }