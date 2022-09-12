import TransactionHistoryTable from './TransactionHistoryTable';
import css from './TransactionHistory.module.css'


export default function TransactionHistory({items}) {
    const elements = items.map(({ id, type, amount, currency }) => <TransactionHistoryTable key={id} type={type} amount={amount} currency={currency} />)
    return (
      <table className={css.transaction__history}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>{elements}</tbody>
    </table>
  )
}
