
import {httpClient} from "@/service/api";
import {InfracaoRegister} from "@/type/InfracaoRegister";

export const cadastroInfracao = async (data : InfracaoRegister) => {
    try {
        console.log(data);
        const response = await httpClient.post('/infracao/cadastrar', data);
        return response.data;
    } catch (e: any) {
        return e.response.data;
    }
}

export const listarInfracoes = async () => {
        try {
            const response = await httpClient.get('/infracao/listar');
            return response.data;
        }catch (e : any) {
            return e.response.data;
        }
}

export const recuperarAgentePorMatricula = async (matricula : string) => {
    try {
        const response = await httpClient.get(`/agente-de-transito/buscar/${matricula}`);
        return response.data;
    } catch (e: any) {
        return e.response.data;
    }
}

export const recuperarInfracaoPorId = async (id : number) => {
    try {
        const response = await httpClient.get(`/infracao/listar/tipoInfracao/${id}`);
        return response.data;
    } catch (e: any) {
        return e.response.data;
    }
}

export const recuperarLocalPorId = async (id : number) => {
    try {
        const response = await httpClient.get(`/local/buscar/${id}`);
        return response.data;
    } catch (e: any) {
        return e.response.data;
    }
}