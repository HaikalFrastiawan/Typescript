type GreetProps = {
    name: string
    MessageCount?: number
    isLoggin: boolean
}


export const Greet = (props: GreetProps) =>  {
    const {MessageCount = 0} = props
    return(
        <div>
            <h2>
                {props.isLoggin 
                ? `Welcome ${props.name}! You have ${props.MessageCount} unread message` : `welcome guest` }
            </h2>
        </div>
    )
}