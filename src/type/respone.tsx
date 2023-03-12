export declare namespace ApiResponse {
    interface Park{
        id: string,
        parkName: string,
        parkCap: number,
        currentPark: number,
        createAt: string
    }

    interface ParkDetail{
        parkDetail: any
        id: string,
        action: string,
        parkAt: string,
        parkTimeAt: string,
        park: Park
    }
}