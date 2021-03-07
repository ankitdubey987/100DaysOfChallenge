// MyForm.js
import { React,Component } from "react";

export default class MyForm extends Component{
    constructor() {
        super()
        this.state={
            firstname:"",
            lastname:"",
            isFriendly:true,
            gender:""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event){
        const {name,value,type,checked} = event.target
        type === 'checkbox' ? this.setState({
            [name]:checked
        }):
        this.setState({
            // this only works for string type values
            // name of the inputs should be same as that of state
            [name]:value
        })
    }

    handleSubmit(){

    }

    render(){
        return(
            <div className='myform'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.firstname} name="firstname" placeholder="First name" onChange={this.handleOnChange}/>
                    <input type="text" value={this.state.lastname} name="lastname" placeholder="last name" onChange={this.handleOnChange}/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleOnChange} />
                            is Friendly
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleOnChange} />
                            male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender ==='female'}
                            onChange={this.handleOnChange} />
                            female
                    </label>
                    <h1>{this.state.firstname}</h1>
                    <h2>{this.state.lastname}</h2>
                    <h3>You're {this.state.gender}</h3>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}