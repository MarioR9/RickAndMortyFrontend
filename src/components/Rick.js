import React from 'react'
import rick from '../assets/rickmovef.png'
import Spritesheet from 'react-responsive-spritesheet'
import Morty from './Morty'

export default class Rick extends React.Component{
    constructor(){
        super()
        this.state={
            movex: 0,
            movey: 0
        }
    }
    componentDidMount=()=>{
        document.addEventListener('keydown', this.rickMovement,this.loadImage)
        
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
            left:  this.state.movex}}>
          
          <Spritesheet
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
                }}/>
                
             </div>
             <div>
                {this.props.rick.morties.map(rick => <Morty/>)}
            </div>
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