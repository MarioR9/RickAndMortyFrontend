import React from 'react'
import Spritesheet from 'react-responsive-spritesheet'
import { Card, Icon, Image } from 'semantic-ui-react'


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


let characters = [CowboyRick,DoofusRick,pickleRick,SuperFanRick,
    Beth,GunkBeth,OriginalBeth,WastelandBeth,
    GunkJerry,Jerry,OriginalJerry,WastelandJerry,
    GunkSummer,HawaiianSummer,Summer,WastelandSummer]

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty]

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
            {this.props.rick.name} 😎
            {this.props.rick.age}
          
          <Spritesheet
                className={`my-element__class--style`}
                image={characters[this.props.rick.char]}
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