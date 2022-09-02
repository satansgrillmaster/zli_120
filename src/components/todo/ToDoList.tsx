import React, {ReactElement} from "react";
import {List, ListItem, ListItemText} from "@mui/material";

interface ToDoListInterface {
}

const contentStyle = {
  color: 'white',
  backgroundColor: 'violet',
};

const ToDoList: React.FC <ToDoListInterface> = (props) => {
  return (
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {[1, 2, 3].map((value) => (
    <ListItem
      key={value}
      disableGutters
    >
      <ListItemText primary={`Line item ${value}`} />
    </ListItem>
  ))}
</List>
  );
}

export default ToDoList