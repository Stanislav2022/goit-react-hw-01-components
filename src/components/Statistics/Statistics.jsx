import React from 'react'
import StatisticsList from './StatisticsList/StatisticsList.jsx'

export default function Statistics(stats) {
    console.log(stats)
  return (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
            <StatisticsList />
        <ul className="stat-list">
              
        </ul>
    </section>
  )
}

// function Color(){
//      this.r = Math.floor(Math.random()*255);
//      this.g = Math.floor(Math.random()*255);
//      this.b = Math.floor(Math.random()*255);
//      this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
//   }