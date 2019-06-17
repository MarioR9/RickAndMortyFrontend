import React, { Fragment } from 'react'
import { Card, Input ,Container, Image, Icon } from 'semantic-ui-react'
import Spritesheet from 'react-responsive-spritesheet'


import CowboyRickP from '../assets/Ricks/Profile/CowboyRick.png'
import DoofusRickP from '../assets/Ricks/Profile/DoofusRick.png'
import pickleRickP from '../assets/Ricks/Profile/pickleRick.png'
import SuperFanRickP from '../assets/Ricks/Profile/SuperFanRick.png'

import BethP from '../assets/Bed/profile/Beth.png'
import GunkBethP from '../assets/Bed/profile/GunkBeth.png'
import OriginalBethP from '../assets/Bed/profile/OriginalBeth.png'
import WastelandBethP from '../assets/Bed/profile/WastelandBeth.png'

import GunkJerryP from '../assets/jerry/profile/GunkJerry.png'
import JerryP from '../assets/jerry/profile/Jerry.png'
import OriginalJerryP from '../assets/jerry/profile/OriginalJerry.png'
import WastelandJerryP from '../assets/jerry/profile/WastelandJerry.png'

import GunkSummerP from '../assets/summer/profile/GunkSummer.png'
import HawaiianSummerP from '../assets/summer/profile/HawaiianSummer.png'
import SummerP from '../assets/summer/profile/Summer.png'
import WastelandSummerP from '../assets/summer/profile/WastelandSummer.png' 



import CowboyRick from '../assets/Ricks/walkingSprites/CowboyRick.png'
import DoofusRick from '../assets/Ricks/walkingSprites/DoofusRick.png'
import pickleRick from '../assets/Ricks/walkingSprites/pickleRick.png'
import SuperFanRick from '../assets/Ricks/walkingSprites/SuperFanRick.png'

import Beth from '../assets/Bed/sprites/Beth.png'
import GunkBeth from '../assets/Bed/sprites/GunkBeth.png'
import OriginalBeth from '../assets/Bed/sprites/OriginalBeth.png'
import WastelandBeth from '../assets/Bed/sprites/WastelandBeth.png'

import GunkJerry from '../assets/jerry/sprites/GunkJerry.png'
import Jerry from '../assets/jerry/sprites/Jerry.png'
import OriginalJerry from '../assets/jerry/sprites/OriginalJerry.png'
import WastelandJerry from '../assets/jerry/sprites/WastelandJerry.png'

import GunkSummer from '../assets/summer/sprites/GunkSummer.png'
import HawaiianSummer from '../assets/summer/sprites/HawaiianSummer.png'
import Summer from '../assets/summer/sprites/Summer.png'
import WastelandSummer from '../assets/summer/sprites/WastelandSummer.png' 


let charactersP = [CowboyRickP,DoofusRickP,pickleRickP,SuperFanRickP,
    BethP,GunkBethP,OriginalBethP,WastelandBethP,
    GunkJerryP,JerryP,OriginalJerryP,WastelandJerryP,
    GunkSummerP,HawaiianSummerP,SummerP,WastelandSummerP]

let characters = [CowboyRick,DoofusRick,pickleRick,SuperFanRick,
    Beth,GunkBeth,OriginalBeth,WastelandBeth,
    GunkJerry,Jerry,OriginalJerry,WastelandJerry,
    GunkSummer,HawaiianSummer,Summer,WastelandSummer]
    // let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]
    
    let randomRick = characters[Math.floor(Math.random() * characters.length)];
    
    export default class EditUser extends React.Component{
        constructor(){
            super()
            
           
        this.state={
            currentRick: null,
            RickId: characters.indexOf(randomRick),
            MortyId: "",
            PlayerName: "",
            PlayerPassword: "",
            PlayerAge: "",
            currentPlayerAvatar: ""
            
    
        }
    }
    componentDidMount=()=>{
        this.setState({
            currentRick: <Spritesheet style={{
                backgroundColor: "#dadbde"}}
            className={`my-element__class--style`}
            image={characters[this.props.avatar.avatar]}
            widthFrame={130}
            heightFrame={159}
            steps={4}
            fps={7}
            autoplay={true}
            loop={true} />,
            PlayerName: this.props.avatar.username,
            PlayerAge: this.props.avatar.age,
            currentPlayerAvatar: charactersP[this.props.avatar.avatar]
        })
    }
    
    handleRickSelection=(e)=>{
        var selected = e.currentTarget.id
        let char = characters[selected]
            this.setState({
                currentRick: <Spritesheet style={{
                    backgroundColor: "#dadbde"}}
                className={`my-element__class--style`}
                key={selected} 
                image={char}
                dataset={selected}
                widthFrame={130}
                heightFrame={159}
                steps={4}
                fps={7}
                autoplay={true}
                loop={true}
                
                />,
                RickId: selected,
                currentPlayerAvatar: charactersP[selected]
            })
        }
    
    handleRandomSelection=(e) =>{
        let t = this 
        let ricks = characters[Math.floor(Math.random() * characters.length)]
        let avatar = charactersP[Math.floor(Math.random() * characters.length)]
        this.setState({
            currentRick: <Spritesheet style={{
                backgroundColor: "#dadbde"}}
            className={`my-element__class--style`}
            image={ricks}
            widthFrame={130}
            heightFrame={159}
            steps={4}
            fps={7}
            autoplay={true}
            loop={true}
           
            />,
            RickId: characters.indexOf(ricks),
            currentPlayerAvatar: charactersP[characters.indexOf(ricks)]
            
        })
    }

    handleEdit=(e)=>{
     
    fetch(`http://localhost:3000/ricks/${this.props.avatar.id}`,{
	      method: "PATCH",
		  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.PlayerName,
            password: this.state.PlayerPassword,
            age: this.state.PlayerAge,
            avatar: this.state.RickId,
            id: this.props.avatar.id
        //   MortyId: this.state.MortyId //hard code morty		
      })
    })
    .then(resp=>resp.json())
    .then(player=>{
        // debugger
     this.props.handleProfileForEditedUser(player.user,player.morties)
    
    
    })

    }
    handlePlayerName=(e)=>{
        
        this.setState({
            PlayerName: e.currentTarget.value})
    }
    handlePlayerPassword=(e)=>{
        
        this.setState({
            PlayerPassword: e.currentTarget.value})
    }
    handlePlayerAge=(e)=>{
        
        this.setState({
            PlayerAge: e.currentTarget.value})
    }
    render(){
        // let t = this 
        //     debugger
        return(
            <div>
            <fragment>
                <div>
                <h1 style={{
                        position: 'relative',
                        top: 100,
                        left: 100}}>Choose Your Character
              
                </h1>
                <Card.Group 
                    style={{
                        position: 'relative',
                        top: 100,
                        left: 100,
                        width: 700
                }}
            itemsPerRow={6}>
            {characters.map((rick,index) =>  
             <Card  className="target-selected" onClick={this.handleRickSelection} id={index} key={index} raised image={
            <Spritesheet style={{
                        backgroundColor: "#dadbde"}}
                    className={`my-element__class--style`}
                    image={rick}
                    widthFrame={130}
                    heightFrame={159}
                    steps={4}
                    fps={9}
                    autoplay={false}
                    loop={true}
                    onMouseEnter={spritesheet => {
                        spritesheet.play();
                      }}
                      onMouseLeave={spritesheet => {
                        spritesheet.pause();
                      }}
                    /> }/>  )}                                         
            </Card.Group>
             
        </div>

       
        <Container style={{
                        position: 'absolute',
                        top: 100,
                        left: 900,
                        }}>
                    
        <div style={{
            position: 'relative',
                
            backgroundPosition: '100, 100',
            width: '60%',
            height: '100%'
                    }}>
                <h1>Selected Team</h1>
                <Card.Group 
                    style={{
                        position: 'relative',
                        top: 0,
                        left: 0,
                        width: 700
                        }}
                    itemsPerRow={6}>
            
            <Card id="target-selected"
                 raised image={this.state.currentRick}/>

                <button onClick={this.handleRandomSelection}>Random</button>
                <button onClick={this.handleEdit}>Edit</button>
            </Card.Group>
     
            

            </div>
        </Container>
            <div style={{
                        position: 'absolute',
                        top: 300,
                        left: 900,
                        width: 700
                        }}>
            <Input onChange={this.handlePlayerName} type="text" placeholder="Name..."></Input>
            <br></br>
            <Input onChange={this.handlePlayerPassword} type="password" placeholder="Password..."></Input>
            <br></br>
            <Input onChange={this.handlePlayerAge} type="text" placeholder="Age..."></Input>
            <br></br>
            </div>
        </fragment>
        <Card style={{
                        position: 'absolute',
                        top:   120,
                        left:  1200,
                        }}>

                    <Image src={this.state.currentPlayerAvatar} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{this.state.PlayerName}</Card.Header>
                                <Card.Meta>
                                    <span className='date'> Age: {this.state.PlayerAge}</span>
                                </Card.Meta>
                            </Card.Content>
                        <Card.Content extra>
                  
                    </Card.Content>
                </Card>    
         </div>
        )
    }
}

