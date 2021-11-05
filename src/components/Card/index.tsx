import {Product} from "../../pages/Dashboard"
import {useCart} from "../../providers/cart"
import Button from "../Button"
import {CardContainer} from "./style"

interface CardProps {
    element: Product
}

const Card = ({element, ...rest}: CardProps) => {
    const {addToCart} = useCart()

    return (
        <CardContainer {...rest}>
            <div>
                <img src={element.img} alt={element.name} />
            </div>
            <h3>{element.name}</h3>
            <p>{element.category}</p>
            <p>R$ {element.price.toFixed(2)}</p>
            <Button onClick={() => addToCart(element)} medium>
                Adicionar
            </Button>
        </CardContainer>
    )
}

export default Card
