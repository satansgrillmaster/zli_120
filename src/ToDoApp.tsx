import React from 'react'

import AppLayout from "./components/application/AppLayout";
import ToDoHeader from "./components/todo/ToDoHeader";
import ToDoContent from "./components/todo/ToDoContent";

const ToDoApp: React.FC = () => {
    return (
        <AppLayout header={<ToDoHeader/>} content={<ToDoContent/>}/>
    );
}
export default ToDoApp