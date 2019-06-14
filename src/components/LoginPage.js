import React from 'react'





export default class LoginPage extends React.Component{

    

    render(){
    //    let t = this
    //    debugger
        return(
            <div>
                <h3>User Name here</h3>
                <input onChange={this.props.handleUser} type="text"/>
                <button onClick={this.props.handleLogIn}>LonIN</button>
                   

            </div>
        )
    }
}

// <Stage data={this.props.check} /> 