import {VeiculoRegister} from "@/type/VeiculoRegister";
import {httpClient} from "@/service/api";

export const cadastrarVeiculo = async (data : VeiculoRegister) => {
    try {
        const response = await httpClient.post('/veiculo', data);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}


export const listarVeiculos = async () => {
    try {
        const response = await httpClient.post('/veiculo/all');
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}

export const deletarVeiculo = async (placa : string) => {
    try {
        const response = await httpClient.delete(`/veiculo/delete/${placa}`);
        return response.data;
    }catch (e : any) {
        return e.response.data;
    }
}