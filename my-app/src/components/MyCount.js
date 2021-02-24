import { React,Component } from "react";

export default class MyCount extends Component{
    constructor() {
        super()
        this.state={
            count: 0
        }
        this.UpdateCount = this.UpdateCount.bind(this)
    }

    UpdateCount(){
        this.setState((prevState)=>{
            return{
                count:prevState.count + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.UpdateCount}>
                    Change!
                </button>
            </div>
        )
    }
}