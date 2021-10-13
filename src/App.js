import './App.css';
import Task from './Task';
import arrowup from './img/arrowup.png';
import arrowdown from './img/arrowdown.png';
import arrowleft from './img/arrowleft.png';
import arrowright from './img/arrowright.png';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <header>
            <h1>ToDo</h1>
        </header>
        <form>
            <input class='inputTask' placeholder="I want to"/>
        </form>
        <div class="Sortheader">
            <div class="SortComplete">
                <button class="all">All</button>
                <button class="done">Done</button>
                <button class="undone">Undone</button>
            </div>
            <div class="Sortdate">
                <span>Sort by Date</span>
                <button><img src={arrowup} alt="arrowup" width="20"/></button>
                <button><img src={arrowdown} alt="arrowdown" width="20"/></button>
            </div>
        </div>
        <ul class="tasks">
            <Task props={{date: 'kasdalskjda', text:'dadasdas'}}/>
            <Task props={{date: 'kasdalskjda', text:'dadasdas'}}/>
            <Task props={{date: 'fwfwfwfwfwwfw',text:'fwfqwfwf'}}/>
            <Task props={{date: 'kasdalskjda', text:'dadasdas'}}/>
            <Task props={{date: 'kasdalskjda', text:'dadasdas'}}/>
        </ul>
        <div class="listNavigation">
            <button><img src={arrowleft} alt="previous" width="35" height="20"/></button>
            <button class="first">1</button>
            <button class="second">2</button>
            <button class="third">3</button>
            <button class="four">4</button>
            <button class="five">5</button>
            <button><img src={arrowright} alt="next" width="35" height="20"/></button>
        </div>
    </div>
    </div>
  );
}

export default App;
