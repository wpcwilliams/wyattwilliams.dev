import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                
                <div style={{textAlign: 'center'}}>
                    
                    <h1 style={{ marginTop: '10%' }}>Contact</h1>

                    <form style={{display: 'flex', justifyContent: 'center', flexDirection: '' }}>
                        <label htmlFor='name'>Name</label>
                        <input type='text'></input> <br/>
                        <label htmlFor='name'>Email</label>
                        <input type='email'></input> <br/>
                        <label htmlFor='name'>Company</label>
                        <input></input> <br/>
                        
                    </form>

                    <br></br>
                    Message<textarea style={{width: '40%', height: '100px'}}></textarea>
                    <button style={null}>submit</button>

                </div> 
                
            </div>
        )
    }
}
