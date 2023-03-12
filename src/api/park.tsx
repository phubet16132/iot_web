import coreApi from "../core/axios"
import { ApiRouteKey } from "../path/client"


export function getAllParkDetail(){
    return new Promise((resolve, reject) => {
        coreApi
            .get(ApiRouteKey.getAllParkDetail)
            .then((res) => resolve(res.data))
            .catch(reject)
    })
}