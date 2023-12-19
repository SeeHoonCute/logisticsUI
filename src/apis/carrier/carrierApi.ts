import httpClient from "../../httpClient/httpClient";
import { baseURL } from "../../utils/apiLink";

const url = `${baseURL}/carrier`;

const suggestCarrier = async (filter: string[]): Promise<any> => {
    const response = await httpClient.post({
        url: url + "/suggest",
        data: {
            data: filter
        },
    });
    return response.data;
};

const changeCarrier = async (filter: any): Promise<any> => {
    const response = await httpClient.put({
        url: url ,
        data: {
            data: filter
        },
    });
    return response.data;
};

const requestCarrier = async (filter: any): Promise<any> => {
    const response = await httpClient.put({
        url: url + "/request",
        data: {
            data: filter
        },
    });
    return response.data;
};

const carrierApi = {
    suggestCarrier: suggestCarrier,
    changeCarrier: changeCarrier,
    requestCarrier: requestCarrier
};

export default carrierApi;