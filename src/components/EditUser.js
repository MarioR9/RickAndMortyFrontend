import React, { Fragment } from 'react'
import { Card, Input ,Container, Image, Icon } from 'semantic-ui-react'
import Spritesheet from 'react-responsive-spritesheet'

import CowboyRickP from '../assets/Ricks/Profile/CowboyRick.png'
import DoofusRickP from '../assets/Ricks/Profile/DoofusRick.png'
import pickleRickP from '../assets/Ricks/Profile/pickleRick.png'
import SuperFanRickP from '../assets/Ricks/Profile/SuperFanRick.png'
import WinnerRickP from '../assets/Ricks/Profile/WinnerRick.png'
import VaporwaveRickP from '../assets/Ricks/Profile/VaporwaveRick.png'
import RobotRickP from '../assets/Ricks/Profile/RobotRick.png'
import RickP from '../assets/Ricks/Profile/Rick.png'
import RickZarchezP from '../assets/Ricks/Profile/RickZarchez.png'
import Rick800P from '../assets/Ricks/Profile/Rick800.png'
import NinjaRickP from '../assets/Ricks/Profile/NinjaRick.png'
import MysteriousRickP from '../assets/Ricks/Profile/MysteriousRick.png'
import KarateRickP from '../assets/Ricks/Profile/KarateRick.png'
import JohnRickP from '../assets/Ricks/Profile/JohnRick.png'
import GuiltyRickP from '../assets/Ricks/Profile/GuiltyRick.png'
import GreaserRickP from '../assets/Ricks/Profile/GreaserRick.png'
import DudeRickP from '../assets/Ricks/Profile/DudeRick.png'
import D99RickP from '../assets/Ricks/Profile/D99Rick.png'
import ConstructionRickP from '../assets/Ricks/Profile/ConstructionRick.png'
import CommanderRickP from '../assets/Ricks/Profile/CommanderRick.png'
import ChairRickP from '../assets/Ricks/Profile/ChairRick.png'
import BubbleGumRickP from '../assets/Ricks/Profile/BubbleGumRick.png'
import AquaRickP from '../assets/Ricks/Profile/AquaRick.png'
import AlienRick2ArmsP from '../assets/Ricks/Profile/AlienRick2Arms.png'

import CowboyRick from '../assets/Ricks/walkingSprites/CowboyRick.png'
import DoofusRick from '../assets/Ricks/walkingSprites/DoofusRick.png'
import pickleRick from '../assets/Ricks/walkingSprites/pickleRick.png'
import SuperFanRick from '../assets/Ricks/walkingSprites/SuperFanRick.png'
import WinnerRick from '../assets/Ricks/walkingSprites/WinnerRick.png'
import VaporwaveRick from '../assets/Ricks/walkingSprites/VaporwaveRick.png'
import RobotRick from '../assets/Ricks/walkingSprites/RobotRick.png'
import Rick from '../assets/Ricks/walkingSprites/Rick.png'
import RickZarchez from '../assets/Ricks/walkingSprites/RickZarchez.png'
import Rick800 from '../assets/Ricks/walkingSprites/Rick800.png'
import NinjaRick from '../assets/Ricks/walkingSprites/NinjaRick.png'
import MysteriousRick from '../assets/Ricks/walkingSprites/MysteriousRick.png'
import KarateRick from '../assets/Ricks/walkingSprites/KarateRick.png'
import JohnRick from '../assets/Ricks/walkingSprites/JohnRick.png'
import GuiltyRick from '../assets/Ricks/walkingSprites/GuiltyRick.png'
import GreaserRick from '../assets/Ricks/walkingSprites/GreaserRick.png'
import DudeRick from '../assets/Ricks/walkingSprites/DudeRick.png'
import D99Rick from '../assets/Ricks/walkingSprites/D99Rick.png'
import ConstructionRick from '../assets/Ricks/walkingSprites/ConstructionRick.png'
import CommanderRick from '../assets/Ricks/walkingSprites/CommanderRick.png'
import ChairRick from '../assets/Ricks/walkingSprites/ChairRick.png'
import BubbleGumRick from '../assets/Ricks/walkingSprites/BubbleGumRick.png'
import AquaRick from '../assets/Ricks/walkingSprites/AquaRick.png'
import AlienRick2Arms from '../assets/Ricks/walkingSprites/AlienRick2Arms.png'


let characters = [CowboyRick,DoofusRick,pickleRick,SuperFanRick,
    WinnerRick,VaporwaveRick,RobotRick,Rick,RickZarchez,Rick800,NinjaRick,
    MysteriousRick,KarateRick,JohnRick,GuiltyRick,GreaserRick,DudeRick,D99Rick,
    ConstructionRick,CommanderRick,ChairRick,BubbleGumRick,AquaRick,AlienRick2Arms] 

let charactersP = [CowboyRickP,DoofusRickP,pickleRickP,SuperFanRickP,
    WinnerRickP,VaporwaveRickP,RobotRickP,RickP,RickZarchezP,Rick800P,NinjaRickP,
    MysteriousRickP,KarateRickP,JohnRickP,GuiltyRickP,GreaserRickP,DudeRickP,D99RickP,
    ConstructionRickP,CommanderRickP,ChairRickP,BubbleGumRickP,AquaRickP,AlienRick2ArmsP] 
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

