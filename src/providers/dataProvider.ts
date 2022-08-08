import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { basePath } from "./env";
import simpleRestProvider from 'ra-data-simple-rest';
import axios from 'axios';
const apiUrl = `${basePath}/api/v2`;

const httpClient = (url: string, options: any = {}) => {
    options.user = {
      authenticated: true,
      token: `Bearer ${localStorage.getItem('token')}`,
    };
    if (url.includes("/register/") && options.method === "PUT") {
           options.method = "PATCH";
     }
    return fetchUtils.fetchJson(url, options);
  };

export const dataProvider = {
    ...simpleRestProvider(apiUrl, httpClient),
    createMany: async (resource:any, params:any) => {
        try {
          // Client side processing, perform on request at a time and 
          //the resolved promised are returned as an array.
          const data = await Promise.all(
            params.data.map((requestData:any) => {
              axios.post(`${apiUrl}/${resource}`, requestData)
            })
          );
    
          // Or server side processing, send all at once and let the server return results for all
        //   const { data } = axios.post(`${apiUrl}/${resource}`, params.data);
    
          return { data };
        } catch (error) {
          return Promise.reject(error);
        }
      }, httpClient
};