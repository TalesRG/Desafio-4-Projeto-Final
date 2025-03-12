import {httpClient} from "@/service/api";

export const listarAgentes = async () => {
    try {
        const response = await httpClient.get('/agente-de-transito/all');
        return response.data;
    }catch (e) {
        return e;
    }
}