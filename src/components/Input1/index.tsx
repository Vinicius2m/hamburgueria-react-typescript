import {InputHTMLAttributes, forwardRef} from "react"
import {Inputs} from "./style"

interface Input1Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    error: object | undefined
}

const Input1 = forwardRef(
    ({placeholder, error, ...rest}: Input1Props, ref: any) => {
        return (
            <>
                <Inputs error={error}>
                    <input ref={ref} {...rest} placeholder=" " />
                    <label>{placeholder}</label>
                </Inputs>
            </>
        )
    }
)

export default Input1
