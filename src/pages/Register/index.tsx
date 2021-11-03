import InfoBox from "../../components/InfoBox"
import Input1 from "../../components/Input1"
import Logo from "../../components/Logo"
import {useAuth, userDataRegister} from "../../providers/auth"
import {LoginContainer} from "../Login/style"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import greyDots from "../../assets/greyDots.svg"
import Button from "../../components/Button"
import {MainRegisterContainer} from "./style"
import {Link} from "react-router-dom"

const Register = () => {
    const {userRegister} = useAuth()

    const schema = yup.object().shape({
        name: yup.string().required("*Nome obrigatório"),
        email: yup
            .string()
            .required("*Email obrigatório")
            .email("Digite um email válido"),
        password: yup
            .string()
            .required("*Senha obrigatória")
            .min(6, "Mínimo 6 caracteres"),
        passwordConfirm: yup
            .string()
            .required("*Confirmação de senha obrigatória")
            .oneOf([yup.ref("password"), null], "Senhas devem coincidir"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<userDataRegister>({resolver: yupResolver(schema)})

    const onSubmit = (userData: userDataRegister) => {
        userRegister(userData)
    }

    return (
        <MainRegisterContainer>
            <div id="box">
                <Logo />
                <InfoBox />
                <img src={greyDots} alt="Pontos cinza" />
            </div>
            <LoginContainer>
                <div id="loginContent">
                    <span id="cadastroContainer">
                        <h3>Cadastro</h3>
                        <Link to="/">Retornar para Login</Link>
                    </span>
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                        className="inputsContainer"
                    >
                        <div className="inputsContainer">
                            <div className="inputContainer">
                                <Input1
                                    {...register("name")}
                                    type="text"
                                    placeholder="Name"
                                    error={errors.name}
                                />
                                <label className="errorLabel">
                                    {errors.name?.message}
                                </label>
                            </div>

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

                            <div className="inputContainer">
                                <Input1
                                    {...register("passwordConfirm")}
                                    type="password"
                                    placeholder="Confirmar Senha"
                                    error={errors.passwordConfirm}
                                />
                                <label className="errorLabel">
                                    {errors.passwordConfirm?.message}
                                </label>
                            </div>
                        </div>

                        <Button full disable type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </LoginContainer>
        </MainRegisterContainer>
    )
}

export default Register
