import React from 'react'

export default function Statistics(stats) {
    console.log(stats)
  return (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
            <li className="item">
                <span className="label">.docx</span>
                <span className="percentage">4%</span>
            </li>
            <li className="item">
                <span className="label">.mp3</span>
                <span className="percentage">14%</span>
            </li>
            <li className="item">
                <span className="label">.pdf</span>
                <span className="percentage">41%</span>
            </li>
            <li className="item">
                <span className="label">.mp4</span>
                <span className="percentage">12%</span>
            </li>
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