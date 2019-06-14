import React from 'react'
import morty from '../assets/mortysprite.png'
import Spritesheet from 'react-responsive-spritesheet'

export default class Morty extends React.Component{
    render(){
        // let t = this 
        // debugger
        return(
            <div>
                <div style={{
                        position: 'absolute',
                        top:   520,
                        left:  0}}>
                <Spritesheet
                        className={`my-element__class--style`}
                        image={morty}
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
             </div>
        )
    }
}