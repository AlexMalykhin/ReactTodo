import Todo from './Todo';
import arrowup from './img/arrowup.png';
import arrowdown from './img/arrowdown.png';
import arrowleft from './img/arrowleft.png';
import arrowright from './img/arrowright.png';
import { useState } from 'react';
import ToDoForm from './ToDoForm';


const App = () => {
    const[todos , setTodos] = useState([
      { 
        text: "Learn React", 
        isCompleted: false       
      },
      { 
        text: "Learn JS",
        isCompleted: false      
      },
      { 
        text: "Learn git",
        isCompleted: false
      }
  ]);
  const removeTodo = index =>{
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  const addTodo = text =>{
      const newTodos = [...todos, {text}];
      setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <header>
            <h1>ToDo</h1>
        </header>
        <ToDoForm addTodo={addTodo}/>
        <div className="Sortheader">
            <div className="SortComplete">
                <button className="all">All</button>
                <button className="done">Done</button>
                <button className="undone">Undone</button>
            </div>
            <div className="Sortdate">
                <span>Sort by Date</span>
                <button><img src={arrowup} alt="arrowup" width="20"/></button>
                <button><img src={arrowdown} alt="arrowdown" width="20"/></button>
            </div>
        </div>
        <ul className="tasks">
            {todos.map((todo, index) =>(
            <Todo 
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
              />
            ))
        }   
        </ul>
        <div className="listNavigation">
            <button ><img src={arrowleft} alt="previous" width="35" height="20"/></button>
            <button className="first">1</button>
            <button className="second">2</button>
            <button className="third">3</button>
            <button className="four">4</button>
            <button className="five">5</button>
            <button><img src={arrowright} alt="next" width="35" height="20"/></button>
        </div>
    </div>
    </div>
  );
}

export default App;
