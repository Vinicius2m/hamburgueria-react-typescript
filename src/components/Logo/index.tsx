import {Container} from "./style"

export interface LogoProps {
    fs?: number
}

const Logo = ({fs}: LogoProps) => {
    return (
        <div id="logoContainer">
            <Container fs={fs}>
                <h1>
                    Burguer<span>Kenzie</span>
                </h1>
            </Container>
        </div>
    )
}

export default Logo
