import NOProjectimg from "../assets/no-projects.png"
import Buttoncom from "./Buttoncom.jsx"

export default function NoProjectSelected({ onStartAddProject }) {
    return (<div className="mt-24 text-center w-2/3 ">
        <img src={NOProjectimg} alt="" className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 my-4">NO project selected</h2>
        <p className="text-stone-400 mb-4">select a project or get started with a new one</p>
        <p className="mt-8">
            <Buttoncom onClick={onStartAddProject}>Create new project</Buttoncom>
        </p>
    </div>)
}