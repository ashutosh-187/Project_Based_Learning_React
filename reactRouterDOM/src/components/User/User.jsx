import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {username} = useParams()
    return(
        <>
            <div className="flex items-center justify-center">
                <p>Hello {username}</p>
            </div>
        </>
    )
}

export default User;