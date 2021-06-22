import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './todos.css';
import db from './Firebase';
function Todos(props) {
    return (
        <>
           <li>{props.todo.todo} <DeleteIcon onClick={event =>  db.collection('todos').doc(props.todo.id).delete()} className="delete_icon"/></li>
       </>
    )
}

export default Todos;
