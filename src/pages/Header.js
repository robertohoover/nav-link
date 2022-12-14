import React from 'react'

import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/acerca">Acerca</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/todo">Todo</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/calendario">Calendario</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;