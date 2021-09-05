// Fetcher.js
import { React,Component } from "react";

export default class Fetcher extends Component{
    constructor() {
        super()
        this.state = {
            loading:false,
            character:null
        }
        this.fetchJoke = this.fetchJoke.bind(this)
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                loading: false,
                character: data.value
            })
        })
    }

    fetchJoke(){
        this.setState({loading:true})
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                loading: false,
                character: data.value
            })
        })
    }
    

    render(){
        const text = this.state.loading ? "loading...":this.state.character
        return(
            <div className="fetcher">
                <p>Jokes are {text}</p>
                
                <button onClick={this.fetchJoke}>
                    Fetch Joke
                </button>
            </div>
        )
    }
}