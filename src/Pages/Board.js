
import { useSelector } from 'react-redux';
function Board(){
    const loadList = useSelector((state)=>state[1].map(i=>i));
    return<>
    <h1>Board</h1>
    <ul>
        {loadList.map((i)=><li>{i.title}/{i.writer}</li>)}
    </ul>
    </>
}
export default Board;