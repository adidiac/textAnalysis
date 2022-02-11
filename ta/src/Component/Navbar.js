import { Nav,Navbar,Button} from "react-bootstrap";

import Logo from './Logo'
export default function MyNavbar()
{
    return (<Navbar collapseOnSelect expand="lg" 
    style={{background:"linear-gradient(90deg, rgba(67,18,98,1) 0%, rgba(178,12,255,1) 49%, rgba(53,9,57,1) 100%)",
    color:"white",}}>
    <Navbar.Brand href="" style={{color:"white",fontSize:40,marginLeft:30}}>
    {' '}Text Analysis
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Navbar.Brand href="#analyzer">
        <Button style={{width:60,height:60,margin:10,borderRadius:"100%",fontSize:13,border:"2px solid white",paddingLeft:4}}>
                Analyzer
              </Button>
      </Navbar.Brand>
      <Navbar.Brand href="#info">
        <Button style={{width:60,height:60,margin:10,borderRadius:"100%",fontSize:13,border:"2px solid white",paddingLeft:10}}>
                About
              </Button>
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}