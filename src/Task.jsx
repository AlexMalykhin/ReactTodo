import deleter from "./img/delete.png";

const Task = ({props}) =>{
    // console.log(props);
    // console.log(date)
   return(
    <div>
       <li class="task">
            <div class="leftblock">
                <input type='checkbox' id="check" name="check" class="check" data-title="make complete"></input>
                <label for="scales">{props.text}</label>
            </div>
            <div class="rightblock">
                <span class="date">{props.date}</span>}
                <button data-title="delete"><img src={deleter} width="33" alt="delete"/></button>
            </div>
        </li>
    </div>
   );
}

export default Task;