import deleter from "./img/delete.png";

const Todo = ({todo, index, removeTodo }) =>{
   return(
    <div>
       <li className="task">
            <div className="leftblock">
                <input type='checkbox' id="check" name="check" className="check" data-title="make complete"></input>
                <label htmlFor="scales">{todo.text}</label>
            </div>
            <div className="rightblock">
                <span className="date">2/10/2021</span>
                <button onClick={()=> removeTodo(index)} data-title="delete"><img src={deleter} width="33" alt="delete"/></button>
            </div>
        </li>
    </div>
   );
}

export default Todo;