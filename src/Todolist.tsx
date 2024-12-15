import { FilterValuesType, TaskType } from "./App"
import { Button } from "./Button"


type TodolistPropsType = {
    title?: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <Button title="+" />
            </div>
            {props.tasks.length === 0 ? 'Тасок нет'
                : <ul>
                    {props.tasks.map(task => {
                        return (
                            <li><input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => props.removeTask(task.id)} />
                            </li>
                        )

                    })}
                </ul>}
            <div>
                <Button title="All" onClick={() => props.changeFilter('all')} />
                <Button title="Active" onClick={() => props.changeFilter('active')} />
                <Button title="Completed" onClick={() => props.changeFilter('completed')} />
            </div>
        </div>
    )

}