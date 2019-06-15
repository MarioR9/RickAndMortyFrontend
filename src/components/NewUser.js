import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Spritesheet from 'react-responsive-spritesheet'
import CowboyRickWalking from '../assets/Ricks/walkingSprites/CowboyRickWalking.png'
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
import GreaserMortyWalking from '../assets/Morties/walkingSprites/GreaserMortyWalking.png'
import SuperRickFanMorty from '../assets/Morties/walkingSprites/SuperRickFanMorty.png'
import TheOneTrueMorty from '../assets/Morties/walkingSprites/TheOneTrueMorty.png'
import TwoCatMortyWalking from '../assets/Morties/walkingSprites/TwoCatMortyWalking.png'

export default class NewUser extends React.Component{
    render(){

        let ricks = [CowboyRickWalking,DoofusRick,pickleRick,SuperFanRick,
                    Beth,GunkBeth,OriginalBeth,WastelandBeth,
                    GunkJerry,Jerry,OriginalJerry,WastelandJerry,
                    GunkSummer,HawaiianSummer,Summer,WastelandSummer]
        let Morties = [DevilMorty,GreaserMortyWalking,SuperRickFanMorty,TheOneTrueMorty,TwoCatMortyWalking]
       
       
        return(
            <div>
                <div>
                <h1 style={{
                                position: 'relative',
                                top: 100,
                                left: 100}}>Choose Your Character</h1>
                <Card.Group 
                            style={{
                                position: 'relative',
                                top: 100,
                                left: 100,
                                width: 1300
                                }}
                            itemsPerRow={6}>
                   {ricks.map((rick,index) =>  
                    <Card onClick={()=>{console.log("clicked")}} id="target-selected" key={index} raised image={
                    <Spritesheet 
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
                                width: 1300
                                }}
                            itemsPerRow={6}>
                   {Morties.map((morty,index)=>  
                    <Card key={`morty${index}`} id="target-selected" raised image={
                    <Spritesheet 
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
             
                </div>)}
              
               
            </div>
        )
    }
}


{/* <div>
                        Create a new Rick
                        <br></br>
                    <input onChange={this.props.handleUser} placeholder="Rick name..."></input>
                    <input onChange={this.props.handleAge} placeholder="Rick age..."></input>
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        Create first Morty
                        <br></br>

                    <input onChange={this.props.handleMortyName} placeholder="Morty name..."></input>
                    <br></br>
                    <br></br>
                    <button onClick={this.props.handleNewUserCreationSubmit}> Create!</button>
                    </div>
                 */}