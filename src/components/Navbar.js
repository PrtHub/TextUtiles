import React from 'react'
import PropTypes from 'prop-types';


function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg  bg-${props.color} `} data-bs-theme="dark" >
                <div className={`container-fluid text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li> */}
                            
                        </ul>
                        <div class="btn-group mx-2" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-primary" onClick={props.handlePrimary}>Blue</button>
                            <button type="button" class="btn btn-warning" onClick={props.handleWarning}>Yellow</button>
                            <button type="button" class="btn btn-info"  onClick={props.handleInfo}>L.Blue</button>
                            <button type="button" class="btn btn-danger"  onClick={props.handleDanger}>Red</button>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode === 'light' ? 'dark' : 'light'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


Navbar.protoType = {
    title: PropTypes.string,
};

