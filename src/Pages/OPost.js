
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function OPost(){
    let {index} = useParams();
    const loadPost = useSelector((state)=>state[1].map((i)=>i));
    return <>
    <h1>post{index}</h1>
    <h2>{loadPost[index].title}</h2>
    <h3>{loadPost[index].writer}</h3>
    <p>{loadPost[index].content}</p>
    </>
}
export default OPost;