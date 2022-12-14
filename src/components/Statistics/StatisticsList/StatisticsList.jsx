import React from 'react';
import css from './StatisticsList.module.css';
import PropTypes from 'prop-types'

export default function StatisticsList({ items }) {
  return (
      <ul className={css.stat__list}>{ items.map(({ id, label, percentage }) =>
        <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>)}</ul>)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};