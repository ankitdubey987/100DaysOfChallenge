// Fetcher.js
import { React,Component } from "react";

export default class Fetcher extends Component{
    constructor() {
        super()
        this.state = {
            loading:false,
            character:[]
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        
        setInterval(
            fetch("https://api.chucknorris.io/jokes/random")
            .then(res=>res.json())
            .then(data=>{
                this.setState((prevState=>{
                    return{
                        loading: false,
                        character: data.value
                    }
                }))
            }),150
        )
    }

    render(){
        const text = this.state.loading ? "loading...":this.state.character
        return(
            <div className="fetcher">
                Jokes are {text}
            </div>
        )
    }
}