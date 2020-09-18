import React from 'react'
import Spritesheet from 'react-responsive-spritesheet'


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

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]




export default class Morty extends React.Component{
    render(){
        return(
            <div>
               <div> 
  
          <Spritesheet
                className={`my-element__class--style`}
                image={Morties[this.props.currentMorty]}
                widthFrame={128}
                heightFrame={159}
                steps={4}
                fps={6}
                autoplay={true}
                loop={true}/>
                
             </div >
             </div>
        )
    }
}

