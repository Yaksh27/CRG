import React, { useState } from "react";


function ToDo(){
    const [tasks, setTasks] = useState(["Revise this code last time", "Watch PSG Win", "Go for a Walk."]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){

    setNewTasks(event.target.value);

    }

    function addTask(){
    if(newTasks.trim()!== ""){
    setTasks(t=> [...t,newTasks]);
    setNewTasks("");

    }
    

    }
     function deleteTask(index){
     
        const updatedTask = tasks.filter((_,i) => i!== index)
        setTasks(updatedTask);

    }
     function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];

            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }


    }
     function moveTaskDown(index){
        if(index < tasks.length){
 
             const updatedTask = [...tasks];

            [updatedTask[index+1],updatedTask[index]] = [updatedTask[index],updatedTask[index+1]];
            setTasks(updatedTask);
        }
    }

    return(

        <div>
            <h1 className="text-3xl font-medium">
                Task Manager
            </h1>
        <div>
            <input type="text"
            placeholder="Enter your new task..."
            className="border border-gray-400 px-7 py-3 rounded-xl mt-10  bg-orange-100 "
            value={newTasks}
            onChange={handleInputChange}/>
            <button 
            onClick={addTask}
            className="border border-gray-400 ml-5 px-7 py-3 rounded-xl mt-10 font-medium text-white bg-green-400 ">
                Add Task 
            </button>
        </div>
        <ol className='list-decimal mt-5'>
    {tasks.map((task,index) =>
    <li
    key = {index}
    >
      <span >{task}</span>
      <button className='py-2 px-2 border rounded-xl border-gray-400 mt-7 bg-red-300 ml-4 '
      onClick={() =>deleteTask(index)}>
        delete task
      </button>
 <button className='py-2 px-2 border border-gray-400 mt-7 rounded-lg bg-blue-200 ml-4 '
      onClick={() =>moveTaskDown(index)}>
        ⬇️
      </button>
       <button className='py-2 px-2 border border-gray-400 mt-7 rounded-lg bg-purple-200 ml-4 '
      onClick={() =>moveTaskUp(index)}>
      ⬆️
      </button>


    </li>
    
    
    
    )}

    </ol>





        </div>

    )


}

export default ToDo;