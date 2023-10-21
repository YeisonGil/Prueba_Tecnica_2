import { createContext , useContext , useState } from "react";
import {getUsersRequest , addUsersRequest} from '../api/user'

const UserContext = createContext();

export const useUsers = () =>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error ('useUser must be used within a UserProvider');
    }
    return context;
}


export function UserProvider({children}){

    const [users , setUser]=useState([]);

    const getUsers = async ()=>{
        try {
            const res = await getUsersRequest();
            setUser(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const addUsers = async (users)=>{
        try {
            const res = await addUsersRequest(users);
            setUser((prevUsers) => [...prevUsers, res.data]);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <UserContext.Provider value={{
            users,
            addUsers,
            getUsers
        }}>
            {children}
        </UserContext.Provider>
    )

}