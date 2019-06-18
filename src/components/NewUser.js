import React, { Fragment } from 'react'
import { Card, Input ,Container ,Image } from 'semantic-ui-react'
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

import DevilMorty from '../assets/Morties/walkingSprites/DevilMorty.png'
import GreaserMorty from '../assets/Morties/walkingSprites/GreaserMorty.png'
import SuperRickFanMorty from '../assets/Morties/walkingSprites/SuperRickFanMorty.png'
import TheOneTrueMorty from '../assets/Morties/walkingSprites/TheOneTrueMorty.png'
import TwoCatMorty from '../assets/Morties/walkingSprites/TwoCatMorty.png'
import HoboMorty from '../assets/Morties/walkingSprites/HoboMorty.png'
import RabbitMorty from '../assets/Morties/walkingSprites/RabbitMorty.png'
import TestX72Morty from '../assets/Morties/walkingSprites/TestX72Morty.png'
import SelfDefenseMorty from '../assets/Morties/walkingSprites/SelfDefenseMorty.png'
import NoMercyMorty from '../assets/Morties/walkingSprites/NoMercyMorty.png'
import MustacheMorty from '../assets/Morties/walkingSprites/MustacheMorty.png'
import BeardMorty from '../assets/Morties/walkingSprites/BeardMorty.png'
import HipsterMorty from '../assets/Morties/walkingSprites/HipsterMorty.png'
import RedShirtMorty from '../assets/Morties/walkingSprites/RedShirtMorty.png'
import ExoAlphaMorty from '../assets/Morties/walkingSprites/ExoAlphaMorty.png'
import PeaceMorty from '../assets/Morties/walkingSprites/PeaceMorty.png'
import SpookyGMorty from '../assets/Morties/walkingSprites/SpookyGMorty.png'
import StrayCatMorty from '../assets/Morties/walkingSprites/StrayCatMorty.png'
import SkeletonMorty from '../assets/Morties/walkingSprites/SkeletonMorty.png'
import AquaMorty from '../assets/Morties/walkingSprites/AquaMorty.png'
import FlamingMorty from '../assets/Morties/walkingSprites/FlamingMorty.png'
import FrozenMorty from '../assets/Morties/walkingSprites/FrozenMorty.png'
import PunkMorty from '../assets/Morties/walkingSprites/PunkMorty.png'
import BananaMorty from '../assets/Morties/walkingSprites/BananaMorty.png'

let characters = [CowboyRick,DoofusRick,pickleRick,SuperFanRick,
    WinnerRick,VaporwaveRick,RobotRick,Rick,RickZarchez,Rick800,NinjaRick,
    MysteriousRick,KarateRick,JohnRick,GuiltyRick,GreaserRick,DudeRick,D99Rick,
    ConstructionRick,CommanderRick,ChairRick,BubbleGumRick,AquaRick,AlienRick2Arms] 

let charactersP = [CowboyRickP,DoofusRickP,pickleRickP,SuperFanRickP,
    WinnerRickP,VaporwaveRickP,RobotRickP,RickP,RickZarchezP,Rick800P,NinjaRickP,
    MysteriousRickP,KarateRickP,JohnRickP,GuiltyRickP,GreaserRickP,DudeRickP,D99RickP,
    ConstructionRickP,CommanderRickP,ChairRickP,BubbleGumRickP,AquaRickP,AlienRick2ArmsP]    

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]

let randomRick = characters[Math.floor(Math.random() * characters.length)];
let randomMorty = Morties[Math.floor(Math.random() * Morties.length)];

let randSelectionRick = characters[Math.floor(Math.random() * characters.length)];
let randSelectionMorty = Morties[Math.floor(Math.random() * Morties.length)];


export default class NewUser extends React.Component{
    
    constructor(){
        super()
        
      
        this.state={
            currentRick: <Spritesheet style={{
                backgroundColor: "#dadbde"}}
            className={`my-element__class--style`}
            image={randomRick}
            widthFrame={130}
            heightFrame={159}
            steps={4}
            fps={7}
            autoplay={true}
            loop={true}
            
            />,
            currentMorty: <Spritesheet style={{
                backgroundColor: "#dadbde"}}
            className={`my-element__class--style`}
            image={randomMorty}
            widthFrame={130}
            heightFrame={159}
            steps={4}
            fps={7}
            autoplay={true}
            loop={true}
            
            />,
            RickId: characters.indexOf(randomRick),
            MortyId: Morties.indexOf(randomMorty),
            PlayerName: "",
            PlayerPassword: "",
            PlayerAge: "",
            currentPlayerAvatar: charactersP[characters.indexOf(randomRick)]
            
    
        }
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
    handleMortySelection=(e)=>{
        var selected = e.currentTarget.id
        let char = Morties[selected]
            this.setState({
                currentMorty: <Spritesheet style={{
                    backgroundColor: "#dadbde"}}
                key={selected}
                className={`my-element__class--style`}
                image={char}
                dataset={selected}
                widthFrame={130}
                heightFrame={159}
                steps={4}
                fps={7}
                autoplay={true}
                loop={true}
                
                />,
                 MortyId: selected
            })
        }
    handleRandomSelection=(e) =>{
        let t = this 
        let ricks = characters[Math.floor(Math.random() * characters.length)]
        let morty = Morties[Math.floor(Math.random() * Morties.length)]
        
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
            currentPlayerAvatar: charactersP[characters.indexOf(ricks)],
            currentMorty: <Spritesheet style={{
                backgroundColor: "#dadbde"}}
            className={`my-element__class--style`}
            image={morty}
            widthFrame={130}
            heightFrame={159}
            steps={4}
            fps={7}
            autoplay={true}
            loop={true}
           
            />,
            MortyId: Morties.indexOf(morty)
        })
    }

    handleTeamCreation=(e)=>{
        console.log(e)
        let t= this 
    fetch('http://localhost:3000/ricks',{
	      method: "POST",
		  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.PlayerName,
          password: this.state.PlayerPassword,
          age: this.state.PlayerAge,
          avatar: this.state.RickId,
          MortyId: this.state.MortyId		
      })
    })
    .then(resp=>resp.json())
    .then(newPlayer=>{this.props.handleCurrentUser(newPlayer)})

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
             
        </div>)}

        <div>
        <h1 style={{
                        position: 'relative',
                        top: 100,
                        left: 100}}>Pick A Morty</h1>
        <Card.Group 
                    style={{
                        position: 'relative',
                        top: 100,
                        left: 100,
                        width: 700
                        }}
                    itemsPerRow={6}>
            {Morties.map((morty,index)=>  
            <Card className="target-selected" key={`morty${index}`} onClick={this.handleMortySelection} id={index} raised image={
            <Spritesheet  style={{
                        backgroundColor: "#dadbde"}}
                    className={`my-element__class--style`}
                    image={morty}
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
            <Card id="target-selected"
                 raised image={this.state.currentMorty}/>

                <button onClick={this.handleRandomSelection}>Random</button>
                <button onClick={this.handleTeamCreation}>Create</button>
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
            
            <Card style={{
                        position: 'absolute',
                        top:   420,
                        left:  900,
                        }}>

                    <Image src={this.state.currentPlayerAvatar} wrapped ui={false} />
        
                        <Card.Content extra>
                  
                    </Card.Content>
                </Card>  
        </fragment>    
         </div>
        )
    }
}

