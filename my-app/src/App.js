import {React,Component} from "react"
import './App.css';
import Todo from './components/Todo'
import  products  from "./productsData";
import  MyCount  from "./components/MyCount"
import ConditionalRender from './components/ConditionalRender'
import Logger from './components/Logger.js'

class App extends Component{
  constructor() {
    super()
    this.state={
      todos:products,
      isLoading:true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },1500)
  }

  handleOnChange(id){
    this.setState((prevState)=>{
      const updatedTodos = prevState.todos.map((todo)=>{
        if (todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  } 

  render(){
    var todoItem = this.state.todos.map((item)=>{
      return <Todo 
                key={item.id}
                handleChange={this.handleOnChange}
                item={item} />
    })
    return(
      <div className='App'>
        <Logger />
        <MyCount />
        {this.state.isLoading?
        <p>Loading ...</p>:
        <ConditionalRender />}
        
        {todoItem}
      </div>
    )
  }
}

export default App;
