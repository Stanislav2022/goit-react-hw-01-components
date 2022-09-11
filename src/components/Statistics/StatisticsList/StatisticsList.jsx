

export default function StatisticsList({ items }) {
    const elements = items.map(({ id, label, percentage }) =>
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
    console.log(elements);
  return (
      <ul className="stat-list">{ elements }</ul>
  )
}

