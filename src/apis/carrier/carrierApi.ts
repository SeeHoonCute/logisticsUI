import { IRequestType } from "../../components/Table/ApproverTable";
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

const getRequestCarrier = async (filter: any): Promise<IRequestType[]> => {
    const response = await httpClient.post({
        url: url + "/request/filter",
        data: {
            data: filter
        },
    });
    return response.data.data as IRequestType[];
};

const changeCarrier = async (data: any): Promise<any> => {
    const response = await httpClient.put({
        url: url ,
        data: {
            data: data
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

const getCarrierInfo = async (): Promise<any> => {
    const response = await httpClient.get({
        url: url + "/info" ,
    });
    return response.data.data;
};  

const createRequestCarrier = async (data: string[]): Promise<any> => {
    const response = await httpClient.post({
        url: url + "/request",
        data: {
            data: data
        },
    });
    return response.data;
};

const carrierApi = {
    suggestCarrier: suggestCarrier,
    changeCarrier: changeCarrier,
    requestCarrier: requestCarrier,
    getRequestCarrier: getRequestCarrier,
    getCarrierInfo: getCarrierInfo,
    createRequestCarrier: createRequestCarrier
};

export default carrierApi;