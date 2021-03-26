import React, { Component } from 'react'

export default class Counter extends Component {

state = {
    num: 0
}

handleClick(event){

    this.setState((state) => (
        {num: state.num + 1}
    ))
}
    render() {
        return (
            <div>
                <button value="input" onClick={(event) => this.handleClick(event)}>{this.state.num}</button>
            </div>
        )
    }
}
