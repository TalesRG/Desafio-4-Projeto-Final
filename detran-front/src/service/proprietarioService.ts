
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

export const buscarProprietario = async (cpf : string) => {
    try {
        const response = await httpClient.get(`/proprietario/find/${cpf}`);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}

export const deletarProprietario = async (cpf : string) => {
    try {
        const response = await httpClient.delete(`/proprietario/delete/${cpf}`);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}