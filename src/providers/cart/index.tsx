import {createContext, ReactNode, useContext, useEffect, useState} from "react"
import api from "../../services/api"
import {toast} from "react-toastify"
import {useAuth} from "../auth"
import {Product} from "../../pages/Dashboard"

interface CartProviderProps {
    children: ReactNode
}

interface CartProviderData {
    cart: Product[]
    setCart: any
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    resetCart: () => void
}

export const CartContext = createContext<CartProviderData>(
    {} as CartProviderData
)

export const CartProvider = ({children}: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([])

    const [cartChanged, setCartChanged] = useState<boolean>(false)

    const {userId, authToken} = useAuth()

    useEffect(() => {
        if (authToken && userId) {
            api.get(`/cart?userId=${userId}`, {
                headers: {Authorization: `Bearer ${authToken}`},
            }).then((response) => setCart(response.data))
        }
    }, [cartChanged])

    const addToCart = (product: Product) => {
        product.userId = userId
        api.post("/cart", product, {
            headers: {Authorization: `Bearer ${authToken}`},
        })
            .then(() => {
                setCartChanged(!cartChanged)
                toast.success("Produto adicionado ao carrinho")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Produto já adicionado")
            })
    }

    const removeFromCart = (product: Product) => {
        api.delete(`/cart/${product.id}`, {
            headers: {Authorization: `Bearer ${authToken}`},
        }).then(() => {
            setCartChanged(!cartChanged)
            toast.success("Produto removido")
        })
    }

    const resetCart = () => {
        cart.forEach((product) => {
            api.delete(`/cart/${product.id}`, {
                headers: {Authorization: `Bearer ${authToken}`},
            }).then(() => {
                setCartChanged(!cartChanged)
            })
        })
        toast.success("Carrinho zerado")
    }

    return (
        <CartContext.Provider
            value={{cart, setCart, addToCart, removeFromCart, resetCart}}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
