import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import playButton from '../assets/PlayButton.png'
import Spritesheet from 'react-responsive-spritesheet'

import CowboyRick from '../assets/Ricks/Profile/CowboyRick.png'
import DoofusRick from '../assets/Ricks/Profile/DoofusRick.png'
import pickleRick from '../assets/Ricks/Profile/pickleRick.png'
import SuperFanRick from '../assets/Ricks/Profile/SuperFanRick.png'

import Beth from '../assets/Bed/profile/Beth.png'
import GunkBeth from '../assets/Bed/profile/GunkBeth.png'
import OriginalBeth from '../assets/Bed/profile/OriginalBeth.png'
import WastelandBeth from '../assets/Bed/profile/WastelandBeth.png'

import GunkJerry from '../assets/jerry/profile/GunkJerry.png'
import Jerry from '../assets/jerry/profile/Jerry.png'
import OriginalJerry from '../assets/jerry/profile/OriginalJerry.png'
import WastelandJerry from '../assets/jerry/profile/WastelandJerry.png'

import GunkSummer from '../assets/summer/profile/GunkSummer.png'
import HawaiianSummer from '../assets/summer/profile/HawaiianSummer.png'
import Summer from '../assets/summer/profile/Summer.png'
import WastelandSummer from '../assets/summer/profile/WastelandSummer.png' 

import DevilMorty from '../assets/Morties/walkingSprites/DevilMorty.png'
import GreaserMorty from '../assets/Morties/walkingSprites/GreaserMorty.png'
import SuperRickFanMorty from '../assets/Morties/walkingSprites/SuperRickFanMorty.png'
import TheOneTrueMorty from '../assets/Morties/walkingSprites/TheOneTrueMorty.png'
import TwoCatMorty from '../assets/Morties/walkingSprites/TwoCatMorty.png'



export default class ProfilePage extends React.Component{
    
    render(){
        let t = this
        let characters = [CowboyRick,DoofusRick,pickleRick,SuperFanRick,
            Beth,GunkBeth,OriginalBeth,WastelandBeth,
            GunkJerry,Jerry,OriginalJerry,WastelandJerry,
            GunkSummer,HawaiianSummer,Summer,WastelandSummer]
        
        let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty]
        
        const {name,age,morties} = this.props.rick
        return(
            <div>
               <Card style={{
                        position: 'relative',
                        top:   90,
                        left:  300,
                        }}>

                    <Image src={characters[this.props.rick.char]} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'> Age: {age}</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                        <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {morties.length} Morties
                    </a>
                    </Card.Content>
                </Card>
    
                <button  id="play-button" style={{
                        position: 'absolute',
                        top: 700,
                        left: 600,
                        backgroundImage: `url('${playButton}')`,
                        backgroundPosition: '100, 100',
                        width: '90px',
                        height: '90px',}}
                        onClick={this.props.handlePlayMode}>
                        
                </button>
                <div style={{
                            position: 'absolute',
                            top: 90,
                            left: 700}}>
                        <h1>My Morties</h1>
                <Card.Group 
                        style={{
                            position: 'absolute',
                            top: 40,
                            left: 0,
                            width: 700}}
                        itemsPerRow={6}>
                   {morties.map(morty => <Card raised image={
                    
                             <Spritesheet
                             className={`my-element__class--style`}
                             image={Morties[morty.morty]}
                             widthFrame={128}
                             heightFrame={159}
                             steps={4}
                             fps={5}
                             autoplay={true}
                             loop={true}
                             />}
                     />)}
                </Card.Group>
                </div>

            </div>
        )
    }
}