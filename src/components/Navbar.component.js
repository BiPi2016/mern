import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">ExcerciseTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Excercises <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/createExcercise">Create excercise log</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/createUser">Create user</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">All users</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
};