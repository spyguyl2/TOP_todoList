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
