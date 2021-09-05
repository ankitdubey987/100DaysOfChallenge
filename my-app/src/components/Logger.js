// Logger.js
import React, { Component } from 'react'

export default class Logger extends Component{

    constructor() {
        super()
        this.state = {
            logStatus:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prevState)=>{
            return {
                // always returns a object 
                logStatus: !prevState.logStatus
            }
        })
    }

    render(){
        return(
            <div className='logger'>
                <p>User is 
                    { 
                        this.state.logStatus ? "Logged In!": "Logged out!"
                    }
                </p>
                <br/>
                <br/>
                <button onClick={this.handleClick} style={{color:this.state.logStatus ? "red" : "green" }}>
                    Click to { 
                        this.state.logStatus ? "LogOut!": "LogIn!"
                    }
                </button>
            </div>
        )
    }
}