import React from 'react';
import LoginPage from './components/LoginPage'
import './App.css';
import ProfilePage from './components/ProfilePage';
import Stage from './components/Stage'


export default class App extends React.Component {
  
    constructor(){
      super()
      this.state={
        ricks: [],
        loginPage: false,
        profilePage: false,
        stageMode: false,
        name: ""
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
        this.handleLogIn()
       
    }
    handleUser=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        name: e.currentTarget.value
      })
      
       
   }
   
   handleLogIn=()=>{
     if(this.state.ricks.find(rick =>rick.name === this.state.name)){
       this.setState({
        profilePage: true
       })}
   }
   handleFoundRick=()=>{
    //  debugger
   return this.state.ricks.find(rick =>rick.name === this.state.name)
   }
   handlePlayMode=()=>{
     this.setState({
      stageMode: true,
      profilePage: false
     })
   }
   
   handlePage=()=>{
     if(this.state.profilePage === true ){
       return <ProfilePage handlePlayMode={this.handlePlayMode} rick={this.handleFoundRick()}/>  
     }else if(this.state.stageMode === true){
       return <Stage rick={this.handleFoundRick()}/>
     }else{
       return <LoginPage handleUser={this.handleUser} handleLogIn={this.handleLogIn}/>
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

