import {React,Component} from "react"
import './App.css';
import Todo from './components/Todo'
import  products  from "./productsData";
import  MyCount  from "./components/MyCount";


class App extends Component{

  constructor(){
    super()
    this.state = {
      answer:"Yes"
    }
  }

  render() {
    let allTodos = products.map((item)=>{
      return <Todo key={item.id} item={item}/>
    })
    return (
      <div>
        <h1>Code goes here {this.state.answer}</h1>
        <MyCount />
        <Age />
        <Login />
        <MyApp todos={allTodos}/>
      </div>
    )
  }
}

class Age extends Component{
  constructor(){
    super()
    this.state={
      name:"Ankit",
      age:23
    }
  }

  render(){
    return(
      <div>
        <p>name is {this.state.name}</p>
        <p>age is {this.state.age}</p>
      </div>
    )
  }
}

class Login extends Component{
  constructor(){
    super()
    this.state={
      isLoggedIn:true
    }
  }

  CheckLogin(){
    if (this.state.isLoggedIn===true){
      return "in"
    }else{
      return "out"
    }
  }

  render(){
    return (

      <div>
        <h1>You are currently logged ({this.CheckLogin()})</h1>
      </div>
    )
  }
}

class MyApp extends Component{
  constructor(props){
    super(props)
    this.state={
      todoItems:[this.props.todos]
    }
  }

  render(){
    return(
      <div className='MyApp'>
        {this.state.todoItems}
      </div>
    )
  }
}
export default App;
