import React, { Fragment } from 'react'
import { Card, Input ,Container } from 'semantic-ui-react'
import Spritesheet from 'react-responsive-spritesheet'

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
            PlayerAge: ""
            
    
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
                RickId: selected
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

    handleTeamCreating=(e)=>{
        console.log(e)
        let t= this 
    fetch('http://localhost:3000/ricks',{
	      method: "POST",
		  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.PlayerName,
          age: this.state.PlayerAge,
          char: this.state.RickId,
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
                    fps={7}
                    autoplay={true}
                    loop={true}
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
                    fps={7}
                    autoplay={true}
                    loop={true}
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
                <button onClick={this.handleTeamCreating}>Create</button>
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
            <br></br>
            <Input onChange={this.handlePlayerAge} type="text" placeholder="Age..."></Input>
            </div>
        </fragment>    
         </div>
        )
    }
}

