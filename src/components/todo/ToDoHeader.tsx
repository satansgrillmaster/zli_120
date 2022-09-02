import React, {ReactElement} from "react";

interface AppLayoutProps {
}

const headerStyle = {
  color: 'white',
  backgroundColor: 'blue',
};

const ToDoHeader: React.FC <AppLayoutProps> = (props) => {
  return (
    <h1 style={headerStyle}>Header</h1>
  );
}

export default ToDoHeader