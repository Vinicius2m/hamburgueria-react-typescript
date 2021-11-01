import {FiShoppingBag} from "react-icons/fi"
import {Container} from "./style"

const InfoBox = () => {
    return (
        <Container>
            <div id="mainContainer">
                <div id="iconContainer">
                    <FiShoppingBag />
                </div>
                <p>
                    A vida é como um sanduíche, é preciso recheá-la com os{" "}
                    <strong>melhores</strong> ingredientes.
                </p>
            </div>
        </Container>
    )
}

export default InfoBox
