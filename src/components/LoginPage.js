import React from 'react'
import loingPageimg from '../assets/loginpage2.jpg'
import icon03 from '../assets/icon03.png'
import icon05 from '../assets/icon05.png'

import { Input , Button ,Header,Image  } from 'semantic-ui-react'

export default class LoginPage extends React.Component{

    

    render(){
    //    let t = this
    //    debugger
        return(
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '0px',
                backgroundImage: `url(${loingPageimg})`,
                backgroundPosition: '0, 0',
                width: '100%',
                height: '100%',}}>
            

            <div className="ui middle aligned center aligned grid"
                style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                
                
            <div className="column">
            <Header as='h1' color='orange'>
            <Image circular src={icon05} /> Username
            </Header>
                <Input onChange={this.props.handleUser} type="text"/>
                <br></br>
                <Header as='h1' color='orange'>
            <Image circular src={icon03} /> Password
            </Header>
                <Input onChange={this.props.handlePassword} type="text"/>
                <br></br>
                <Button onClick={this.props.handleLogIn}>LonIN</Button>
                <div>
                <Button onClick={this.props.handleNewUserCreation}>Create an Account</Button>
                </div>
            </div>
            </div>
        </div>
           
        )
    }
}

// <Stage data={this.props.check} /> 