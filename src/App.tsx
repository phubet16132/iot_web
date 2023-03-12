import { useQuery } from 'react-query'
import { getAllParkDetail } from './api/park'
import './App.css'
import ParkDetailTable from './compoent/ParkDetailTable';

function App() {
  const { data: parkDetails = [], error: parkDetailError, isLoading: isParkDetailLoading } = useQuery(
    "parkDetail",
    getAllParkDetail
  )
    
  if(parkDetailError) return (<div className='error'><h1>Api Error :(</h1></div>)
  if(isParkDetailLoading) return (<div className='error'><h1>Loading...</h1></div>)
    
  return (
    <div className="app-page">
      <div className='header'><div className="app-topic">Smart Car Park <span className='by'>by</span> <span className='group-name'>ComA+</span></div></div>
      <div className="app-content">
        <div className="park-detail-table-home">
          <ParkDetailTable parkDetail = {parkDetails}/>
        </div>
      </div>
    </div>
  )
}

export default App
