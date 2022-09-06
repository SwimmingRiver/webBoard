
import { useSelector } from 'react-redux';
import Board from './Board';
function Main(){
 const PostList = useSelector((state)=>state[1]); 
    return<>
    <h1 style={{fontFamily:'Roboto',fontSize:"60px"}}>Main</h1>
    <Board/>
    </>
}
export default Main;