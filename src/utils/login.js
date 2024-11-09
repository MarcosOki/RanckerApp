import axios from "axios";
import { Alert } from "react-native";



export async function Logar(email, password) {
    if (email && password) {
        const bodyParams = { email, password }
        console.log(bodyParams)
        try {
            const response = await axios.post("http://sz71bpkh-3000.brs.devtunnels.ms/login", bodyParams)
            if (response.status === 200) {
                return console.log(response.data)
            }
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Email ou senha inválidos")
        }
    }
}


