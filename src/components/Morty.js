import React from 'react'
import GreaserMortyWalking from '../assets/Morties/walkingSprites/GreaserMortyWalking.png'
import Spritesheet from 'react-responsive-spritesheet'

export default class Morty extends React.Component{
    render(){
        // let t = this 
        // debugger
        return(
            <div>
               <div style={{
            position: 'absolute',
            top:   window.innerWidth/2,
            left:  window.innerHeight/2,
            width: '130px'
                
            }}> 
  
          <Spritesheet
                className={`my-element__class--style`}
                image={GreaserMortyWalking}
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
             </div>
        )
    }
}

// <div style={{
//     position: 'absolute',
//     top:   520,
//     left:  0,
//         backgroundColor: "black",
//         // backgroundImage: `url(https://images.template.net/wp-content/uploads/2015/08/Dark-Backgrounds.png)`,
//         backgroundPosition: '0, 0',
//         width: '100%',
//         height: '20%',}}>


// </div>