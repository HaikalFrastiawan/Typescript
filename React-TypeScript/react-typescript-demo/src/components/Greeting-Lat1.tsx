import React from "react"

type GreetingProps = {
    name: string
    age?: number
}


export const Greeting: React.FC<GreetingProps> = ({name,age})   =>{
    return <div>
        <h2>Ini latian 1 -  Greeting</h2>
            {age
            ? <p>Hello, {name}! You are {age} years Old</p>
            : <p>Hello, {name}</p>
            }

    </div>
}