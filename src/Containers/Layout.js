import React, { Component } from 'react'
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

import './Layout.css'

export default class Layout extends Component {
    render() {
        return (
            <div style={null}>
                <div className='Nav'>
                    <NavBar></NavBar>
                </div>

                <div>
                    <About></About>
                </div>

                <div>
                    <Contact></Contact>
                </div>

                <div>
                    <Projects></Projects>
                </div>

                <div style={{}}>
                    <footer style={{ marginTop: '10%'  }} >Wyatt Williams 2020</footer>
                </div>
            </div>

        )
    }
}
