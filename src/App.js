import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import './App.css';
import ProfilePage from './components/ProfilePage';
import Stage from './components/Stage'
import NewUser from './components/NewUser';
import OnlineMode from './components/OnlineMode'
import EditUser from './components/EditUser'

export default class App extends React.Component {
  
    constructor(){
      super()
      this.state={
        ricks: [],
        loginPage: true,
        profilePage: false,
        stageMode: false,
        newUserPage: false,
        onlineMode: false,
        editUser: false,
        currentRick: [],
        currentMorties: [],
        username: "",
        password: "",
        age: 0,
        newMortyName: "",
        token: ""
        }
      }
     

    componentDidMount=()=>{
      if(localStorage.getItem("token")){
        this.setState({
          loginPage: false,
          profilePage: true
        })
      }
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
            // debugger
            console.log(data.token)
            console.log(data.user)
            if(data.message){
              alert(data.message)
            }else{
              this.setState({
                currentRick: data.user,
                token: data.token,
                currentMorties: data.morties,
                loginPage: false,
                profilePage: true
              })
              localStorage.setItem("token", data.token)
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
    //  debugger
     this.setState({
      currentRick: newRick.user,
      toke: newRick.token,
      currentMorties: newRick.morties,
      profilePage: true,
  
     })
   }
   handleProfileUser=(profileUser,profileMorties)=>{
     this.setState({
       currentRick: profileUser,
       currentMorties: profileMorties,
     })
   }
   handleProfileForEditedUser=(profileUser,profileMorties)=>{
    this.setState({
      currentRick: profileUser,
      currentMorties: profileMorties,
      editUser: false,
      profilePage: true
    })
  }
  
   handleLogOut=()=>{
     localStorage.clear()
     this.setState({
       profilePage: false,
       loginPage: true,
       stageMode: false

     })
    }
     handleBackToProfile=()=>{
      this.setState({
        stageMode: false,
        profilePage: true
 
      })
     }
     handleOnlineMode=()=>{
       this.setState({
        onlineMode: true,
        profilePage: false
       })
       localStorage.clear()
     }
     handleEditUser=()=>{
       this.setState({
        editUser: true,
        profilePage: false
       })
     }
   
   
   handlePage=()=>{
     if(this.state.profilePage === true ){
      
       return <ProfilePage handleLogOut={this.handleLogOut} handlePlayMode={this.handlePlayMode} rick={this.state.currentRick} morties={this.state.currentMorties} handleProfileUser={this.handleProfileUser} handleOnlineMode={this.handleOnlineMode} handleEditUser={this.handleEditUser}/>  
     }else if(this.state.stageMode === true){

       return <Stage rick={this.state.currentRick} morties={this.state.currentMorties} handleLogOut={this.handleLogOut} handleBackToProfile={this.handleBackToProfile}/>
     }else if(this.state.loginPage === true){

       return <LoginPage handleUser={this.handleUser} handlePassword={this.handlePassword} handleLogIn={this.handleLogIn} handleNewUserCreation={this.handleNewUserCreation}/>
     }else if(this.state.newUserPage === true){

       return <NewUser handleCurrentUser={this.handleCurrentUser} handleUser={this.handleUser} handleAge={this.handleAge} handleMortyName={this.handleMortyName}/>
     }else if(this.state.onlineMode === true){
       return <OnlineMode/>
     }else if(this.state.editUser === true){
       return <EditUser avatar={this.state.currentRick} handleProfileForEditedUser={this.handleProfileForEditedUser}/>
     }
   }

  render(){
    return (
      <div>
      <div class="ui inverted menu">
      <a class="active red item" onClick={this.handleLogOut} >LogOut</a>
      <a class="active purple item" onClick={this.handleBackToProfile} >Profile</a>
    </div>
      
          {this.handlePage()}
       
      </div>
      )
    }
}

