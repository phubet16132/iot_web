import React from 'react'
import { ApiResponse } from '../type/respone'
import ParkDetailList from './ParkDetailList';

import "./css/ParkDetailTable.css"

const ParkDetailTable = (props: ApiResponse.ParkDetail) => {
    const evenSource = new EventSource("http://localhost:3000/park/sse/detail", {
        withCredentials: true,
    })

    evenSource.onmessage = ({data}) => {
        console.log(data)
    }

    const parkDetailLists = props.parkDetail
        .sort((pA: ApiResponse.ParkDetail, pB: ApiResponse.ParkDetail) => {
            return new Date(pB.parkTimeAt).getTime() - new Date(pA.parkTimeAt).getTime()
        })
        .map((parkDetail: ApiResponse.ParkDetail) =>
            <ParkDetailList {...parkDetail} />
        );

    return (
        <div className="table-wrape">
            <div className="table-head">
                <div className="park-name">Park Name</div>
                <div className="park-action">Action</div>
                <div className="park-time">Time</div>
            </div>
            <div className="table-park-detail">
                {parkDetailLists}
            </div>
        </div>
    )
}

export default ParkDetailTable