import Logo from "../../components/Logo"
import {DashboardContainer} from "./style"
import {FaShoppingCart} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import {useEffect, useState} from "react"
import api from "../../services/api"
import Card from "../../components/Card"
import {useAuth} from "../../providers/auth"
import {useCart} from "../../providers/cart"
import {useModal} from "../../providers/modal"
import Modal from "../../components/Modal"
import CartModal from "../../components/CartModal"
import {Redirect} from "react-router"

export interface Product {
    id: number
    name: string
    category: string
    price: number
    img: string
    userId?: number
}

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([])

    const {logout, authToken, userId} = useAuth()

    const {isOpen, handleOpenModal} = useModal()

    const {cart, setCart} = useCart()

    const [input, setInput] = useState<string>("")

    useEffect(() => {
        api.get("/products")
            .then((response) => {
                setProducts(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        api.get(`/cart?userId=${userId}`, {
            headers: {Authorization: `Bearer ${authToken}`},
        }).then((response) => setCart(response.data))
    }, [])

    const filter = products.filter(
        (element) =>
            element.name.toLowerCase().includes(input) ||
            element.category.toLowerCase().includes(input) ||
            element.name.includes(input) ||
            element.category.includes(input)
    )

    if (!authToken && !userId) {
        return <Redirect to="/" />
    }

    return (
        <DashboardContainer>
            <header>
                <Logo fs={22} />
                <div id="iconsContainer">
                    <div id="searchInput">
                        <input
                            placeholder="Pesquisar"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    <div id="icons">
                        <div id="cartIcon">
                            <div onClick={handleOpenModal}>
                                <FaShoppingCart />
                            </div>
                            <span id="cartLength">{cart.length}</span>
                        </div>

                        <div onClick={logout} id="logoutIcon">
                            <FiLogOut />
                        </div>
                    </div>
                </div>
            </header>

            {isOpen && (
                <Modal>
                    <CartModal />
                </Modal>
            )}

            <section>
                <div id="section">
                    {!input ? (
                        products.map((element, index) => (
                            <Card element={element} key={index} />
                        ))
                    ) : filter.length ? (
                        filter.map((element, index) => (
                            <Card element={element} key={index} />
                        ))
                    ) : (
                        <div id="empty">
                            <h3>Nenhum produto encontrado</h3>
                        </div>
                    )}
                </div>
            </section>
        </DashboardContainer>
    )
}

export default Dashboard
