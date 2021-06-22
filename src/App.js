import React, {useState, useEffect} from 'react';
import {Button ,TextField} from '@material-ui/core';
import './App.css';
import Todo from './Todos';
import db from './Firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() =>{
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().text})))
    })
  },[])
  const addTodo = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      text:input
    })
    // setTodos([...todos, input]);
     setInput('');
  }

  return (
    <div className="App">
      <h1>TODO-List</h1>
      <div className="app__box">
          <div className="first">
            <TextField id="standard-basic" value={input} onChange={e => setInput(e.target.value)} label="Type something..." />
            <br/><br/>
            <Button disabled={!input} type ="submit" color ="secondary" variant="contained" onClick={addTodo}>Add Todo</Button>
          </div>
          <div className="second">
              <ul>
                <div className="message">{todos.map(todo => ( <Todo todo ={todo}/> ))}</div>
              </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
