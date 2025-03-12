import {httpClient} from "@/service/api";

export const listarLocais = async () => {
    try {
        const locais = await httpClient.get('local/all');
        return locais.data;
    }catch (e: any) {
        throw new Error(e.message);
    }
}