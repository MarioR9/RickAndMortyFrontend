import React from 'react'
import Spritesheet from 'react-responsive-spritesheet'
import { Card,Button,Label} from 'semantic-ui-react'


import CowboyRick from '../assets/Ricks/walkingSprites/CowboyRick.png'
import DoofusRick from '../assets/Ricks/walkingSprites/DoofusRick.png'
import pickleRick from '../assets/Ricks/walkingSprites/pickleRick.png'
import SuperFanRick from '../assets/Ricks/walkingSprites/SuperFanRick.png'
import WinnerRick from '../assets/Ricks/walkingSprites/WinnerRick.png'
import VaporwaveRick from '../assets/Ricks/walkingSprites/VaporwaveRick.png'
import RobotRick from '../assets/Ricks/walkingSprites/RobotRick.png'
import Rick1 from '../assets/Ricks/walkingSprites/Rick.png'
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
    WinnerRick,VaporwaveRick,RobotRick,Rick1,RickZarchez,Rick800,NinjaRick,
    MysteriousRick,KarateRick,JohnRick,GuiltyRick,GreaserRick,DudeRick,D99Rick,
    ConstructionRick,CommanderRick,ChairRick,BubbleGumRick,AquaRick,AlienRick2Arms] 

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,
    HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,
    HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,
    AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]

    let Names = ['Devil Morty','Greaser Morty','SuperRick FanMorty','The One True Morty','Two Cat Morty','Hobo Morty','Rabbit Morty','Test X72 Morty','Self Defense Morty','No Mercy Morty','Mustache Morty','Beard Morty','Hipster Morty','Red Shirt Morty','Exo Alpha Morty','Peace Morty','Spooky Morty','Stray Cat Morty','Skeleton Morty','Aqua Morty','Flaming Morty','Frozen Morty','Punk Morty','Banana Morty']


    


export default class Rick extends React.Component{
        constructor(){
            super()
            this.state={
                movey: 0,
                movex: 0
            }
        }

        componentDidMount=()=>{
            document.addEventListener('keydown', this.rickMovement)
            this.setState({
                mortyx: this.props.mortyx,
                mortyy: this.props.mortyy
                
            })
            
        }
        handleCollision=()=>{
            let MortyLocations= [
                //bottom approach
                [this.props.mortyx, this.props.mortyy]
                ,[this.props.mortyx, this.props.mortyy - 5]
                ,[this.props.mortyx, this.props.mortyy - 10]
                ,[this.props.mortyx, this.props.mortyy - 15]
                ,[this.props.mortyx, this.props.mortyy - 20]
                ,[this.props.mortyx, this.props.mortyy - 25]

                ,[this.props.mortyx, this.props.mortyy]
                ,[this.props.mortyx, this.props.mortyy + 5]
                ,[this.props.mortyx, this.props.mortyy + 10]
                ,[this.props.mortyx, this.props.mortyy + 15]
                ,[this.props.mortyx, this.props.mortyy + 20]
                ,[this.props.mortyx, this.props.mortyy + 25]
                //top approach
                ,[this.props.mortyx, this.props.mortyy]
                ,[this.props.mortyx + 5, this.props.mortyy ]
                ,[this.props.mortyx + 10, this.props.mortyy ]
                ,[this.props.mortyx + 15, this.props.mortyy ]
                ,[this.props.mortyx + 20, this.props.mortyy ]
                ,[this.props.mortyx + 25, this.props.mortyy ]
                ,[this.props.mortyx + 30, this.props.mortyy ]
                ,[this.props.mortyx + 25, this.props.mortyy ]
                
                ,[this.props.mortyx, this.props.mortyy]
                ,[this.props.mortyx - 5, this.props.mortyy ]
                ,[this.props.mortyx - 10, this.props.mortyy ]
                ,[this.props.mortyx - 15, this.props.mortyy ]
                ,[this.props.mortyx - 20, this.props.mortyy ]
                ,[this.props.mortyx - 25, this.props.mortyy ]
                ,[this.props.mortyx - 30, this.props.mortyy ]
                ,[this.props.mortyx - 25, this.props.mortyy ]
                
                
                ,[this.props.mortyx , this.props.mortyy]
                ,[this.props.mortyx + 5 , this.props.mortyy + 5]
                ,[this.props.mortyx + 10 , this.props.mortyy + 10]
                ,[this.props.mortyx + 15, this.props.mortyy + 15]
                ,[this.props.mortyx + 20, this.props.mortyy + 20]
                ,[this.props.mortyx + 25 , this.props.mortyy + 25]
           
                ,[this.props.mortyx , this.props.mortyy]
                ,[this.props.mortyx - 5 , this.props.mortyy - 5]
                ,[this.props.mortyx - 10 , this.props.mortyy - 10]
                ,[this.props.mortyx - 15, this.props.mortyy - 15]
                ,[this.props.mortyx - 20, this.props.mortyy - 20]
                ,[this.props.mortyx - 25 , this.props.mortyy - 25]
               
              
                
            
       
                                ]
                           
            let rickLocation = [[this.state.movey , this.state.movex]]                      
                       
            if(MortyLocations.find(loc => loc.includes(rickLocation[0][0]) && loc.includes(rickLocation[0][1]))){
            console.log("Collision!")
             if(this.props.renderNewMorty === true){
                this.props.handleMortyLocation()
             }   
            
            return(
       
                <div class="bg-modal" style={{display: 'flex'}}>
                   <div class="modal-contents">
                   <Button onClick={()=>{this.props.handleNewMorty(this.props.currentMorty)}}>Catch</Button>
                   <Button onClick={()=>{this.props.handleMortyLocation()}}>!Pass</Button>

                   <Card style={{
                    position: 'absolute',
                    top: 70,
                    left: 185,
                    width: 120}} >
                        <Spritesheet 
                    style={{
                    backgroundColor: "black"}}
                    className={`my-element__class--style`}
                    image={Morties[this.props.currentMorty]}
                    widthFrame={128}
                    heightFrame={159}
                    steps={4}
                    fps={6}
                    autoplay={true}
                    loop={true}
                        />  
                        
                        <Label as='a' basic color='red' pointing>
                        {Names[this.props.currentMorty]}
                        
                    </Label>
                        </Card>
                       
                    
                          
                      
                   </div>
               </div>
                )
                
        }
    }
    
    rickMovement=(event)=>{
   
        this.handleCollision()
        if(event.key === "d"){
        this.setState({
            movex: this.state.movex + 5
        })
        }else if(event.key === "a"){
            this.setState({
            movex: this.state.movex - 5
            })
        }else if(event.key === "s"){
            
              this.setState({
                  movey: this.state.movey +5
              })  
        }else if(event.key === "w"){
            this.setState({
                movey: this.state.movey - 5
            }) 
        }
    }
    render(){
// let t = this
// debugger
        return(
    <div>
        {this.handleCollision()}
        <div>
        <div style={{
            position: 'absolute',
            top:   this.state.movey,
            left:  this.state.movex,
            width: '80px'
                
            }}> 
             <Label as='a' color='tile' image>
            {/* <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' /> */}
            {this.props.rick.username} 😎
            {this.props.rick.age}
            </Label>
          
          <Spritesheet
    
                className={`my-element__class--style`}
                image={characters[this.props.rick.avatar]}
                widthFrame={128}
                heightFrame={159}
                steps={4}
                fps={6}
                autoplay={true}
                loop={true}
                />
                
             </div >

             <Card.Group 
                style={{
                    position: 'absolute',
                    top: 600,
                    left: 20,
                    width: 1200}}
                itemsPerRow={10}>
                   {this.props.morties.map(morty => 
                   <Card onClick={()=>{this.props.handleRemoveMorty(morty.id)}} >
                    <Spritesheet 
                    style={{
                    backgroundColor: "#b33cf5"}}
                    className={`my-element__class--style`}
                    image={Morties[morty.morty]}
                    widthFrame={128}
                    heightFrame={159}
                    steps={4}
                    fps={6}
                    autoplay={true}
                    loop={true}
                    onMouseEnter={spritesheet => {
                        spritesheet.play();
                      }}
                      onMouseLeave={spritesheet => {
                        spritesheet.pause();
                      }}/>

                        <Label as='a' basic color='purple' pointing>
                        {Names[morty.morty]}
                        </Label>
                         
                     </Card>)}
                </Card.Group>
            </div>
         </div>

        )
    }
}
