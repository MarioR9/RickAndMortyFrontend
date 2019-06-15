import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'
import Morty from './Morty'

export default class Stage extends React.Component{
    
    
    render() {
        // let t =this 
        // debugger
        return (
            
            <div>
                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '100px',
                    backgroundImage: `url('${map}')`,
                    backgroundPosition: '0, 0',
                    width: '85%',
                    height: '65%',}} >
                {<Rick rick={this.props.rick}/>}


                <div className="morty" style={{
                    position: 'absolute',
                    top: '-500px',
                    left: '0px',
                    }} >
                <Morty/>
                </div>
                
                </div>

                
            </div>
               
           
   
    
        )}


}