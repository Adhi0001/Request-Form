import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = ({ userName }) => {
    return (
        <div className="dashboard">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Verifacts</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="active"><Link to="/myworks">My Work</Link></li>
                        <li className="active"><a href="#">My Assignment</a></li>
                    </ul>
                </div>
            </nav>
            <div>
                Welcome,!
            </div>
        </div>
    );
};

export default Dashboard;
