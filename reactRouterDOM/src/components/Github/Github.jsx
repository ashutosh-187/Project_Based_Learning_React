import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const githubLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/ashutosh-187")
    const data = await response.json()
    return data;
}

function Github(){

    // const [gitData, setGitData] = useState("")

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ashutosh-187").then((res)=>{
    //         res.json().then((data)=>{
    //             setGitData(data)
    //         })
    //     })
    // }, [])

    const gitData = useLoaderData()
    
    return (
        <>
            <div className="flex justify-center items-center h-screen text-3xl text-center bg-gray-400 text-white">
                    <img
                        className="m-8"
                        src={gitData.avatar_url}
                    />
                    My Github username is {gitData.login} and my tech stack is {`{${gitData.bio}}`}
            </div>
        </>
    )
}

export default Github