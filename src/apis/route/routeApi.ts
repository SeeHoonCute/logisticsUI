import { IRouteType } from "../../components/Table/Table";
import httpClient from "../../httpClient/httpClient";
import { baseURL } from "../../utils/apiLink";

const url = `${baseURL}/route`;

const getCurrenDate = () => {
    const date = new Date();
    const _date = [date.getFullYear(), date.getMonth, date.getDate]
    return _date[0] + "-" + _date[1] + "-" + _date[2];
}


const getRoutes = async (filter: any): Promise<IRouteType[]> => {
    
    const response = await httpClient.post({
        url: url,
        data: filter ?? {
            data: {
                fromDate: "2023-12-05" 
            }
        },
    });
    return response.data.data as IRouteType[];
};

const getSuggestions = async (routeId: Array<string>): Promise<any> => {
    const response = await httpClient.post({
        url: `${baseURL}/carrier/suggest`,
        data: {data : routeId},
    });
    console.log('response', response)
    return response.data;
};

const routeApi = {
    getRoutes: getRoutes,
    getSuggestions: getSuggestions,
};

export default routeApi;