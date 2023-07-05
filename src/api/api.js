import http from '@/common/http.js'

export class Api {
    getTest(){
        return http({
            url: 'api/score/documents',
            method: 'get',
            params: {
                // id: 123,
            }
        })

    }

    postTest(){
        return http({
            url: 'example/api/test',
            method: 'post',
            data: {
                id: 123,
            }
        })
    }

}

const api = new Api();
export default api