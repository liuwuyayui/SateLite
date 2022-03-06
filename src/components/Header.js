import React, {Component} from 'react';
import startlinkLogo from '../assets/images/Starlink_Logo.svg';



class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={startlinkLogo} className="App-logo" alt="logo"/>
                <p className="title">
                  Sate-Lite: A Starlink Satellites Trajectory Dashboard
                </p>
            </header>
        );
    }
}

export default Header;
