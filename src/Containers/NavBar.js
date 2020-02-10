import React, { Component } from 'react';
import NavItem from '../Components/NavItem';

const navStyle = {
    overflow: 'hidden',
    backgroundColor: '#333',
    position: 'fixed',
    top: '0',
    width: '100%',  
    listStyle: 'none',
    padding: '12px',
}

const linkStyle = {
    display: 'flex',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
}

const nameStyle = {
    display: 'flex',
    marginRight : 'auto',
    fontSize: '26px',
    fontFamily: 'monospace',
    fontWeight: 'bold',
}

export default class NavBar extends Component {
    render() {
        return (
            <nav style={navStyle}>
                <span style={nameStyle}>
                    <NavItem customStyle={nameStyle}>wyattwilliams.dev</NavItem>
                    <NavItem>ABOUT</NavItem>
                    <NavItem>PROJECTS</NavItem>
                    <NavItem>CONTACT</NavItem>
                </span>
            </nav>
        )
    }
}
