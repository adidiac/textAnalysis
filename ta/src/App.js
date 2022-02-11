import * as Icon from 'react-bootstrap-icons'
import {Row,Col,Container,Button, Navbar} from 'react-bootstrap'
import Logo from './Component/Logo'
import MyNavbar from './Component/Navbar';
import About  from './Component/About';
import Analyzer from './Component/Analyzer';
import Info from './Component/Info'
function App() {
  const space=(many)=>
  {
    let manySpaces=[];
    for(let i=0;i<many;i++)
        manySpaces.push(<br></br>);
    return <>
    {manySpaces.map((el)=>el)}
    </>
  }
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <About>
      </About>
      {space(3)}
      <hr style={{color:"white",margin:20}}></hr>
      {space(1)}
      <Analyzer></Analyzer>
      {space(3)}
      <hr style={{color:"white",margin:20}}></hr>
      {space(2)}
      <Info></Info>
      {space(3)}
    </div>
  );
}

export default App;
