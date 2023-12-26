export const addProject = (Project) => {
    const parent = document.querySelector('.projectPanel');
    const projectPane = document.createElement('div');
    projectPane.classList.toggle('project');

    const title = document.createElement('h2');
    title.textContent = Project.getTitle();

    parent.appendChild(projectPane);
    projectPane.appendChild(title);
}

