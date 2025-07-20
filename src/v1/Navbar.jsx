import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between rounded-lg items-center p-4 bg-gray-100 border-b-2 shadow-2xl border-gray-500">
      <h1 className="text-2xl font-medium">Learning</h1>
      <div className="space-x-5">
        <Link to="/" className="text-gray-700 hover:text-gray-900 no-underline">Home</Link>
        <Link to="/ToDo" className="text-gray-700 hover:text-gray-900 no-underline">To-Do</Link>
        <Link to="/Create" className="text-gray-700 hover:text-gray-900 no-underline">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
