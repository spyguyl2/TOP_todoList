import './style.css';
import './meyerReset.css';
import { createIcons, FolderPlus, Check } from 'lucide';
import { createProject, createSubTask, createTodo } from './projectFunctions';
import { startOfToday } from 'date-fns';

createIcons({
    icons: {
        FolderPlus,
        Check
    }
});

