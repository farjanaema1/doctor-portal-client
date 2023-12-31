import { useEffect } from "react";
import { useState } from "react"

const useAdmin = email => {
    const [isAdmin,setIsAdmin] = useState(false);
    useEffect( () => {
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then( data => {
                console.log(data)
            })
        }
    },[email])
    return[isAdmin]
}
export default useAdmin;