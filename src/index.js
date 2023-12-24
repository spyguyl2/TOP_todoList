import './style.css';
import './meyerReset.css';
import {pfx} from './projectFunctions'
import { startOfToday } from 'date-fns';

let testProject = pfx.createProject("Default", "this is the default project");


testProject.addTodo(createTodo('todo1', 'my first todo!', startOfToday(), 'med', true));
testProject.addTodo(createTodo('todo2', 'my second todo!', startOfToday(), 'high', true));
testProject.addTodo(createTodo('todo3', 'my third todo!', startOfToday(), 'low', true));
testProject.addTodo(createTodo('todo4', 'my fourth todo!', startOfToday(), 'low', false));
testProject.addTodo(createTodo('todo2', 'my fifth todo!', startOfToday(), 'med', true));



console.log(testProject.getTodos());
console.log(testProject.getTotalTodos());
console.log(testProject.getCompleteTodos());