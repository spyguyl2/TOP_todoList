import './style.css';
import './meyerReset.css';
import { createIcons, FolderPlus, Check } from 'lucide';
import { createProject, createSubTask, createTodo } from './projectFunctions';
import { addProject, displayNewTodoModal } from './domkit';
import { startOfToday } from 'date-fns';

createIcons({
    icons: {
        FolderPlus,
        Check
    }
});

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

const btnAddProject = document.getElementById('btnAddProject');
btnAddProject.addEventListener('click', () => {
    btnAddProject.classList.remove('tooltip');
    btnAddProject.removeChild(btnAddProject.querySelector('span'));
}, {once: true});


const todos = document.getElementsByClassName('todo');
Array.from(todos).forEach((el) => {
    el.addEventListener('click', function() {
        const panel = el.querySelector('.tododropdown');
        panel.classList.toggle('show');
    });
});

const checkBox = document.querySelector('.checkbox');
checkBox.addEventListener('click', (e) => {
    const check = checkBox.querySelector('svg');
    check.classList.toggle('invisible');
    e.stopPropagation();
});

const createH1 = (textContent) => {
    const h1 = document.createElement('h1');
    h1.textContent = textContent;
    return h1;
}
document.getElementById('test').addEventListener('click', displayNewTodoModal);