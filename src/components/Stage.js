import React from 'react'
import Rick from './Rick'
import Morty from './Morty'
import rickandmortyred from '../assets/rickandmortyred.jpg'
import map2 from '../assets/alien_planet_png_27989.png'


let x = Math.floor(Math.random() * Math.floor(600))
let y = Math.floor(Math.random() * Math.floor(200))
export default class Stage extends React.Component{
        constructor(){
            super()
            this.state ={
                mortyLocationx: Math.ceil(y/5)*5,
                mortyLocationy: Math.ceil(x/5)*5,
                currentMorty: 0,
                mortyoffsetx: 0,
                mortyoffsety: 0,
                mapX: 0,
                mapy: 0,
                currentMortyToCatch: Math.floor(Math.random() * Math.floor(23))
            }

            this.myDiv = React.createRef()
        }
        componentDidMount () {
            console.log(this.myDiv.current.offsetHeight)
            console.log(this.myDiv.current.offsetWidth)

          }
    


        handleMortyLocation=()=>{
            let x = Math.floor(Math.random() * Math.floor(600))
            let y = Math.floor(Math.random() * Math.floor(200))
            this.setState({
                mortyLocationy: Math.ceil(x/5)*5,
                mortyLocationx: Math.ceil(y/5)*5,
                currentMorty: Math.floor(Math.random() * Math.floor(23)),
               
            })
            this.props.handleRenderMortyToFalse()
        }


      
    render() {
        
        return (
            
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '0px',
                backgroundImage: `url(${rickandmortyred})`,
                backgroundPosition: '0, 0',
                width: '100%',
                height: '100%',}}>

                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '100px',
                    backgroundImage: `url(${map2})`,
                    backgroundPosition: '0, 0',
                    width: '87%',
                    height: '80%',}} >
                   
                {<Rick renderNewMorty={this.props.renderNewMorty} handleMortyLocation={this.handleMortyLocation} handleRemoveMorty={this.props.handleRemoveMorty} newMorty={this.props.newMorty} handleNewMorty={this.props.handleNewMorty} currentMorty={this.state.currentMorty} mortyoffsetx={this.state.mortyoffsetx} mortyoffsety={this.state.mortyoffsety} mortyx={this.state.mortyLocationx} mortyy={this.state.mortyLocationy} rick={this.props.rick} morties={this.props.morties}/>}
                <div  ref={this.myDiv} onClick={this.handleLocations} className="morty" style={{
                    position: 'relative',
                    top: this.state.mortyLocationx,
                    left: this.state.mortyLocationy,
                    width: 65
                    }} >
                    
                    <Morty currentMorty={this.state.currentMorty}/>
                </div>
                </div>
                
            </div>
        )}
}

