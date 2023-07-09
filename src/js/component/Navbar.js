import React from 'react'

const Navbar = () => {
    return(
        
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>    
                            <li className='nav-item'>
                                <a className="nav-link" href="#">About</a>
                            </li> 
                            <li className='nav-item'>
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>

    )
}

export default Navbar