
import {httpClient} from "@/service/api";
import {ProprietarioRegister} from "@/type/ProprietarioRegister";

export const cadastrarProprietario = async (data : ProprietarioRegister) => {
    try {
        const response = await httpClient.post('/proprietario', data);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}

export const listarProprietarios = async () => {
    try {
        const response = await httpClient.get('/proprietario/all');
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}