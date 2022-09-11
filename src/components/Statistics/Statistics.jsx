import StatisticsList from "./StatisticsList/StatisticsList";
import x from './StatisticsList/StatisticsList.module.css';
import css from '../Profile/Profile.module.css';

export default function Statistics({ title, stats }) {
  return (
      <section className={x.statistics}>
          {title && <h2 className={css.title}>Upload stats</h2>}
          <StatisticsList items={stats} />
           <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>

    </section>
  )
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };