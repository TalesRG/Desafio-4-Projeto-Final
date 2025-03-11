
import {httpClient} from "@/service/api";
import {InfracaoRegister} from "@/type/InfracaoRegister";

export const cadastroInfracao = async (data : InfracaoRegister) => {
    try {
        console.log(data);
        const response = await httpClient.post('/infracao/cadastrar', data);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}