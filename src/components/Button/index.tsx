import {ButtonHTMLAttributes, ReactNode} from "react"
import {Container} from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    disable?: boolean
    medium?: boolean
    full?: boolean
}

const Button = ({
    children,
    disable = false,
    medium = false,
    full = false,
    ...rest
}: ButtonProps) => {
    return (
        <Container {...rest} full={full} disable={disable} medium={medium}>
            {children}
        </Container>
    )
}

export default Button
