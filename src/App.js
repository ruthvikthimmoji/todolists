// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { TodoLists } from './TodoLists';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items ,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList]; 
    });
    setInputList("");
  };


  return (
    <div className="main_div">
      <div className = "centre_div">
        <br/>
        <h1>
          To Do list
        </h1>
        <br/>
        <input type ="text" placeholder ="Add task"
        value = {inputList}
        onChange = {itemEvent}/>
        <button onClick={listofItems}> + </button>

        <ol>
          {/* <li> {inputList}  </li> */}
          {Items.map((itemval) => {
            return <TodoLists text= {itemval}
            />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
