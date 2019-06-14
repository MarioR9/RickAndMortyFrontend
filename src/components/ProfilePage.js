import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import pickeProfile from '../assets/pickeProfile.png'
import playButton from '../assets/PlayButton.png'
import mortySprite from '../assets/mortysprite.png'
import Spritesheet from 'react-responsive-spritesheet'



export default class ProfilePage extends React.Component{
    

    render(){
        const {name,age,morties} = this.props.rick
        return(
            <div>
               <Card style={{
                        position: 'relative',
                        top:   90,
                        left:  300}}>

                    <Image src={pickeProfile} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{name} Rick</Card.Header>
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
                        onClick={this.props.handlePlayMode}>Play
                        
                </button>

                <Card.Group 
                        style={{
                            position: 'absolute',
                            top: 200,
                            left: 600}}
                        itemsPerRow={6}>
                   {morties.map(morty => <Card raised image={
                                                             <Spritesheet
                                                             className={`my-element__class--style`}
                                                             image={mortySprite}
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
        )
    }
}