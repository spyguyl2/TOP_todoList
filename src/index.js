import './style.css';
import './meyerReset.css';
import { createIcons, FolderPlus, Check } from 'lucide';
import { createProject, createSubTask, createTodo } from './projectFunctions';
import { addProject } from './domkit';
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

btnAddProject.addEventListener('click', () => {

});


const todos = document.getElementsByClassName('todo');
Array.from(todos).forEach((el) => {
    el.addEventListener('click', function() {
        const panel = el.querySelector('.tododropdown');
        panel.classList.toggle('show');
    });
});
const newTodoModal = document.getElementById('newtodomodal');
const btnAddTodo = document.getElementById('btnAddTodo');
btnAddTodo.addEventListener('click', () => {
    newTodoModal.style.display = 'flex';
});

newTodoModal.addEventListener('click', (e) => {
    let isOutside = !e.target.closest('.modal-inner');
    if (isOutside) closeModal('newtodomodal');
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal('newtodomodal');
});

const btnNewTodoModalCancel = document.getElementById('newModalCancel');
btnNewTodoModalCancel.addEventListener('click', () => {
    closeModal('newtodomodal');
});

const btnNewTodoModalCreate = document.getElementById('newModalCreate');
btnNewTodoModalCreate.addEventListener('click', () => {

});

const checkBox = document.querySelector('.checkbox');
checkBox.addEventListener('click', (e) => {
    const check = checkBox.querySelector('svg');
    check.classList.toggle('invisible');
    e.stopPropagation();
});