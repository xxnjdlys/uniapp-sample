import axios from "axios";
import { UniAdapter } from "uniapp-axios-adapter";
import log from "@/common/log"
export let baseUrl

if (process.env.config.APP_DEBUG === true) {
    baseUrl = process.env.config.API_HOST_DEBUG
    log.d('开发环境' + ` , ${baseUrl}`);
} else {
    baseUrl = process.env.config.API_HOST
    log.d('生产环境' + ` , ${baseUrl}`);
}

const request = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    adapter: UniAdapter,
});

request.interceptors.request.use((config) => {
    //带上token
    // config.headers["Authorization"] = "token";
    return config;
});

request.interceptors.response.use((response) => {
    // 统一处理响应,返回Promise以便链式调用
    const statusCode = response.status
    if (statusCode >= 200 && statusCode < 300) {
        // log.i(`http response ${statusCode} , ${response.statusText}`)
        const { data } = response;
        if (data) {
            return Promise.resolve(data);
        }else{
            return Promise.reject(data);
        }
    }else if(statusCode === 500){
        log.e(`http response ${statusCode} , ${response.statusText}`)
    }else {
        log.e(`http response ${statusCode} , ${response.statusText}`)
    }

    if (response.status === 200) {
        const { data } = response;
        if (data) {
            return Promise.resolve(data);
        }else{
            return Promise.reject(data);
        }
    } else {
        return Promise.reject(response);
    }
});

export default request;
