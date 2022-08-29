import Join from './Pages/Join';
import { useSelector } from 'react-redux';

function App() {
  const showList = useSelector((state)=>state.map((i,index)=>(<li key={index}>{i.name}/{i.id}/{i.pw}</li>)))
  return (
    <>
    <Join/>
    <ul>{showList}</ul>
    </>
  );
}

export default App;
