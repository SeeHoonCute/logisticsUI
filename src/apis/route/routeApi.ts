import { IRouteType } from "../../components/Table/Table";
import httpClient from "../../httpClient/httpClient";
import { baseURL } from "../../utils/apiLink";

const url = `${baseURL}/route`;

const getRoutes = async (filter: any): Promise<IRouteType[]> => {
    const response = await httpClient.post({
        url: url,
        data: filter ?? {
            data: {
                fromDate: "2023-12-05"
                // "endDate" : "2023-12-19",
                // "location" : {
                //     "countryId" : 84,
                //     "provinceId": 21,
                //     "districtId" : 36,
                //     "communeId" : 7
                // },
                // "status" : -2
            }
        },
    });
    console.log('response', response)
    return response.data as IRouteType[];
};


const routeApi = {
    getRoutes: getRoutes,
};

export default routeApi;