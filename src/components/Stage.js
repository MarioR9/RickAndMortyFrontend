import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'
import Morty from './Morty'



export default class Stage extends React.Component{
        constructor(){
            super()
            this.state ={
                mortyLocationy: Math.floor(Math.random() * Math.floor(1550)),
                mortyLocationx: Math.floor(Math.random() * Math.floor(300)),
                currentMorty: 0,
            }

            this.myDiv = React.createRef()
        }
        componentDidMount () {
            console.log(this.myDiv.current.offsetHeight)
            console.log(this.myDiv.current.offsetWidth)

          }
    


        handleMortyLocation=()=>{
            this.setState({
                mortyLocationy: Math.floor(Math.random() * Math.floor(1550)),
                mortyLocationx: Math.floor(Math.random() * Math.floor(300)),
                currentMorty: Math.floor(Math.random() * Math.floor(23))
            })
        }

       
      
    render() {
        
        return (
            
            <div>
             
                

                <button onClick={this.props.handleBackToProfile} >profile</button>
        
               
                <div  ref={this.myDiv}  onClick={this.handleMortyLocation} style={{
                    position: 'absolute',
                    top: '100px',
                    left: '100px',
                    backgroundImage: `url(${map})`,
                    backgroundPosition: '0, 0',
                    width: '85%',
                    height: '65%',}} >
                   
                {<Rick rick={this.props.rick} morties={this.props.morties}/>}
                <div  onClick={this.handleLocations} className="morty" style={{
                    position: 'relative',
                    top: this.state.mortyLocationx,
                    left: this.state.mortyLocationy,
                    width: 60
                    }} >
                    <Morty currentMorty={this.state.currentMorty}/>
                </div>
                </div>
                
                
                



            </div>
               
           
   
    
        )}


}

