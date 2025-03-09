import {httpClient} from "@/service/api";
import {UsuarioLogin} from "@/type/UsuarioLogin";
import {UsuarioRegister} from "@/type/UsuarioRegister";

export const login = async (data : UsuarioLogin) => {
   try {
         const response = await httpClient.post('/auth/login', data)
         return response.data
   } catch (error) {
       throw error
   }
}


export const register = async (data : UsuarioRegister) => {
    try {
            const response = await httpClient.post('/usuario/cadastrar', data)
            return response.data
    } catch (error) {
         throw error
    }
}