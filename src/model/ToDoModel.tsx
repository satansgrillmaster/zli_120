
export type UniqueID = string | number | undefined

interface ToDoModel {
        id: UniqueID,
        title: String,
        completed: Boolean
}

export class ToDoImplement implements ToDoModel {

    id: UniqueID;
    title: String;
    completed: Boolean;

    constructor(title: String) {
        this.title = title
        this.completed = false
    }
}

export default ToDoModel
