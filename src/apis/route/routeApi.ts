import { IRouteType } from "../../components/Table/Table";
import httpClient from "../../httpClient/httpClient";
import { baseURL } from "../../utils/apiLink";

const url = `${baseURL}/route`;

const getRoute = async (): Promise<IRouteType> => {
    const response = await httpClient.get({
        url: url,
    });
    return response.data.result as IRouteType;
};

const routeApi = {
    getRoute: getRoute,
};

export default routeApi;