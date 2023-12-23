const createProject = (title, description = '') => {

    const listOfTodos = [];
    const getTodos = () => listOfTodos;
    const addTodo = (todo) => listOfTodos.push(todo);
    const transferTodo = (targetTodo, targetProject) => {
        const index = listOfTodos.indexOf(targetTodo);
        if (index > -1) {
            listOfTodos.splice(index, 1);
        }
        return index;
    }
    
    const getTitle = () => title;
    const getDescription = () => description;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;


    
    return {getTitle, getDescription, setTitle, setDescription, getTodos, addTodo};
}

const createTodo = (title, description = '', dueDate, priority = 'med', isComplete = false) => {
    
    const createSubTask = (title, isComplete = false) => {
        const getTitle = () => title;
        const getIsComplete = () => isComplete;

        const setTitle = (newtitle) => title = newtitle;
        const toggleIsComplete = () => isComplete = !isComplete;

        return { getTitle, getIsComplete, setTitle, toggleIsComplete };
    }

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
    
    return {createSubTask, getTitle, getDescription, getDueDate, getPriority, getIsComplete,  
            setTitle, setDescription, setDueDate, setPriority, toggleIsComplete};
}

export {createProject, createTodo};