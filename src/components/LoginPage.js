import React from 'react'
import loingPageimg from '../assets/loginpage2.jpg'
import login from '../assets/login.png'
import portalG from '../assets/Portal.gif'

import { Input , Button ,Image, Icon } from 'semantic-ui-react'

export default class LoginPage extends React.Component{

    constructor(){
        super()
        this.state ={
            display: false
        }
    }
    
    handleModal=()=>{
     return(
       
         <div class="bg-modal" style={{display: 'flex'}}>
            <div class="modal-contents">

                <div  onClick={this.handleModalCLose}class="close">+</div>
                <div class="ui placeholder segment">
                    <div class="ui two column very relaxed stackable grid">
                        <div class="column">
                        <div class="ui form">
                            <div class="field">
                            <label>Username</label>
                            <div class="ui left icon input">
                            <input onChange={this.props.handleUser} type="text" placeholder="username"/>
                                <i class="user icon"></i>
                            </div>
                            </div>
                            <div class="field">
                            <label>Password</label>
                            <div class="ui left icon input">
                            <input onChange={this.props.handlePassword} type="password"/>
                                <i class="lock icon"></i>
                            </div>
                            </div>
                            <div onClick={this.props.handleLogIn} class="ui red submit button">Login</div>
                        </div>
                        </div>
                        <div class="middle aligned column">
                        <div onClick={this.props.handleNewUserCreation} class="ui big button">
                            <i  class="signup icon"></i>
                            Sign Up
                        </div>
                        </div>
                    </div>
                    <div class="ui vertical divider">
                        Or
                    </div>
                    </div>
            </div>
        </div>
         )
        
    }
    handleModalCLose=()=>{
      this.setState({
          display: false
      })
        
    }
    handleDisplay=()=>{
        this.setState({
            display: true
        })
    }
    

    render(){
        return(
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '0px',
                backgroundImage: `url(${loingPageimg})`,
                backgroundPosition: '0, 0',
                width: '100%',
                height: '100%',}}>
            <div style={{
                position: 'absolute',
                top: '200px',
                left: 800}}>
                <Image onClick={this.handleDisplay} circular src={portalG} size='medium' />
            </div>
            {this.state.display === true ? this.handleModal() : null}
            </div>
        )
    } 

}