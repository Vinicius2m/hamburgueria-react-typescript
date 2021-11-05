import {Product} from "../../pages/Dashboard"
import {useCart} from "../../providers/cart"
import {FaTrash} from "react-icons/fa"
import {CartProductDiv} from "./style"

interface CartProductProps {
    element: Product
}

const CartProduct = ({element, ...rest}: CartProductProps) => {
    const {cart, removeFromCart} = useCart()

    const filtered = () => {
        let counter = 0
        cart.forEach((item) => {
            if (item.name === element.name) {
                counter++
            }
        })
        return counter
    }

    return (
        <CartProductDiv>
            <div id="productContent">
                <div id="productImage">
                    <img src={element.img} alt={element.name} />
                </div>
                <div id="productInfo">
                    <h3>{element.name}</h3>
                    <span>
                        <span>{filtered()}</span>
                    </span>
                </div>
            </div>
            <div id="removeIcon" onClick={() => removeFromCart(element)}>
                <FaTrash />
            </div>
        </CartProductDiv>
    )
}

export default CartProduct
