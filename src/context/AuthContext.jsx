import { useState,createContext} from "react";
import PropTypes from 'prop-types';
const AuthContext = createContext()
export const ContextProvider = ({children})=>{
    const [isLoggedin,setisLoggedin] = useState(false)
return(
<AuthContext.Provider value = {{isLoggedin,setisLoggedin}}>{children}</AuthContext.Provider>

)
}
ContextProvider.propTypes = {
    children: PropTypes.children
  }
  
export default AuthContext