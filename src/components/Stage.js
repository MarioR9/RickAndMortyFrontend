import React from 'react'
import Rick from './Rick'
import map from '../assets/testMap.png'
import Morty from './Morty'
import galaxy from '../assets/rickandmortygalaxy.png'


export default class Stage extends React.Component{
        constructor(){
            super()
            this.state ={
                mortyLocationx: Math.floor(Math.random() * Math.floor(1550)),
                mortyLocationy: Math.floor(Math.random() * Math.floor(300)),
                currentMorty: 0,
                mortyoffsetx: 0,
                mortyoffsety: 0,
                currentMortyToCatch: <Morty/>
            }

            this.myDiv = React.createRef()
        }
        componentDidMount () {
            console.log(this.myDiv.current.offsetHeight)
            console.log(this.myDiv.current.offsetWidth)

          }
    


        handleMortyLocation=()=>{
            let x = Math.floor(Math.random() * Math.floor(1550))
            let y = Math.floor(Math.random() * Math.floor(300))
            this.setState({
                mortyLocationy: Math.ceil(x/5)*5,
                mortyLocationx: Math.ceil(y/5)*5,
                currentMorty: Math.floor(Math.random() * Math.floor(23)),
                mortyoffsetx: this.myDiv.current.offsetWidth,
                mortyoffsety: this.myDiv.current.offsetHeight
            })
        }


      
    render() {
        
        return (
            
            <div >
               
                <div   onClick={this.handleMortyLocation} style={{
                    position: 'absolute',
                    top: '100px',
                    left: '0px',
                    backgroundImage: `url(${map})`,
                    backgroundPosition: '0, 0',
                    width: '100%',
                    height: '65%',}} >
                   
                {<Rick handleRemoveMorty={this.props.handleRemoveMorty} newMorty={this.props.newMorty} handleNewMorty={this.props.handleNewMorty} currentMorty={this.state.currentMorty} mortyoffsetx={this.state.mortyoffsetx} mortyoffsety={this.state.mortyoffsety} mortyx={this.state.mortyLocationx} mortyy={this.state.mortyLocationy} rick={this.props.rick} morties={this.props.morties}/>}
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

