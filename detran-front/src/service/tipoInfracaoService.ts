import {httpClient} from "@/service/api";

export const listarTipoInfracao = async () => {
    try {
        const litaTipoInfracao = await httpClient.get('/infracao/listar/tipoInfracao');
        return litaTipoInfracao.data;
    }catch (e) {
        console.log(e);
    }
}