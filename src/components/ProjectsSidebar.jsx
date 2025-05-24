import Buttoncom from "./Buttoncom"
function ProjectsSidebar({ onStartAddProject, projects, onselectproject, selectedprojectid }) {
    return (<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">Your projects</h2>
        <div>
            <Buttoncom onClick={onStartAddProject}>
                +Add projects
            </Buttoncom>
        </div>
        <ul className="mt-8">
            {projects.map(project => {
                let cssclass = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-400 hover:bg-stone-800"
                if (project.id === selectedprojectid) {
                    cssclass += " bg-stone-800 text-stone-200"
                }
                else {
                    cssclass += " text-stone-400"
                }


                return (
                    <li key={project.id}>
                        <button onClick={() => onselectproject(project.id)} className={cssclass}>
                            {project.title}</button>
                    </li>)
            })}

        </ul>
    </aside>)
}
export default ProjectsSidebar