function Header() {
    return (
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">LOGO</h1>
  
        {/* Navigation */}
        <ul className="flex gap-8 text-lg">
          <li className="mr-8 cursor-pointer hover:text-green-400 transition duration-300">Log In</li>
          <li className="cursor-pointer hover:text-green-400  transition duration-300">Sign Up</li>
          <li className="cursor-pointer hover:text-green-400  transition duration-300">Sign Up</li>

        </ul>
      </div>
    );
  }
  
  export default Header;