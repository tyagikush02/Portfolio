import { useEffect, useState } from "react"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon2 from '../assets/nav-icon2.svg'
import navIcon3 from '../assets/nav-icon3.svg'

function NavBar(){
    // for link
    const [activeLink,setActiveLink]=useState('home');
    
    //scroballe 
    const [scrolled,setScrolled] =useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled?"scrolled" :""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icons"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          {/* SOCIAL MEDIA LINKS */}
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/kush-tyagi-7637a5240/"><img src={navIcon1} alt="Linkedin"/></a>
                <a href="https://github.com/tyagikush02"><img src={navIcon2} alt="github"/></a>
                <a href=""><img src={navIcon3} alt="Insta"/></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar;