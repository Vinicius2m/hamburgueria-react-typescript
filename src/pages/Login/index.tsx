import InfoBox from "../../components/InfoBox"
import Input1 from "../../components/Input1"
import Logo from "../../components/Logo"
import {LoginContainer} from "./style"

const Login = () => {
    return (
        <>
            <Logo />
            <InfoBox />
            <LoginContainer>
                <div id="loginContent">
                    <h3>Login</h3>
                    <div id="inputContainer">
                        <Input1 placeholder="Nome" />
                        <Input1 placeholder="Senha" />
                    </div>
                </div>
            </LoginContainer>
        </>
    )
}

export default Login
