import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import './App.css';
import ProfilePage from './components/ProfilePage';
import Stage from './components/Stage'
import NewUser from './components/NewUser';
import OnlineMode from './components/OnlineMode'
import EditUser from './components/EditUser'
import MyMorty from './components/MyMorty';


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
        token: "",
        mortyPage: false,
        renderNewMorty: false,
        currentCardMorty: 0,
        value: null
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
     localStorage.setItem("token", newRick.token)
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
    handleValueState=()=>{
      if(this.state.value ==='Hard Mode! 😱'){
        return 3
      }else if (this.state.value === 'Easy Mode 🤪'){
        return 6
      }
    }
    handleNewMorty=(morty)=>{
    
        if(Math.floor(Math.random() * Math.floor(10)) < this.handleValueState()){
     
        fetch('http://localhost:3000/morties',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            morty: morty,
            food: Math.floor(Math.random() * Math.floor(100)),
            health: Math.floor(Math.random() * Math.floor(100)),
            level: Math.floor(Math.random() * Math.floor(100)),
            rickID: this.state.currentRick.id
            })
          })
            .then(resp=>resp.json())
            .then(data=>{
              if(data.message){
                alert(data.message)
              }else{
                this.setState({
                  currentRick: data.user,
                  currentMorties: data.morties,
                  renderNewMorty: true
                })
              }
          })
        }else{
          alert("wubba lubba dub dub")
          this.setState({
            renderNewMorty: true
          })
          
          
        }
    }
    handleRenderMortyToFalse=()=>{
      this.setState({
        renderNewMorty: false
      })
    }

    handleRemoveMorty=(mortyID)=>{
      
      fetch(`http://localhost:3000/morties/${mortyID}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mortyId: mortyID,
          rickID: this.state.currentRick.id
          })
         })
      .then(resp => resp.json())
      .then(data=>{
        
          console.log("morty removed")
          this.setState({
            currentRick: data.user,
            currentMorties: data.morties
          })
          if(this.state.stageMode === true){
            return null
          }else{
            this.setState({
              profilePage: true
            })
          }
        
    })

    }
    handleMortyPage=(e)=>{
      
      this.setState({
        currentCardMorty: e.currentTarget.id,
        profilePage:false,
        mortyPage: true
      })
    }
    handleBackToLogin=()=>{
      this.setState({
        newUserPage: false,
        loginPage: true
      })
    }
    handleChange = (e) => {
    
    this.setState({ 
      value: e.currentTarget.children[0].defaultValue 
    })
  }
   
   handlePage=()=>{
     if(this.state.profilePage === true ){
      
       return <ProfilePage value={this.state.value} handleChange={this.handleChange} handleMortyPage={this.handleMortyPage} handleLogOut={this.handleLogOut} handlePlayMode={this.handlePlayMode} rick={this.state.currentRick} morties={this.state.currentMorties} handleProfileUser={this.handleProfileUser} handleOnlineMode={this.handleOnlineMode} handleEditUser={this.handleEditUser}/>  
     }else if(this.state.stageMode === true){

       return <Stage  handleRenderMortyToFalse={this.handleRenderMortyToFalse} renderNewMorty={this.state.renderNewMorty} handleRemoveMorty={this.handleRemoveMorty}newMorty={this.state.newMorty} handleNewMorty={this.handleNewMorty} rick={this.state.currentRick} morties={this.state.currentMorties} handleLogOut={this.handleLogOut} handleBackToProfile={this.handleBackToProfile}/>
     }else if(this.state.loginPage === true){

       return <LoginPage  handleUser={this.handleUser} handlePassword={this.handlePassword} handleLogIn={this.handleLogIn} handleNewUserCreation={this.handleNewUserCreation}/>
     }else if(this.state.newUserPage === true){

       return <NewUser handleCurrentUser={this.handleCurrentUser} handleUser={this.handleUser} handleAge={this.handleAge} handleMortyName={this.handleMortyName}/>
     }else if(this.state.onlineMode === true){
       return <OnlineMode/>
     }else if(this.state.editUser === true){
       return <EditUser avatar={this.state.currentRick} handleProfileForEditedUser={this.handleProfileForEditedUser}/>
     }else if(this.state.mortyPage === true){
      return <MyMorty morties={this.state.currentMorties} handleRemoveMorty={this.handleRemoveMorty} currentCardMorty={this.state.currentCardMorty}/>

     }
   }

  render(){
    return (
      <div>
      <div class="ui inverted menu">
      <a class="active red item" onClick={this.handleLogOut} >LogOut</a>

      {localStorage.getItem("token")?<a class="active purple item" onClick={this.handleBackToProfile} >Profile</a>:null}
      {this.state.newUserPage === true ? <a class="active green item" onClick={this.handleBackToLogin} >Home</a>:null }
    
      </div>
      
          {this.handlePage()}
       
      </div>
      )
    }
}

