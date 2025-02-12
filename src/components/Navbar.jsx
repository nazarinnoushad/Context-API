import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Navbar = () => {
    const {isLoggedin,setisLoggedin} = useContext(AuthContext)
    const login = ()=>{
        setisLoggedin(true)
    }
    const logout = ()=>{
        setisLoggedin(false)
    }
    return (
      <header className="bg-gray-900 h-20 px-10 flex justify-center items-center fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-center items-center md:justify-between">
          <a
            href=""
            className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-100 font-serif"
>
            Travel Journal
          </a>
          <ul className="flex items-center space-x-4 hidden md:flex">
            <li
                className="text-gray-300 hover:text-white transition duration-300">
                Home
             
            </li>
{

    isLoggedin ? (
<div className="flex items-center space-x-4 hidden md:flex">
<li
                className="text-gray-300 hover:text-white transition duration-300">
                  Blog
              </li>
              <li
                  className="text-gray-300 hover:text-white transition duration-300">
                  My Blog
                
              </li>
              <li onClick={logout}
                  className="text-gray-300 hover:text-white transition duration-300">
                  Logout
                
              </li>
</div>



    ) : (

        <div className="flex items-center space-x-4 hidden md:flex">
<li onClick={login}
                  className="text-gray-300 hover:text-white transition duration-300">
                  Login
                
              </li>
              <li className="text-gray-300 hover:text-white transition duration-300">
              Signup
          </li>
        </div>
    )
}     
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
      
  