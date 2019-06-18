import React from 'react'
import { Card, Icon, Image, Progress, Button } from 'semantic-ui-react'
import theOne from '../assets/Morties/profile/TheOneTrueMorty.png'


export default class MyMorty extends React.Component{

    constructor(){
      super()
      this.state={
        food: 1,
        health: 1,
        level: 0
      }
    }

    handleFoodLvL=()=>{
      this.setState({
        food: this.state.food + 5
      })
    }
    handleHealth=()=>{
      this.setState({
        health: this.state.health + 15
      })
    }
    render(){
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
                        <h3>Food {this.state.food} <Icon className='food'></Icon></h3>
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
                        <h3>Health {this.state.health} <Icon className='heart'></Icon></h3>
                      </Progress>
                    </div>
                    <div style={{
                        position: 'relative',
                        top:   300,
                        left:  700,
                        width: '200px',
                        height: '0px'
                        }}>
                      <Progress percent={20} success>
                        <h3>to LvL 2<Icon className='rebel'></Icon></h3>
                      </Progress>
                    </div>
                    <div style={{
                        position: 'relative',
                        top:   400,
                        left:  700,
                        }}>
                      <Button onClick={this.handleFoodLvL}>Feed</Button>
                      <Button onClick={this.handleHealth}>Heal</Button>
                      <Button >Kill</Button>
                    </div>
                  <Card style={{
                        position: 'relative',
                        top:   90,
                        left:  300,
                        }}>

                    <Image src={theOne} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>The one True Morty</Card.Header>
                                <Card.Meta>
                                    <span className='date'> lvl: 10</span>
                                </Card.Meta>
                            </Card.Content>
                        <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        1 Morty
                    </a>
                    </Card.Content>
                </Card>

                
            </div>
        )
    }
}