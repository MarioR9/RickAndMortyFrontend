import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'


export default class Stage extends React.Component{
    
    
    render() {
        // let t =this 
        // debugger
        return (
            
            <div style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundImage: `url('${map}')`,
                backgroundPosition: '0, 0',
                width: '100%',
                height: '100%',}} >
               {<Rick rick={this.props.rick}/>}
               
            </div>
              
           
   
    
        )}


}