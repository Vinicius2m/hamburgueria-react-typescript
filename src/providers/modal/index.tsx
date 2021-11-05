import {createContext, ReactNode, useContext, useState} from "react"

interface ModalProviderProps {
    children: ReactNode
}

interface ModalProviderData {
    isOpen: boolean
    handleOpenModal: () => void
    handleCloseModal: (e: any) => void
}

export const ModalContext = createContext<ModalProviderData>(
    {} as ModalProviderData
)

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleCloseModal = (e: any) => {
        if (e.target.tagName === "svg") {
            setIsOpen(false)
        }
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    return (
        <ModalContext.Provider
            value={{isOpen, handleOpenModal, handleCloseModal}}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
