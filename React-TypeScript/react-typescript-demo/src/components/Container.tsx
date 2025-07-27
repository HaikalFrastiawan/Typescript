
type containerProps = {
    style: React.CSSProperties
}


export const Container = (props: containerProps) =>{
    return <div style={props.style}> Text content</div>
}