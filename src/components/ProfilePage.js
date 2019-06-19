import React from 'react'
import { Card, Icon, Image,Form, Radio , Label} from 'semantic-ui-react'
import playButton from '../assets/PlayButton.png'
import Spritesheet from 'react-responsive-spritesheet'
// import rickandmortyred from '../assets/rickandmortyred.jpg'


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

export default class ProfilePage extends React.Component{
    
    
    componentDidMount(){
        //check localStorage has a token
        let token = localStorage.getItem("token")
        if(token){
          fetch("http://localhost:3000/authenticate", {
            headers: {
              "Authentication" : `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => {
            this.props.handleProfileUser(data.user,data.morties)

          })
        }
      }
    
    render(){
        // let t = this
        // debugger
        let charactersP = [CowboyRickP,DoofusRickP,pickleRickP,SuperFanRickP,
            WinnerRickP,VaporwaveRickP,RobotRickP,RickP,RickZarchezP,Rick800P,NinjaRickP,
            MysteriousRickP,KarateRickP,JohnRickP,GuiltyRickP,GreaserRickP,DudeRickP,D99RickP,
            ConstructionRickP,CommanderRickP,ChairRickP,BubbleGumRickP,AquaRickP,AlienRick2ArmsP] 
        
        let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,
            TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,
            MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,
            SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,
            PunkMorty,BananaMorty]
        let Names = ['Devil Morty','Greaser Morty','SuperRick FanMorty','The One True Morty','Two Cat Morty','Hobo Morty','Rabbit Morty','Test X72 Morty','Self Defense Morty','No Mercy Morty','Mustache Morty','Beard Morty','Hipster Morty','Red Shirt Morty','Exo Alpha Morty','Peace Morty','Spooky Morty','Stray Cat Morty','Skeleton Morty','Aqua Morty','Flaming Morty','Frozen Morty','Punk Morty','Banana Morty']
      



        const {username,age} = this.props.rick
        return(
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '0px',
                // backgroundImage: `url(${rickandmortyred})`,
                backgroundPosition: '0, 0',
                width: '100%',
                height: '100%',}}>

              
               <Card style={{
                        position: 'relative',
                        top:   90,
                        left:  300,
                        }}>

                    <Image src={charactersP[this.props.rick.avatar]} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{username}<Icon onClick={this.props.handleEditUser} className="edit" /></Card.Header>
                                <Card.Meta>
                                    <span className='date'> Age: {age}</span>
                                </Card.Meta>
                            </Card.Content>
                        <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {this.props.morties.length} Morties
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
                <button onClick={this.props.handleOnlineMode}
                        style={{
                        position: 'absolute',
                        top: 700,
                        left: 700,
                        // backgroundImage: `url('${playButton}')`,
                        backgroundPosition: '100, 100',
                        width: '90px',
                        height: '90px',}} >ONLINE!</button>
                        <div style={{
                        position: 'absolute',
                        top: 700,
                        left: 800}}>
                        <Form>
                            <Form.Field>
                            Selected value: <b>{this.props.value}</b>
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Easy Mode'
                                name='radioGroup'
                                value='Easy Mode 🤪'
                                checked={this.props.value === 'Easy Mode 🤪'}
                                onChange={this.props.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Hard Mode'
                                name='radioGroup'
                                value='Hard Mode! 😱'
                                checked={this.props.value === 'Hard Mode! 😱'}
                                onChange={this.props.handleChange}
                            />
                            </Form.Field>
                        </Form>
                    </div>
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
                             
                   {this.props.morties.map(morty => <Card id={morty.id} onClick={this.props.handleMortyPage} 
                    > <Spritesheet
                     style={{
                        backgroundColor: "#f94b17"}}
                     className={`my-element__class--style`}
                     image={Morties[morty.morty]}
                     widthFrame={128}
                     heightFrame={159}
                     steps={4}
                     fps={5}
                     autoplay={true}
                     loop={true}
                     /> 
                     <Label as='a' basic color='red' pointing>
                        {Names[morty.morty]}
                        </Label>
                        <Label as='a' basic color='blue'>
                        Level: {morty.level}
                    </Label>
                     
                     
                     </Card>)}
                   
                </Card.Group>
                
                </div>

            </div>
        )
    }
}


