import {httpClient} from "@/service/api";

export const login = async (email: string, senha: string) => {

   try {
         const response = await httpClient.post('/auth/login', { email, senha })
         return response.data
   } catch (error) {
       throw error
   }
}