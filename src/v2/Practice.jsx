import { useEffect, useState } from "react";

function Practice() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch users on mount
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Debounced search filtering
  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim() === "") {
        setFilteredUsers([]);
        return;
      }

      const matches = users.filter((user) =>
        user.name.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredUsers(matches);
    }, 500);

    return () => clearTimeout(delay); // Cleanup for debounce
  }, [search, users]);

  //handles search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleNameClick = (name) => {
    setSearch(name);
    setFilteredUsers([]);
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search User"
        className="px-7 py-2 border border-gray-600 rounded-xl bg-gray-100 mt-10"
        value={search}
        onChange={handleSearch}
      />

      {loading && <p>Loading users...</p>}

      {!loading && search.trim() !== "" && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}

      {!loading && filteredUsers.length > 0 && (
        <ul className="mt-4 space-y-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleNameClick(user.name)}
              className="cursor-pointer hover:underline"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Practice;
