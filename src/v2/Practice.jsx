import { useEffect, useState } from "react"

function Practice(){
    
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
            setTasks(data.todos);
            console.log(data.todos);
        })           
        .catch(err => console.error('Failed to fetch todos: ', err)) 
    }, [])

    const addTask = (e) => {
        e.preventDefault(); 
        
        if (!newTasks.trim()) return; 

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                todo: newTasks,
                completed: false,
                userId: Math.floor(Math.random() * 100),
            })
        })
        .then(res => res.json())
        .then(data => {
            setTasks(prev => [...prev, data]);
            setNewTasks(""); // Clear input after adding
        })
        .catch(err => console.error('Failed to add task:', err));
    }
   
    const deleteTask = async (task) => {
        try {
            const response = await fetch(`https://dummyjson.com/todos/${task.id}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                // Remove the task from state
                setTasks(prev => prev.filter(t => t.id !== task.id));
                console.log(`Task ${task.id} deleted successfully`);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

 const toggleCompleted = async (task) => {
        try {
            const response = await fetch(`https://dummyjson.com/todos/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    completed: !task.completed,
                })
            });

            const data = await response.json();
            console.log('Update response:', data);

        if (response.ok) {
                // Update the task in local state
                setTasks(prev => prev.map(t => 
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                ));
            }

        } catch (error) {
            console.error("Error updating task:", error);
        }
    }

    return (
        <div className="p-4">
            <div>
                <input 
                    type="text"
                    onChange={(e) => setNewTasks(e.target.value)}
                    value={newTasks} 
                    placeholder="Enter New Task..."
                    className="px-7 py-2 rounded-full bg-white text-black border border-gray-500"
                />

                <button 
                    onClick={addTask}
                    className="px-4 py-2 ml-4 rounded-full bg-white text-black border border-gray-500 hover:bg-gray-400"
                >
                    Add
                </button>
            </div>

            <div className="mt-4">
                <h3 className="font-bold mb-2">Tasks ({tasks.length}):</h3>
                {tasks.map((task, index) => (
                    <div key={task.id} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded">
                        <input type="checkbox" 
                        checked={task.completed}
                        value={task.completed}
                        onChange={()=>toggleCompleted(task)}
                        name="" id="" 
                        
                        />
                        <span
                        className= {task.completed ? "line-through " : 
                            ""}>
                            {index + 1}. {task.todo}
                        </span>
                        <button 
                            onClick={() => deleteTask(task)}
                            className="px-3 py-1 ml-4 rounded bg-red-500 text-white border hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Practice;