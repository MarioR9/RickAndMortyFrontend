import React  from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
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
        value: 'Easy Mode 🤪',
        mortyID: 0
        }
      }
     

    componentDidMount=()=>{
      if(localStorage.getItem("token")){
        return <Redirect to='/profile'/>
      }else{
        return <Redirect to='/home'/>
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
            if(data.message){
              alert(data.message)
            }else{
              this.setState({
                currentRick: data.user,
                token: data.token,
                currentMorties: data.morties
              })
              localStorage.setItem("token", data.token)
             return <Route path="/profile"/>
            }
          })
      
    }

    handlePlayMode=()=>{
     this.setState({
      stageMode: true,
      profilePage: false
     })
    }
    handleCurrentUser=(newRick)=>{
     this.setState({
      currentRick: newRick.user,
      toke: newRick.token,
      currentMorties: newRick.morties
  
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
      currentMorties: profileMorties
    })
    }
  
    handleLogOut=()=>{
     localStorage.clear()
    }

    handleOnlineMode=()=>{
       this.setState({
        onlineMode: true,
        profilePage: false
       })
       localStorage.clear()
    }
    
    handleValueState=()=>{
      if(this.state.value ==='Hard Mode! 😱'){
        return 3
      }else if (this.state.value === 'Easy Mode 🤪'){
        return 8
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
      
      fetch(`http://localhost:3000/morties/${parseInt(mortyID)}`, {
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
        // debugger
          console.log("morty removed")
          this.setState({
            currentRick: data.user,
            currentMorties: data.morties,
            mortyPage: false,
      
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
        currentCardMorty: e.currentTarget.id
      })
    }
    handleChange = (e) => {
    
    this.setState({ 
      value: e.currentTarget.children[0].defaultValue 
    })
  }
  handleMortyId=(id)=>{
    this.setState({
      mortyID: id
    })
  }
  render(){
    return (
        <div> 
      
        <div class="ui inverted menu">
        {localStorage.getItem("token")?<a class="active red item" href="/home" onClick={this.handleLogOut} >Logout</a>:null }
        {localStorage.getItem("token")?<a class="active purple item" href="/profile">Profile</a>:null}
        </div>
        <Router>
        <div>  
          <Switch>
          <Route path='/home'>
          <LoginPage handleUser={this.handleUser} handlePassword={this.handlePassword} handleLogIn={this.handleLogIn} handleNewUserCreation={this.handleNewUserCreation}/>
          </Route>
          <Route path="/newuser">
          <NewUser handleCurrentUser={this.handleCurrentUser} handleUser={this.handleUser} handleAge={this.handleAge} handleMortyName={this.handleMortyName}/>
          </Route>
          <Route path="/stage">
          <Stage handleRenderMortyToFalse={this.handleRenderMortyToFalse} renderNewMorty={this.state.renderNewMorty} handleRemoveMorty={this.handleRemoveMorty}newMorty={this.state.newMorty} handleNewMorty={this.handleNewMorty} rick={this.state.currentRick} morties={this.state.currentMorties} handleLogOut={this.handleLogOut} handleBackToProfile={this.handleBackToProfile}/>
          </Route>
          <Route path="/profile">
          <ProfilePage handleMortyId={this.handleMortyId} value={this.state.value} handleChange={this.handleChange} handleMortyPage={this.handleMortyPage} handleLogOut={this.handleLogOut} handlePlayMode={this.handlePlayMode} rick={this.state.currentRick} morties={this.state.currentMorties} handleProfileUser={this.handleProfileUser} handleOnlineMode={this.handleOnlineMode} handleEditUser={this.handleEditUser}/>  
          </Route>
          <Route path="/edit">
          <EditUser avatar={this.state.currentRick} handleProfileForEditedUser={this.handleProfileForEditedUser}/>
          </Route>
          <Route path={`/morty/${this.state.mortyID}`}>
          <MyMorty mortyID={this.mortyID} morties={this.state.currentMorties} handleRemoveMorty={this.handleRemoveMorty} currentCardMorty={this.state.currentCardMorty} currentRick={this.state.currentRick}/>
          </Route>
          </Switch>
        </div>
      </Router>
      
      </div>
      )
    }
}

