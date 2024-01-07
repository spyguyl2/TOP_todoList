export const addProject = (Project) => {
    const parent = document.querySelector('.projectPanel');
    const projectPane = document.createElement('div');
    projectPane.classList.toggle('project');

    const title = document.createElement('h2');
    title.textContent = Project.getTitle();

    parent.appendChild(projectPane);
    projectPane.appendChild(title);
}

export const removeProject = (Project) => {

}

export const addTodo = (Todo) => {
    const container = document.createElement('div');
    container.classList.add('todo', String(Todo.getPriority()));
    

    const todoMain = document.createElement('div');
    todoMain.classList.add('todomain');

    
    const todoDropdown = document.createElement('div');
    todoDropdown.classList.add('tododropdown');

}

export const addSubTask = (SubTask) => {
    
}

export const clearTodoPanel = () => {
    
}

/*  can this be a thing instead of a separate project/todo/subtask??
export const updateDisplay = () => {
    
}
*/

const addToolTip = (nodeObject) => {

}
