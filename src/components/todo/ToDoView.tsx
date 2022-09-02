import React, {ReactElement} from "react";
import ToDoListItem from "./ToDoListItem";

interface ToDoViewInterface {
}

const ToDoViewStyle = {
  color: 'white',
  backgroundColor: 'green',
};

const ToDoView: React.FC <ToDoViewInterface> = (props) => {
  return (<h1>test</h1>);
}

export default ToDoView