import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

class NavBar extends React.Component {

    render() {

        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/daily-care">Daily Care</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
