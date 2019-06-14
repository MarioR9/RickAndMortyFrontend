import React from 'react'

export default class ProfilePage extends React.Component{
    

    render(){
        const {name,age,morties} = this.props.rick
        return(
            <div>
                <h1>Name: {name}</h1>
                <h3>age: {age}</h3>
                {morties.map(morty => <div>morty name: {morty.name}</div>)}
                <button onClick={this.props.handlePlayMode}>Play</button>
            </div>
        )
    }
}