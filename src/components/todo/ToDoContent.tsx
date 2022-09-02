import React, {ReactElement} from "react";
import BodyLayout from "../application/BodyLayout";
import ToDoView from "./ToDoView";
import ToDoList from "./ToDoList";

interface AppLayoutProps {
}

const ToDoContent: React.FC <AppLayoutProps> = (props) => {
  return (
    <BodyLayout left={<ToDoList/>} right={<ToDoView/>}/>
  );
}

export default ToDoContent