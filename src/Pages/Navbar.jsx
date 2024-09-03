import React, { useContext } from 'react';


const Navbar = () => {



  return (
    <div className="flex justify-between px-5 py-1 bg-white shadow-lg">
      {/* Logo and Title */}
      <p className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Task Add
        </span>
  
      </p>

      {/* Profile Image and Sign Out Button */}
      <div className="flex justify-between gap-5">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          className="w-11  h-11 object-center object-cover rounded-full "
          alt="User Avatar"
        />

        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
