import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'


export default class Stage extends React.Component{
    
    
    render() {
        // let t =this 
        // debugger
        return (
            <fragment>
            <div style={{
                position: 'absolute',
                top: '100px',
                left: '100px',
                backgroundImage: `url('${map}')`,
                backgroundPosition: '0, 0',
                width: '85%',
                height: '65%',}} >
               {<Rick rick={this.props.rick}/>}
               
            </div>
                <div style ={{
                     position: "absolute",
                     top:'751px',
                     left: '100px',
                     backgroundColor: "black",
                     backgroundPosition: '0, 0',
                     width: '85%',
                     height: '20%'
                        }}
                     className="Card">
                <h1>Hello</h1>
                </div>
                </fragment>
           
   
    
        )}


}