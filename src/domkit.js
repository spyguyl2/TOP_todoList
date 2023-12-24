export default function domkit() {
    const createProject = (Project) => {
        const parent = document.querySelector('.projectPanel');
        const projectPane = document.createElement('div');
        projectPane.classList.toggle('project');
    
        const name = document.createElement('h2');
        name.textContent = `${Project.getName()}`;
    }

    return {createProject}
}