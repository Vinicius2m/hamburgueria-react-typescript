import {useModal} from "../../providers/modal"
import {CartModalDiv} from "./style"
import {IoClose} from "react-icons/io5"
import {useCart} from "../../providers/cart"
import CartProduct from "../CartProduct"
import Button from "../Button"

const CartModal = () => {
    const {handleCloseModal} = useModal()

    const {cart, resetCart} = useCart()

    return (
        <CartModalDiv>
            <div id="modalHeader">
                <h4>Carrinho de compras</h4>
                <div id="closeIcon">
                    <IoClose onClick={handleCloseModal} />
                </div>
            </div>

            <div id="modalContent">
                {cart.length > 0 ? (
                    cart
                        .filter(
                            (product, index, arr) =>
                                index ===
                                arr.findIndex(
                                    (item) => item.name === product.name
                                )
                        )
                        .map((element, index) => (
                            <CartProduct key={index} element={element} />
                        ))
                ) : (
                    <div id="emptyCart">
                        <h3>Sua sacola está vazia</h3>
                        <p>Adicione itens</p>
                    </div>
                )}
            </div>
            <div id="total">
                <span id="hr"></span>
                <div id="totalContent">
                    <p>Total</p>
                    <span>
                        R${" "}
                        {cart
                            .reduce((acc, element) => acc + element.price, 0)
                            .toFixed(2)}
                    </span>
                </div>
                <Button onClick={resetCart} full disable>
                    Remover todos
                </Button>
            </div>
        </CartModalDiv>
    )
}

export default CartModal
