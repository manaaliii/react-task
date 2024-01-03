import React,{ useState } from 'react';

const ToDoList:React.FC = () => {
    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<string[]>([])


    // function to update the task
    const handleUpdate = (event : any) => {
        setTask(event.target.value)
    }


    // function to update TaskList after submission
    const handleSubmit = () : void => {
        // console.log(event)
        setTaskList(prevList => [...prevList, task])
    }

    // To delete particular task
    const handleTaskDelete = (index:number):void => {
        const tempTask = [...taskList.slice(0, index),...taskList.slice(index+1)]
        setTaskList(tempTask)
    }
    return(
       <>
           <h2>To Do list</h2>
           {/* Add List */}
           <input type="text" onChange={(event)=>handleUpdate(event)}/>
           <button type="submit" onClick={()=>{handleSubmit()}}>Add</button>

           {/* Displaying List */}
           {taskList?.length > 0 && <h3>Tasks</h3> }
           {taskList?.length ? taskList.map((task, index) => {
               return(
                   <div key={index}>
                       <h3 style={{fontWeight:400}}>{task}</h3>
                       <button type="submit" onClick={()=>handleTaskDelete(index)}>Done</button>

                   </div>
               )
           }) : <p>No tasks to display!</p>}
           <hr />
       </>
    )
}

export default ToDoList;