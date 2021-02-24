import {React,Component} from "react"
import './App.css';
import Todo from './components/Todo'
import  products  from "./productsData";
import  MyCount  from "./components/MyCount";

class App extends Component{
  constructor() {
    super()
    this.state={
      todos:products
    }
  }

  handleOnChange(id){
    console.warn('changed '+id)
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
        <MyCount />
        {todoItem}
      </div>
    )
  }
}

export default App;
