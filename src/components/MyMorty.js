import React from 'react'
import { Card, Icon, Image, Progress, Button } from 'semantic-ui-react'
import AquaMorty from '../assets/Morties/profile/AquaMorty.png'
import BananaMorty from '../assets/Morties/profile/BananaMorty.png'
import BeardMorty from '../assets/Morties/profile/BeardMorty.png'
import DevilMorty from '../assets/Morties/profile/DevilMorty.png'
import ExoAlphaMorty from '../assets/Morties/profile/ExoAlphaMorty.png'
import FlamingMorty from '../assets/Morties/profile/FlamingMorty.png'
import FrozenMorty from '../assets/Morties/profile/FrozenMorty.png'
import GreaserMorty from '../assets/Morties/profile/GreaserMorty.png'
import HipsterMorty from '../assets/Morties/profile/HipsterMorty.png'
import HoboMorty from '../assets/Morties/profile/HoboMorty.png'
import MustacheMorty from '../assets/Morties/profile/MustacheMorty.png'
import NoMercyMorty from '../assets/Morties/profile/NoMercyMorty.png'
import PeaceMorty from '../assets/Morties/profile/PeaceMorty.png'
import PunkMorty from '../assets/Morties/profile/PunkMorty.png'
import RabbitMorty from '../assets/Morties/profile/RabbitMorty.png'
import RedShirtMorty from '../assets/Morties/profile/RedShirtMorty.png'
import SelfDefenseMorty from '../assets/Morties/profile/SelfDefenseMorty.png'
import SkeletonMorty from '../assets/Morties/profile/SkeletonMorty.png'
import SpookyGMorty from '../assets/Morties/profile/SpookyMorty.png'
import StrayCatMorty from '../assets/Morties/profile/StrayCatMorty.png'
import SuperRickFanMorty from '../assets/Morties/profile/SuperRickFanMorty.png'
import TestX72Morty from '../assets/Morties/profile/TestX72Morty.png'
import TheOneTrueMorty from '../assets/Morties/profile/TheOneTrueMorty.png'
import TwoCatMorty from '../assets/Morties/profile/TwoCatMorty.png'

let Morties = [DevilMorty,GreaserMorty,SuperRickFanMorty,TheOneTrueMorty,TwoCatMorty,HoboMorty,RabbitMorty,TestX72Morty,SelfDefenseMorty,NoMercyMorty,MustacheMorty,BeardMorty,HipsterMorty,RedShirtMorty,ExoAlphaMorty,PeaceMorty,SpookyGMorty,StrayCatMorty,SkeletonMorty,AquaMorty,FlamingMorty,FrozenMorty,PunkMorty,BananaMorty]

let Names = ['Devil Morty','Greaser Morty','SuperRick FanMorty','The One True Morty','Two Cat Morty','Hobo Morty','Rabbit Morty','Test X72 Morty','Self Defense Morty','No Mercy Morty','Mustache Morty','Beard Morty','Hipster Morty','Red Shirt Morty','Exo Alpha Morty','Peace Morty','Spooky Morty','Stray Cat Morty','Skeleton Morty','Aqua Morty','Flaming Morty','Frozen Morty','Punk Morty','Banana Morty']
export default class MyMorty extends React.Component{

    constructor(){
      super()
      this.state={
        food: null,
        health: null,
        level: null
      }
    }

    componentDidMount=()=>{
      this.setState({
        food: this.props.morties.filter(morty => morty.id === parseInt(this.props.currentCardMorty))[0].food,
        health: this.props.morties.filter(morty => morty.id === parseInt(this.props.currentCardMorty))[0].health,
        level: this.props.morties.filter(morty => morty.id === parseInt(this.props.currentCardMorty))[0].level,
      })
      
    }
    handleStatsFood=(e)=>{
      if(this.state.food >= 100 && this.state.health >= 100){
        this.handleStatsLevel()
      }else if(this.state.food >= 100){
        alert("Too much Food")
      }else{
       fetch(`http://localhost:3000/morties/${this.props.currentCardMorty}`,{
          method: "PATCH",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              rickID: this.props.currentRick.id,
              mortyId: parseInt(this.props.currentCardMorty),
              food: this.state.food + 5,
              health: this.state.health,
              level: this.state.level 
          //   MortyId: this.state.MortyId //hard code morty		
        })
      })
      .then(resp=>resp.json())
      .then(player=>{
        // debugger
         this.setState({
           food: player.morties.food
          })
        })
      }
      }


      handleStatsHealth=()=>{
        if(this.state.health >= 100 && this.state.food >= 100){
          this.handleStatsLevel()
        }else if(this.state.health >= 100){
          alert("Full Health")

        }
        fetch(`http://localhost:3000/morties/${this.props.currentCardMorty}`,{
            method: "PATCH",
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rickID: this.props.currentRick.id,
                mortyId: parseInt(this.props.currentCardMorty),
                food: this.state.food,
                health: this.state.health + 5,
                level: this.state.level
            //   MortyId: this.state.MortyId //hard code morty		
            })
          })
          .then(resp=>resp.json())
          .then(player=>{
            this.setState({
              health: player.morties.health
            })
          })
         }
        


        handleStatsLevel=(e)=>{
          let newFood = Math.floor(Math.random() * Math.floor(100))
          let newHealth = Math.floor(Math.random() * Math.floor(100))
          fetch(`http://localhost:3000/morties/${this.props.currentCardMorty}`,{
              method: "PATCH",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  rickID: this.props.currentRick.id,
                  mortyId: parseInt(this.props.currentCardMorty),
                  food: newFood,
                  health: newHealth,
                  level: this.state.level + 1
             		
            })
          })
              .then(resp=>resp.json())
              .then(player=>{
                this.setState({
                  food: player.morties.food,
                  health: player.morties.health,
                  level: player.morties.level
                })
              })
          
          }
    render(){
      // let t = this 
      // debugger
      
        return(
            <div>
                
                <div style={{
                        position: 'relative',
                        top:   100,
                        left:  700,
                        width: '200px',
                        height: '0px'
                        }}>
                      <Progress percent={this.state.food} warning>
                        <h3>Food  <Icon className='food'></Icon></h3>
                      </Progress>
                    </div>
                    <div style={{
                        position: 'relative',
                        top:   200,
                        left:  700,
                        width: '200px',
                        height: '0px'
                        }}>
                      <Progress percent={this.state.health} error>
                        <h3>Health <Icon className='heart'></Icon></h3>
                      </Progress>
                    </div>
                    <div style={{
                        position: 'relative',
                        top:   300,
                        left:  700,
                        width: '200px',
                        height: '0px'
                        }}>
                      <Progress percent={this.state.level} success>
                        <h3>LVL: {this.state.level} <Icon className='rebel'></Icon></h3>
                      </Progress>
                    </div>
                    <div style={{
                        position: 'relative',
                        top:   400,
                        left:  700,
                        }}>
                      <Button onClick={this.handleStatsFood}>Feed</Button>
                      <Button onClick={this.handleStatsHealth}>Heal</Button>
                      <Button onClick={()=>{this.props.handleRemoveMorty(parseInt(this.props.morties.filter(morty => morty.id === parseInt(this.props.currentCardMorty))[0].id))}} >Kill</Button>
                    </div>
                  <Card style={{
                        position: 'relative',
                        top:   90,
                        left:  300,
                        }}>

                    <Image src={Morties[this.props.morties.find(morty => morty.id === parseInt(this.props.currentCardMorty)).morty]} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{Names[this.props.morties.filter(morty => morty.id === parseInt(this.props.currentCardMorty))[0].morty]}</Card.Header>
                   
                            </Card.Content>
                     
                </Card>

                
            </div>
        )
    }
}