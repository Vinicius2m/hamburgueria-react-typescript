import {InputHTMLAttributes, forwardRef} from "react"
import {Inputs} from "./style"

interface Input1Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}

const Input1 = forwardRef(({placeholder, ...rest}: Input1Props, ref: any) => {
    return (
        <>
            <Inputs>
                <input ref={ref} {...rest} placeholder=" " />
                <label>{placeholder}</label>
            </Inputs>
        </>
    )
})

export default Input1
