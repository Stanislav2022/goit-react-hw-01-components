import React from 'react';
import css from './StatisticsList.modules.css';

export default function StatisticsList({ items }) {
    const elements = items.map(({ id, label, percentage }) =>
        <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
    console.log(elements);
  return (
      <ul className={css.stat__list}>{ elements }</ul>
  )
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

