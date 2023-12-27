import './style.css';
import './meyerReset.css';
import { createIcons, FolderPlus } from 'lucide';
import { createProject, createSubTask, createTodo } from './projectFunctions';
import { addProject } from './domkit';
import { startOfToday } from 'date-fns';

createIcons({
    icons: {
        FolderPlus
    }
});

const btnAddProject = document.getElementById('btnAddProject');
btnAddProject.addEventListener('click', () => {
    btnAddProject.classList.remove('tooltip');
    btnAddProject.removeChild(btnAddProject.querySelector('span'));
}, {once: true});

btnAddProject.addEventListener('click', () => {

});