import React from 'react'


export default class NewUser extends React.Component{
    render(){
        return(
            <div>
               
                    <div>
                        Create a new Rick
                        <br></br>
                    <input onChange={this.props.handleUser} placeholder="Rick name..."></input>
                    <input onChange={this.props.handleAge} placeholder="Rick age..."></input>
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        Create first Morty
                        <br></br>

                    <input onChange={this.props.handleMortyName} placeholder="Morty name..."></input>
                    <br></br>
                    <br></br>
                    <button onClick={this.props.handleNewUserCreationSubmit}> Create!</button>
                    </div>
                
            </div>
        )
    }
}