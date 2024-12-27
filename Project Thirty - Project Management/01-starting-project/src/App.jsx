import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState ] = useState({
    selectedProjectId : undefined,
    projects:[],
    tasks: []
  })

  function handleAddTask(text){
    setProjectState(prevState =>{
      let taskId = Math.random()
      const newTask = {
        text: text,
        projectId : prevState.selectedProjectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState((prev)=>{
      return {
        ...prev,
        tasks: prev.tasks.filter((task)=>task.id !== id)
       
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId: id,
       
      }
    })
  }

  function handleStartAddProject(){
    console.log("on click called");
    
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId: null,
       
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState =>{
      let projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId: undefined
       
      }
    })
  }

  function handleDeleteProject(){
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((project)=>project.id !== prev.selectedProjectId)
       
      }
    })
  }

  console.log(projectState);
  
  const selectedProject = projectState.projects.find(project=>project.id === projectState.selectedProjectId)

  let content =<SelectedProject project={selectedProject} onDelete={handleDeleteProject} taskList={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }else if(projectState.selectedProjectId=== undefined){
    content=  <NoProjectSelected onStartAddProject={handleStartAddProject}  />
  }



  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/> 
      {content}
     
    </main>
  );
}

export default App;
