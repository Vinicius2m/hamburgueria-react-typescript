import InfoBox from "../../components/InfoBox"
import Input1 from "../../components/Input1"
import Logo from "../../components/Logo"
import {useAuth, userData} from "../../providers/auth"
import {LoginContainer, MainLoginContainer} from "./style"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import greyDots from "../../assets/greyDots.svg"
import Button from "../../components/Button"

const Login = () => {
    const {signIn, history} = useAuth()

    const schema = yup.object().shape({
        email: yup.string().required("*Digite um email"),
        password: yup.string().required("*Digite uma senha"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<userData>({resolver: yupResolver(schema)})

    const onSubmit = (userData: userData) => {
        signIn(userData)
    }

    const handleNavigation = (path: string) => {
        history.push(path)
    }

    return (
        <MainLoginContainer>
            <div id="box">
                <Logo />
                <InfoBox />
                <img src={greyDots} alt="Pontos cinza" />
            </div>
            <LoginContainer>
                <div id="loginContent">
                    <h3>Login</h3>
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                        className="inputsContainer"
                    >
                        <div className="inputsContainer">
                            <div className="inputContainer">
                                <Input1
                                    {...register("email")}
                                    type="text"
                                    placeholder="Email"
                                    error={errors.email}
                                />
                                <label className="errorLabel">
                                    {errors.email?.message}
                                </label>
                            </div>

                            <div className="inputContainer">
                                <Input1
                                    {...register("password")}
                                    type="password"
                                    placeholder="Senha"
                                    error={errors.password}
                                />
                                <label className="errorLabel">
                                    {errors.password?.message}
                                </label>
                            </div>
                        </div>

                        <Button full type="submit">
                            Logar
                        </Button>
                    </form>
                    <p>
                        Crie sua conta para saborear muitas delícias e matar sua
                        fome!
                    </p>

                    <Button
                        disable
                        full
                        onClick={() => handleNavigation("/register")}
                    >
                        Cadastrar
                    </Button>
                </div>
            </LoginContainer>
        </MainLoginContainer>
    )
}

export default Login
