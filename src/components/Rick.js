import React from 'react'
import pickleRick from '../assets/Ricks/walkingSprites/pickleRick.png'
import Spritesheet from 'react-responsive-spritesheet'
import DevilMorty from '../assets/Morties/walkingSprites/DevilMorty.png'
import { Card, Icon, Image } from 'semantic-ui-react'



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
            width: '130px'
                
            }}> 
            {this.props.rick.name} 😎
            {this.props.rick.age}
          
          <Spritesheet
                className={`my-element__class--style`}
                image={pickleRick}
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
                }}/>
                
             </div >
             <Card.Group 
                        style={{
                            position: 'absolute',
                            top: 500,
                            left: 20}}
                        itemsPerRow={6}>
                   {this.props.rick.morties.map(morty => 
                   <Card raised image={
                    <Spritesheet
                    className={`my-element__class--style`}
                    image={DevilMorty}
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