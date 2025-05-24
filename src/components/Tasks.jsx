import Newtasks from "./Newtasks";

export default function Tasks({ tasks, onadd, ondelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <Newtasks onadd={onadd} />
            {tasks.length === 0 &&
                (<p className="text-stone-800 my-4">this project does not have task yet</p>)
            }
            {tasks.length > 0 &&
                <ul className="rounded-md mt-8 p-4 bg-stone-100">
                    {tasks.map((task) => <li className="flex justify-between my-4" key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => ondelete(task.id)} className="text-stone-700 hover:text-red-500">clear</button>
                    </li>)}
                </ul>}
        </section>
    )

}