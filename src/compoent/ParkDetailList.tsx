import React from 'react'
import { ApiResponse } from '../type/respone'
import "./css/ParkDetailList.css"

const ParkDetailList = (props: ApiResponse.ParkDetail) => {
  return (
    <div className="park-detail-wrape">
        <div className="park-detail-parkname">{props.park.parkName}</div>
        <div className="park-detail-action">{props.action}</div>
        <div className="park-detail-time">{props.parkTimeAt}</div>
    </div>
  )
}

export default ParkDetailList