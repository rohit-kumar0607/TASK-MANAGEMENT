import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {

  const [ProjectsState, SetProjectsState] = useState({
    SelectedProjectId: undefined,
    projects: [],
    tasks: []
  }
  )

  function handleaddtask(text) {
    SetProjectsState((prevstate) => {
      const taskid = Math.random();
      const newtask = {
        text: text,
        projectid: prevstate.SelectedProjectId,
        id: taskid
      }
      return ({
        ...prevstate,
        tasks: [newtask, ...prevstate.tasks]
      })

    })

  }
  function handledeletetask(id) {
    SetProjectsState(prevstate => {
      return {
        ...prevstate,
        tasks: prevstate.tasks.filter(
          (task) => task.id !== id
        )

      }
    }
    )

  }
  function handleStartAddProject() {
    SetProjectsState(prevstate => {
      return {
        ...prevstate,
        SelectedProjectId: null
      }
    }
    )
  }

  function handlecanceladdproject() {
    SetProjectsState(prevstate => {
      return {
        ...prevstate,
        SelectedProjectId: undefined
      }
    }
    )

  }
  function handleAddProject(projectData) {

    SetProjectsState(prevstate => {
      const newproject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevstate,
        SelectedProjectId: undefined,
        projects: [...prevstate.projects, newproject]
      };
    })
  }
  function handleselectproject(id) {
    SetProjectsState(prevstate => {
      return {
        ...prevstate,
        SelectedProjectId: id
      }
    }
    )

  }

  function handleDeleteProject() {
    SetProjectsState(prevstate => {
      return {
        ...prevstate,
        SelectedProjectId: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.SelectedProjectId
        )

      }
    }
    )

  }
  const selectedproject = ProjectsState.projects.find(project => project.id === ProjectsState.SelectedProjectId)

  let content = <SelectedProject
    project={selectedproject}
    onDelete={handleDeleteProject}
    onaddtask={handleaddtask}
    ondeletetask={handledeletetask}
    tasks={ProjectsState.tasks}
  />;
  if (ProjectsState.SelectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} oncancel={handlecanceladdproject} />
  }
  else if (ProjectsState.SelectedProjectId === undefined) {

    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={ProjectsState.projects}
        onselectproject={handleselectproject}
        selectedprojectid={ProjectsState.SelectedProjectId}
      />
      {content}
    </main>

  );
}

export default App;
