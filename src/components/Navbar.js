import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -75; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const scrollWithOffsetPos = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 75; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navbar() {
    return (
        <div className=" sticky-top">
            
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link smooth to="#home" scroll={el => scrollWithOffset(el)} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                            <Link smooth to="#projects" scroll={el => scrollWithOffset(el)} className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item active">
                            <Link smooth to="#contact" scroll={el => scrollWithOffsetPos(el)} className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item active">
                            <Link to="/ParkerMcKillopResume.pdf" target="_blank" className="nav-link" download>Resume</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="https://github.com/pem2k" target="_blank">Github</a>
                            </li>
                            <li className="nav-item active ">
                                <a className="nav-link " target="_blank" href="https://www.linkedin.com/in/parker-mckillop/" role="button" data-toggle="dropdown" aria-expanded="false">
                                    LinkedIn
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            
        </div>
    )
}
