import { useEffect, useState } from "react";


 
 function Practice(){

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [search, setSearch] = useState('');
    const [isTyping, setIsTyping] = useState(false);


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>
            res.json() )
       .then(data => {
        const userList = data.map(item => item)
        setUsers(userList)
        console.log(userList)
       })


    }, []);

    const handleSearch = (e) => { 
        const input = e.target.value;
        setSearch(input);
        console.log(input);

        if (input.trim() !== ""){
                
        const matches = users.filter(names=> names.name.toLowerCase().startsWith(input.toLowerCase()));
        setFilteredUsers(matches);
        console.log(matches)

        }
        else { 
            setFilteredUsers([]);
            return;
        }
        
    }
    
    const handleNameClick = (search) => {
        setSearch(search);
        setFilteredUsers([]);

    }

    return (
        <div>
            hi
<div>
 <input type="text" 
        placeholder="Search User"
        className="px-7 py-2 border border-gray-600 rounded-xl  bg-gray-100 mt-10 "
        value={search}
        onChange={handleSearch} />

        <div>
            
        </div>
    {filteredUsers.length> 0 && (
            <ul>
                {filteredUsers.map(users=>(
                    <li key={users.id}
                    onClick={()=>handleNameClick(users.name)}>
                      {users.name}
                </li>
                ))}
             
            </ul>
     )}
        
</div>
       
        </div>
    )
 }

 export default Practice;