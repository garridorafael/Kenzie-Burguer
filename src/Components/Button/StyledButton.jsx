import { Button } from "./Button"

export function StyledButton ({ text, className, onClick }){
    return(
        <Button className={className} onClick={onClick}>{text}</Button>
    )
}