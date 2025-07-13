export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-black">
      <h2 className="text-2xl font-bold">
        Siddhant<span className="text-gray-500">Kadam</span>
      </h2>
      <div className="flex font-bold">
        <a href="#about" className="px-4 py-2 hover:text-gray-700 text-2xl">
          Blog
        </a>
        <a href="#projects" className="px-4 py-2 hover:text-gray-700 text-2xl">
          Projects
        </a>
      </div>
    </nav>
  );
};
