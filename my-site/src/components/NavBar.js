import { useEffect, useState } from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {VscGithubAlt} from 'react-icons/vsc'
import {AiFillLinkedin} from  'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


export const NavBar = () => {
    const [activeLink, setactiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    
useEffect(() =>{
    const onScroll = () => {
        if(window.scrollY > 50) {
            seScrolled(true);
        } else {
            seScrolled(false);
        }
    }
    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setactiveLink(value);
}

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
        <Navbar.Brand href="#home">
            <img src= {''} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className="social-icon">
                <a href='#'> <AiFillLinkedin /> </a>
                <a href='#'> <VscGithubAlt /> </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}> 
            <span> Let's Connect </span> 
            </button>
        </span>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavBar;

