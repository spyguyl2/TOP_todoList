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
