
import React from 'react';
import './sass/main.scss';

type Props = {
    menuHeight: number
 };

 const Header : React.FC<Props> = ({menuHeight}) => {
  const [menuState, setMenuState ]= React.useState(false);
  const switchMenu =() => setMenuState(o => !o);
  const nevbarLinkHeight= (menuHeight)/3;
    return (
        <>
    <div className="Navbar">
       
        <div className="Navbar__Link logo">
           crowdfund
        </div>
        <div className="Navbar__Link-toggle" onClick={switchMenu} id="js-navbar-toggle">
           { menuState ? <span >&#x2715;</span> : <span >&#9776;</span>
    }
        </div>
        { menuState ?
        <div className="activeMobile" style={{height: menuHeight}}>
        <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link" style={{height: nevbarLinkHeight}}>
                <a href="#" className="nav-links">About</a>
            </div>
            <div className="Navbar__Link" style={{height: nevbarLinkHeight}}>
                <a href="#" className="nav-links">Discover</a>
            </div>
            <div className="Navbar__Link" style={{height: nevbarLinkHeight}}>
                <a href="#" className="nav-links">Get Started</a>
            </div>
             </nav>           
    </div> 
    :
    <div className="activePC">
        <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link">
                <a href="#" className="nav-links">About</a>
            </div>
            <div className="Navbar__Link">
                <a href="#" className="nav-links">Discover</a>
            </div>
            <div className="Navbar__Link">
                <a href="#" className="nav-links">Get Started</a>
            </div>
             </nav>           
    </div>
 }
    </div>
        </>
    )
     
 }

 export default Header