import Join from './Pages/Join';
import { useSelector } from 'react-redux';
import Login from './Pages/Login';
import Write from './Pages/Wrie';

function App() {
  const showList = useSelector((state)=>state.map((i,index)=>(<li key={index}>{i.name}/{i.id}/{i.pw}/{i.on.toString()}</li>)))
  return (
    <>
    <Join/>
    <hr/>
    <ul>{showList}</ul>
    <hr/>
    <Login/>
    <Write/>
    </>
  );
}

export default App;
