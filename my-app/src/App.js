import React from "react"
import './App.css';

// function App() {
//   const todoList = products.map((item)=>{
//     return <TodoItem key={item.id} item={item} />
//   })
//   const mycomp = products.map((item)=>{
//     return <Product key={item.id} name={item.name} price={item.price} description={item.description} />
//   });
//   return (
//    <div>
//      {todoList}
//    </div>
//   );
// }

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      answer:"Yes"
    }
  }

  render() {
    return (
      <div>
        <h1>Code goes here {this.state.answer}</h1>
        <Age />
        <Login />
      </div>
    )
  }
}

class Age extends React.Component{
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

class Login extends React.Component{
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

export default App;
