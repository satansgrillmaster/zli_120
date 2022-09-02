import React from 'react'
import {useLocation} from "react-router-dom";

import AppLayout from "./components/application/AppLayout";
import ToDoHeader from "./components/todo/ToDoHeader";
import ToDoPage from "./components/todo/ToDoPage";
import PageNotFoundPage from "./components/pageNotFound/PageNotFoundPage";
import AboutPage from "./components/about/AboutPage";

const ToDoApp: React.FC = () => {

    let body = <PageNotFoundPage/>

    switch (useLocation().pathname) {
        case '/': body = <ToDoPage/>
            break
        case '/todo': body = <ToDoPage/>
            break
        case '/about': body = <AboutPage/>
            break
    }

    return (
        <AppLayout header={<ToDoHeader/>} content={body}/>
    );
}
export default ToDoApp