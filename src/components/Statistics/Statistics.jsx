import StatisticsList from './StatisticsList/StatisticsList'

export default function Statistics({ title, stats }) {
  return (
      <section className="statistics">
        {title && <h2 className="title">Upload stats</h2>}
          <StatisticsList items={ stats } />

    </section>
  )
}

// function Color(){
//      this.r = Math.floor(Math.random()*255);
//      this.g = Math.floor(Math.random()*255);
//      this.b = Math.floor(Math.random()*255);
//      this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
//   }