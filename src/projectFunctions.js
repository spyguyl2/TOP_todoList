const createProject = (title, description = '') => {

    const getTitle = () => title;
    const getDescription = () => description;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;

    const createTodo = (title, description = '', dueDate, priority = 'med', isComplete = false) => {
    
        const createSubTask = (title, isComplete = false) => {
            const getTitle = () => title;
            const getIsComplete = () => isComplete;
    
            const setTitle = (newtitle) => title = newtitle;
            const toggleIsComplete = () => isComplete = !isComplete;
    
            return {getTitle, getIsComplete, setTitle, toggleIsComplete};
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
    return {getTitle, getDescription, setTitle, setDescription, createTodo};
}

export default createProject;