import React from 'react'
import Spritesheet from 'react-responsive-spritesheet'
import { Card } from 'semantic-ui-react'


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
    Beth,GunkBeth,OriginalBeth,WastelandBeth,
    GunkJerry,Jerry,OriginalJerry,WastelandJerry,
    GunkSummer,HawaiianSummer,Summer,WastelandSummer]

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]

export default class Rick extends React.Component{
    constructor(){
        super()
        this.state={
            movex: 0,
            movey: 0
        }
    }
    componentDidMount=()=>{
        document.addEventListener('keydown', this.rickMovement)
        
    }
    
    rickMovement=(event)=>{
       console.log(event.key)
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
    <fragment>  
        <div>
        <div style={{
            position: 'absolute',
            top:   this.state.movey,
            left:  this.state.movex,
            width: '90px'
                
            }}> 
            {this.props.rick.username} 😎
            {this.props.rick.age}
          
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
                    width: 800}}
                itemsPerRow={6}>
                   {this.props.rick.morties.map(morty => 
                   <Card raised image={
                    <Spritesheet 
                    style={{
                    backgroundColor: "#dadbde"}}
                    className={`my-element__class--style`}
                    image={Morties[morty.morty]}
                    widthFrame={128}
                    heightFrame={159}
                    steps={4}
                    fps={6}
                    autoplay={true}
                    loop={true}
                    />       
                       }               
                                                             
                     />)}
                </Card.Group>
         </div>
            </fragment>

        )
    }
}
// width: '128px',
//             height: '159px',}}  
            

// spritesheetfullsize 
// width: '520px',
// height: '500px',

/* <Spritesheet
                className={`my-element__class--style`}
                image={rick}
                widthFrame={128}
                heightFrame={159}
                steps={4}
                fps={6}
                autoplay={true}
                loop={true}
                onMouseEnter={spritesheet => {
                    spritesheet.play()
                }}
                onMouseLeave={spritesheet => {
                    spritesheet.pause()
                }}/>      */