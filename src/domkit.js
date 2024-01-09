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

const createH1 = (textContent) => {
    const h1 = document.createElement('h1');
    h1.textContent = textContent;
    return h1;
}

const createLabel = (name) => {
    const label = document.createElement('label');
    label.setAttribute('for', name.toLowerCase());
    label.textContent = name;
    return label;
}

const createInput = (name, type = 'text') => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name.toLowerCase());
    return input;
}

export const displayNewTodoModal = () => {
    const outer = document.createElement('div');
    outer.id = 'newtodomodal';
    outer.classList.add('modal-outer'); 

    const inner = document.createElement('div');
    inner.classList.add('modal-inner');

    const form = document.createElement('form');
    form.id = 'newtodoform';

    const h1 = createH1('New Todo');

    const labelTitle = createLabel('title');
    const inputTitle = createInput('title');

    const labelDescription = createLabel('description');
    const inputDescription = createInput('description');

    const labelDate = createLabel('Date');
    const inputDate = createInput('Date', 'date');

    const labelPriority = createLabel('priority');
    const priorityBtns = document.createElement('div');
    priorityBtns.classList.add('prioritybuttons');

    const btnLow = document.createElement('button');
    const btnMed = document.createElement('button');
    const btnHigh = document.createElement('button');

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('newtodomodalbuttonwrapper');

    const btnCancel = document.createElement('button');
    const btnCreate = document.createElement('button');

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
