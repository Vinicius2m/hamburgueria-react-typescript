import {Input} from "./style"

interface Input1Props {
    placeholder: string
}

const Input1 = ({placeholder}: Input1Props) => {
    return (
        <>
            <Input placeholder={placeholder} />
        </>
    )
}

export default Input1
