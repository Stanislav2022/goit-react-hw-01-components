import css from './StatisticsList.modules.css'

export default function StatisticsList({ items }) {
    const elements = items.map(({ id, label, percentage }) =>
        <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
    console.log(elements);
  return (
      <ul className={css.stat__list}>{ elements }</ul>
  )
}

