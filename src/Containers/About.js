import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>

            <h1 style={{ display: 'flex', padding: '0px', textAlign: 'left', marginLeft: '10%' }}>About</h1>
            <textbox style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '16%', marginRight: '16%', fontSize: '1.2em', textAlign: 'left' }}>
                Graduate in Computer Science from Eastern Washington University.
                Currently seeking exciting opporunities in software engineering.
                My interests range from web development to
                Passion for learning new things, solving problems, and developing great software.
                With an avid interest in music and music technology.
                If you feel I might be a good fit for your project or company then I'd welcome the opportunity to speak with you. </textbox>

            <div style={{textAlign: 'center'}}> 
                <button >Download Resume (PDF)</button>
            </div>

            </div>

        )
    }
}
