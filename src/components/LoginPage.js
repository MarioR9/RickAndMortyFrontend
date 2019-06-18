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
                <div className="column" style={{
                        position: 'absolute',
                        top: 90,
                        left: 160}} >
            
                    <Input onChange={this.props.handleUser} type="text"/>
                
                    <br></br>
                    
                    <Input onChange={this.props.handlePassword} type="text"/>
                    <br></br>
                    <Button animated onClick={this.props.handleLogIn}>
                        <Button.Content visible>Login</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <div>
                    <Button onClick={this.props.handleNewUserCreation}>Sign Up</Button>
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