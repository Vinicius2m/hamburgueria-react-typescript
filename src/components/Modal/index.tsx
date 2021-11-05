import {ReactNode} from "react"
import {useModal} from "../../providers/modal"
import {ModalContainer} from "./style"

interface ModalProps {
    children: ReactNode
}

const Modal = ({children}: ModalProps) => {
    const {handleCloseModal} = useModal()

    return (
        <>
            <ModalContainer onClick={handleCloseModal} id="modalContainer">
                <div id="modalDiv">{children}</div>
            </ModalContainer>
        </>
    )
}

export default Modal
