import React from 'react'

export default function StatisticsList({ items }) {
    console.log(items);
    const elements = items.map(({ id, label, percentage }) => 
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
  return (
      <ul className="stat-list">{ elements }</ul>
  )
}

