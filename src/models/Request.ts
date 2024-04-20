 export interface RequestResponse {
    isSuccess: boolean,
    message ?:string,
    result: unknown,
    results: Array<unknown>
}