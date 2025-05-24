import { useState } from "react"
export default function Newtasks({ onadd }) {
    const [enteredTask, setenteredTask] = useState('');

    function handlechange(event) {
        setenteredTask(event.target.value);
    }
    function handleclick() {
        if (enteredTask === "") {
            return;
        }
        onadd(enteredTask);
        setenteredTask("")

    }
    return (
        <div className="flex items-center gap-4">
            <input type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handlechange}
                value={enteredTask}
            />
            <button onClick={handleclick}
                className="text-stone-700 hover:text-stone-950 hover:bg-stone-300 p-2 rounded-md">
                Add new task</button>
        </div>
    )

}