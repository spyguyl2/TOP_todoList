export const createProject = (title, description = '') => {
    const todos = [];
    const getTodos = () => todos;
    const addTodo = (todo) => todos.push(todo);
    const getTotalTodos = () => todos.length;
    const getCompleteTodos = () => {
        let x = 0;
        todos.forEach((el) => {
            if (el.getIsComplete()) x++;
        });
        return x;
    }

    const transferTodo = (targetTodo, targetProject) => {
        const index = todos.indexOf(targetTodo);
        if (index > -1) {
            todos.splice(index, 1);
        }
        targetProject.addTodo(targetTodo);
    }
    
    const getTitle = () => title;
    const getDescription = () => description;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;


    
    return {getTitle, getDescription, setTitle, setDescription, 
            getTodos, addTodo, getTotalTodos, getCompleteTodos, transferTodo};
}

export const createTodo = (title, description = '', dueDate, priority = 'med', isComplete = false) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getIsComplete = () => isComplete;
    
    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;
    const toggleIsComplete = () => isComplete = !isComplete;
    
    return {getTitle, getDescription, getDueDate, getPriority, getIsComplete,  
            setTitle, setDescription, setDueDate, setPriority, toggleIsComplete};
}

export const createSubTask = (title, isComplete = false) => {
    const getTitle = () => title;
    const getIsComplete = () => isComplete;

    const setTitle = (newtitle) => title = newtitle;
    const toggleIsComplete = () => isComplete = !isComplete;

    return { getTitle, getIsComplete, setTitle, toggleIsComplete };
}

