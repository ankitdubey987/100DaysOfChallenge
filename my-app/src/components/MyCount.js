import { React,Component } from "react";

export default class MyCount extends Component{
    constructor() {
        super()
        this.state={
            count: 0
        }
        this.UpdateCount = this.UpdateCount.bind(this)
        this.halfMeOnClick = this.halfMeOnClick.bind(this)
        this.doubleMeOnClick = this.doubleMeOnClick.bind(this)
    }

    UpdateCount(){
        this.setState((prevState)=>{
            return{
                count:prevState.count + 1
            }
        })
    }

    doubleMeOnClick(){
        this.setState((prevState)=>{
            return {
                count:prevState.count * 2 
            }
        })
    }

    halfMeOnClick(){
        this.setState((prevState)=>{
            return{
                count:(prevState.count / 2)
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseOver={this.doubleMeOnClick} onClick={this.UpdateCount}>
                    Change!
                </button>
                <button onClick={this.doubleMeOnClick}>
                    Double me!
                </button>
                <button onClick={this.halfMeOnClick}>
                    Half me!
                </button>
            </div>
        )
    }
}