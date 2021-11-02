import {createContext, ReactNode, useContext, useState} from "react"
import {useHistory} from "react-router"
import api from "../../services/api"

export interface userData {
    email: string
    password: string
}

export interface userDataRegister {
    email: string
    password: string
    name: string
}

interface AuthProviderProps {
    children: ReactNode
}

interface AuthProviderData {
    authToken: string
    userId: number
    history: any
    signIn: (userData: userData) => void
    logout: () => void
    register: (userData: userDataRegister) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const history = useHistory()

    const [authToken, setAuthToken] = useState<string>(
        () => localStorage.getItem("token") || ""
    )

    const [userId, setUserId] = useState<number>(
        () => Number(localStorage.getItem("id")) || Number()
    )

    const signIn = (userData: userData) => {
        api.post("/login", userData)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                setAuthToken(response.data.accessToken)
                localStorage.setItem("id", response.data.user.id)
                setUserId(response.data.user.id)
                history.push("/dashboard")
            })
            .catch((err) => console.log(err))
    }

    const logout = () => {
        localStorage.clear()
        setAuthToken("")
        history.push("/")
    }

    const register = (userData: userDataRegister) => {
        api.post("/register", userData).then(() => {
            history.push("/")
        })
    }

    return (
        <AuthContext.Provider
            value={{authToken, userId, history, logout, signIn, register}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
