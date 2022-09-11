import StatisticsList from "./StatisticsList/StatisticsList";
import css from './StatisticsList/StatisticsList.module.css';
import PropTypes from 'prop-types'

export default function Statistics({ title, stats }) {
  return (
      <section className={css.statistics}>
          {title && <h2 className={css.title}>Upload stats</h2>}
          <StatisticsList items={stats} />
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};