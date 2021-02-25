// Logger.js
import React, { Component } from 'react'

export default class Logger extends Component{

    constructor() {
        super()
        this.state = {
            logStatus:true
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
                        this.state.logStatus ? <p>Logged In!</p>: <p>Logged out!</p>
                    }
                </p>
                <br/>
                <br/>
                <button onClick={this.handleClick} style={{color:this.state.logStatus ? "red" : "green" }}>
                    Click to { 
                        this.state.logStatus ? <p>Logout!</p>: <p>LogIn!</p>
                    }
                </button>
            </div>
        )
    }
}