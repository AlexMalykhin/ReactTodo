import './App.css';
import Task from './Task';
import arrowup from './img/arrowup.png';
import arrowdown from './img/arrowdown.png';
import arrowleft from './img/arrowleft.png';
import arrowright from './img/arrowright.png';
import React from 'react';

const App = () => {
const element = <Task/>;
let addcomp = () =>{
    React.createElement(<Task/>)
}
  return (
      
    <div className="App">
      <div className="wrapper">
        <header>
            <h1>ToDo</h1>
        </header>
        <form>
            <input className='inputTask' placeholder="I want to"/>
        </form>
        <div className="Sortheader">
            <div className="SortComplete">
                <button onClick={console.log('hello')} class="all">All</button>
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
            {element}
        </ul>
        <div className="listNavigation">
            <button onClick={()=>addcomp()}><img src={arrowleft} alt="previous" width="35" height="20"/></button>
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
