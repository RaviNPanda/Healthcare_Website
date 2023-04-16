import React from 'react'
import {Line} from 'react-chartjs-2';
function Home_chart() {
    const data = {
        labels:['Jan','Feb','Mar','Jun','July'],
        datasets:[
            {
                label:"Sales for 2020",
                data:[3,2,2,1,5]
            }
        ]
    }
  return (
    <div>
        <Line data={data} />
         <h1>harsh</h1>
    </div>
  )
}

export default Home_chart