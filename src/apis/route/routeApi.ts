import { IRouteType } from "../../components/Table/Table";
import httpClient from "../../httpClient/httpClient";
import { baseURL } from "../../utils/apiLink";

const url = `${baseURL}/route`;

const getRoutes = async (): Promise<IRouteType[]> => {
    const response = await httpClient.get({
        url: url,
    });
    return response.data.result as IRouteType[];
};

const createRoute = async (newRoute: IRouteType): Promise<string> => {
    const response = await httpClient.post({
        url: url,
        data: newRoute,
    });
    return response.data.result as string;
};

const deleteRoute = async (id: string): Promise<string> => {
    const response = await httpClient.delete({
        url: url + '/' + id,
    });
    return response.data.result as string;
};

const routeApi = {
    getRoutes: getRoutes,
    createRoute: createRoute,
    deleteRoutesssssss :deleteRoute,
};

export default routeApi;