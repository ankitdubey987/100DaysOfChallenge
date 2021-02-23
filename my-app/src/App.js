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
      </div>
    )
  }
}

export default App;
