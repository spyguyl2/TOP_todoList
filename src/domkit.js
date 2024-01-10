import { createProject } from "./projectFunctions";

const todoPanel = document.querySelector('.todoPanel');

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

const displayModal = () => {
    const outer = document.createElement('div');
    outer.classList.add('modal-outer'); 
    outer.addEventListener('click', () => {outer.remove();});

    const inner = document.createElement('div');
    inner.classList.add('modal-inner');
    
    outer.appendChild(inner);

    const form = document.createElement('form');
    inner.appendChild(form);

    return form;
}

export const displayNewTodoModal = () => {

    const outer = document.createElement('div');
    todoPanel.appendChild(outer);
    outer.classList.add('modal-outer');
    outer.addEventListener('click', (e) => {
        let isOutside = !e.target.closest('.modal-inner');
        if (isOutside) outer.remove();
    });

    const inner = document.createElement('div');
    inner.classList.add('modal-inner');
    
    outer.appendChild(inner);

    const form = document.createElement('form');
    inner.appendChild(form);

    const h1 = createH1('New Todo');
    form.appendChild(h1);

    const labelTitle = createLabel('title');
    form.appendChild(labelTitle);

    const inputTitle = createInput('Title');
    form.appendChild(inputTitle);

    const labelDescription = createLabel('description');
    form.appendChild(labelDescription);

    const inputDescription = createInput('Description');
    form.appendChild(inputDescription);

    const labelDate = createLabel('Date');
    form.appendChild(labelDate);

    const inputDate = createInput('Date', 'date');
    form.appendChild(inputDate);

    const labelPriority = createLabel('priority');
    form.appendChild(labelPriority);

    const priorityBtns = document.createElement('div');
    priorityBtns.classList.add('prioritybuttons');
    form.appendChild(priorityBtns);

    const btnLow = document.createElement('button');
    priorityBtns.appendChild(btnLow);
    btnLow.classList.add('low');
    btnLow.textContent = 'Low';
    const btnMed = document.createElement('button');
    priorityBtns.appendChild(btnMed);
    btnMed.classList.add('med', 'selected');
    btnMed.textContent = 'Med';
    const btnHigh = document.createElement('button');
    priorityBtns.appendChild(btnHigh);
    btnHigh.classList.add('high');
    btnHigh.textContent = 'High';

    priorityBtns.childNodes.forEach((btn) => btn.setAttribute('type', 'button'));

    const btnWrapper = document.createElement('div');
    form.appendChild(btnWrapper);
    btnWrapper.classList.add('newtodomodalbuttonwrapper');

    const btnCancel = document.createElement('button');
    btnWrapper.appendChild(btnCancel);
    btnCancel.setAttribute('type', 'button');
    btnCancel.textContent = 'Cancel'
    btnCancel.addEventListener('click', () => {outer.remove();});

    const btnCreate = document.createElement('button');
    btnWrapper.appendChild(btnCreate);
    btnCreate.setAttribute('type', 'button');
    btnCreate.textContent = 'Create Todo';
    btnCreate.addEventListener('click', createProject)

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
