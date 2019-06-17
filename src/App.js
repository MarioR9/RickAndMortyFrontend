import React from 'react';
import LoginPage from './components/LoginPage'
import './App.css';
import ProfilePage from './components/ProfilePage';
import Stage from './components/Stage'
import NewUser from './components/NewUser';


export default class App extends React.Component {
  
    constructor(){
      super()
      this.state={
        ricks: [],
        loginPage: true,
        profilePage: false,
        stageMode: false,
        newUserPage: false,
        currentRick: [],
        username: "",
        password: "",
        age: 0,
        newMortyName: ""
        }
      }
     

    componentDidMount=()=>{
        fetch('http://localhost:3000/ricks')
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                ricks: data
            })
        })   
    }

    handleUser=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        username: e.currentTarget.value
      })
    }
    handlePassword=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        password: e.currentTarget.value
      })
    }
     handleAge=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        age: e.currentTarget.value
      })  
    }
     handleMortyName=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        newMortyName: e.currentTarget.value
        })
   }
   
   handleLogIn=()=>{
    fetch('http://localhost:3000/login',{
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
          .then(resp=>resp.json())
          .then(data=>{
            console.log(data.token)
            console.log(data.user)
            if(data.user.username){
            this.setState({
              currentRick: data.user,
              loginPage: false,
              profilePage: true
            })
          }else{
            alert(data.message)
        }
      })
      
    }

   handlePlayMode=()=>{
     this.setState({
      stageMode: true,
      profilePage: false
     })
   }
   handleNewUserCreation=()=>{
     this.setState({
      loginPage: false,
      newUserPage: true
     })
   }
   handleCurrentUser=(newRick)=>{
     debugger
     this.setState({
      currentRick: newRick,
      profilePage: true
     })
   }
   
   handlePage=()=>{
     if(this.state.profilePage === true ){
       return <ProfilePage handlePlayMode={this.handlePlayMode} rick={this.state.currentRick}/>  
     }else if(this.state.stageMode === true){
       return <Stage rick={this.state.currentRick}/>
     }else if(this.state.loginPage === true){
       return <LoginPage handleUser={this.handleUser} handlePassword={this.handlePassword} handleLogIn={this.handleLogIn} handleNewUserCreation={this.handleNewUserCreation}/>
     }else if(this.state.newUserPage === true){
       return <NewUser handleCurrentUser={this.handleCurrentUser} handleUser={this.handleUser} handleAge={this.handleAge} handleMortyName={this.handleMortyName}/>
     }
   }

  render(){
      return (
      <div>
      {this.handlePage()}
      </div>
      )
    }
}

