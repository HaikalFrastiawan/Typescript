import React from "react"


type submitProps ={
    value: string
    submitEvent: (event: React.FormEvent<HTMLFormElement>) => void 
}

export const Submit = (props: submitProps) =>{

    return (
        <form onSubmit={props.submitEvent}>
            <input type="submit" value={props.value} />

        </form>
        
    ) 
}