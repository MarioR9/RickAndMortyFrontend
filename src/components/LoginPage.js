import React from 'react'
import Canvas from './Canvas'
import Spritesheet from 'react-responsive-spritesheet'

export default class LoginPage extends React.Component{

    

    render(){
    //    let t = this
    //    debugger
        return(
            <div class="ui middle aligned center aligned grid"
                style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                
                
            <div class="column">
                <h3>User Name here</h3>
                <input onChange={this.props.handleUser} type="text"/>
                <br></br>
                <button onClick={this.props.handleLogIn}>LonIN</button>
                <div>
                    <button onClick={this.props.handleNewUserCreation}>Create an Account</button>
                </div>
            </div>
            

            </div>
        )
    }
}

// <Stage data={this.props.check} /> 