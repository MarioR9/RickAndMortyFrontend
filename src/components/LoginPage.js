import React from 'react'


export default class LoginPage extends React.Component{

    

    render(){
    //    let t = this
    //    debugger
        return(
            <div className="ui middle aligned center aligned grid"
                style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                
                
            <div className="column">
                <h3>Username</h3>
                <input onChange={this.props.handleUser} type="text"/>
                <br></br>
                <h3>Password</h3>
                <input onChange={this.props.handlePassword} type="text"/>
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