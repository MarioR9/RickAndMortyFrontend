import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'
import Morty from './Morty'
import {Container } from 'semantic-ui-react'

export default class Stage extends React.Component{
   
    render() {
        // let t =this 
        // debugger
        return (
            
            <div>
                <button onClick={this.props.handleLogOut} >LogOut</button>
                <button onClick={this.props.handleBackToProfile} >profile</button>
            <Container>
                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '100px',
                    backgroundImage: `url('${map}')`,
                    backgroundPosition: '0, 0',
                    width: '85%',
                    height: '65%',}} >
                {<Rick rick={this.props.rick} morties={this.props.morties}/>}
                </div>
                <div className="morty" style={{
                    position: 'absolute',
                    top: '-500px',
                    left: '0px',
                    width: 100
                    }} >
                <Morty/>
                </div>
                </Container>
            </div>
               
           
   
    
        )}


}