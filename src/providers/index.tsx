import {ReactNode} from "react"
import {AuthProvider} from "./auth"
import {CartProvider} from "./cart"
import {ModalProvider} from "./modal"

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <AuthProvider>
            <CartProvider>
                <ModalProvider>{children}</ModalProvider>
            </CartProvider>
        </AuthProvider>
    )
}

export default Providers
