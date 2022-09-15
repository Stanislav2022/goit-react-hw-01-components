import PropTypes from 'prop-types'

export default function TransactionHistoryTable({type, amount, currency }) {
  return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
  )
}

TransactionHistoryTable.propTypes = {
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }