import css from '../FriendListItem/FriendListItem.module.css'
import PropTypes from 'prop-types'

export default function FriendListItem({ avatar, name, isOnline }) {
      return (
        <li className={css.item}>
            <span className={isOnline ? `${css.status}` : `${css.status} ${css.status__offline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li> 
  )
}

FriendListItem.propTypes = {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }
