
import React from 'react';
import './sass/main.scss';

 const Header : React.FC = () => {
  const [menuState, setMenuState ]= React.useState(false);
   const switchMenu =() => setMenuState(o => !o);
 
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
        <div className={menuState ? "activeMobile" : "activePC"}>
        <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link">
                <a href="#" className="nav-links">About</a>
            </div>
            <div className="Navbar__Link">
                <a href="#" className="nav-links">PEOPLE</a>
            </div>
            <div className="Navbar__Link">
                <a href="#" className="nav-links">WORK</a>
            </div>
             </nav>
    </div>
    </div>
        </>
    )
     
 }

 export default Header